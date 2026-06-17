/**
 * mapledb.kr 크롤러
 * - /npc.php       : 전체 NPC 목록 (ID, 이름)
 * - /search.php?q=NPC_ID&t=npc : NPC 상세 (마을 위치, 상점 아이템)
 * - /search.php?q=ITEM_ID&t=item : 아이템 상세 (기본 정보, 판매가)
 */

import axios from "axios";
import * as cheerio from "cheerio";

const BASE = "https://mapledb.kr";

const http = axios.create({
  baseURL: BASE,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    Referer: BASE,
  },
  timeout: 12000,
});

async function get(path: string): Promise<cheerio.CheerioAPI> {
  const { data } = await http.get(path);
  return cheerio.load(data);
}

// ── NPC 목록 ─────────────────────────────────────────────────────────────────

export interface NpcEntry {
  id: string;
  name: string;
}

export async function fetchNpcList(): Promise<NpcEntry[]> {
  const $ = await get("/npc.php");
  const results: NpcEntry[] = [];

  // 카드 형식: <a href="search.php?q=NPC_ID&t=npc"><img ...><h3>이름</h3></a>
  $("a[href*='t=npc']").each((_, el) => {
    const href = $(el).attr("href") ?? "";
    const match = href.match(/q=(\d+)/);
    const name = $(el).find("h3").text().trim();
    if (match && name) {
      results.push({ id: match[1], name });
    }
  });

  return results;
}

// ── NPC 상세 (마을 + 상점 아이템) ────────────────────────────────────────────

export interface NpcDetail {
  id: string;
  name: string;
  town: string;       // 예: "헤네시스"
  region: string;     // 예: "빅토리아 아일랜드"
  shopItems: ShopItemEntry[];
}

export interface ShopItemEntry {
  itemId: string;
  itemName: string;
  price: number;
}

export async function fetchNpcDetail(npcId: string): Promise<NpcDetail | null> {
  try {
    const $ = await get(`/search.php?q=${npcId}&t=npc`);

    // NPC 이름
    const name = $("h1, h2, .npc-name").first().text().trim();

    // 마을/지역 — "커닝시티: 커닝시티" 형태로 나오는 경우
    let town = "";
    let region = "";
    $("*").each((_, el) => {
      const text = $(el).text().trim();
      // "지역명: 마을명" 패턴
      const m = text.match(/^([^:]+):\s*(.+)$/);
      if (m && text.length < 60 && !town) {
        region = m[1].trim();
        town = m[2].trim();
      }
    });

    // 상점 아이템 — 테이블 또는 리스트
    const shopItems: ShopItemEntry[] = [];

    // 테이블 행 파싱
    $("table tr").each((_, row) => {
      const cells = $(row).find("td");
      if (cells.length < 2) return;

      const itemName = $(cells[0]).text().trim();
      const priceText = $(cells[1]).text().replace(/[^0-9]/g, "");
      const price = parseInt(priceText, 10);

      if (itemName && !isNaN(price) && price > 0) {
        const itemId = itemName.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
        shopItems.push({ itemId, itemName, price });
      }
    });

    // 리스트 파싱 (테이블 없을 때 대비)
    if (shopItems.length === 0) {
      $("li, .shop-item, .item-row").each((_, el) => {
        const text = $(el).text().trim();
        const priceMatch = text.match(/(\d[\d,]+)\s*메소/);
        const name = text.replace(/\d[\d,]+\s*메소/g, "").trim();
        if (priceMatch && name) {
          shopItems.push({
            itemId: name.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_가-힣]/g, ""),
            itemName: name,
            price: parseInt(priceMatch[1].replace(/,/g, ""), 10),
          });
        }
      });
    }

    return { id: npcId, name, town, region, shopItems };
  } catch (err) {
    console.error(`NPC ${npcId} 크롤링 실패:`, (err as Error).message);
    return null;
  }
}

// ── 아이템 상세 ───────────────────────────────────────────────────────────────

export interface ItemDetail {
  id: string;
  name: string;
  description: string;
  requiredLevel: number;
  sellPrice: number; // 상점 판매가 (유저→NPC)
  buyPrice: number;  // NPC 구입가 (NPC→유저) — 있는 경우
}

export async function fetchItemDetail(itemId: string): Promise<ItemDetail | null> {
  try {
    const $ = await get(`/search.php?q=${itemId}&t=item`);

    const name = $("h1, h2, .item-name").first().text().trim();
    const description = $(".description, .item-desc, p").first().text().trim();

    let requiredLevel = 0;
    let sellPrice = 0;
    let buyPrice = 0;

    $("*").each((_, el) => {
      const text = $(el).text().trim();

      const lvMatch = text.match(/(?:요구레벨|레벨)\s*[:：]?\s*(\d+)/);
      if (lvMatch) requiredLevel = parseInt(lvMatch[1], 10);

      const priceMatch = text.match(/(\d[\d,]+)\s*메소/);
      if (priceMatch) {
        const price = parseInt(priceMatch[1].replace(/,/g, ""), 10);
        if (text.includes("판매") || text.includes("상점")) sellPrice = price;
        if (text.includes("구입") || text.includes("구매")) buyPrice = price;
      }
    });

    return { id: itemId, name, description, requiredLevel, sellPrice, buyPrice };
  } catch (err) {
    console.error(`아이템 ${itemId} 크롤링 실패:`, (err as Error).message);
    return null;
  }
}

// ── 전체 실행 헬퍼 ────────────────────────────────────────────────────────────

export async function crawlAllNpcs(
  delayMs = 600,
  limit?: number
): Promise<NpcDetail[]> {
  const list = await fetchNpcList();
  const targets = limit ? list.slice(0, limit) : list;
  const results: NpcDetail[] = [];

  console.log(`총 ${targets.length}개 NPC 크롤링 시작`);

  for (let i = 0; i < targets.length; i++) {
    const npc = targets[i];
    process.stdout.write(`[${i + 1}/${targets.length}] ${npc.name} (${npc.id})... `);
    const detail = await fetchNpcDetail(npc.id);
    if (detail) {
      results.push(detail);
      console.log(`완료 (상점 아이템 ${detail.shopItems.length}개)`);
    } else {
      console.log("실패");
    }
    await new Promise((r) => setTimeout(r, delayMs));
  }

  return results;
}
