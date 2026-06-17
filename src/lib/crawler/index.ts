import axios from "axios";
import * as cheerio from "cheerio";
import { ShopItem, NpcShop } from "@/lib/types";

// 메이플랜드 위키 또는 공식 DB 기반 크롤러
// 실제 URL은 대상 사이트 확인 후 수정 필요

export interface CrawlTarget {
  url: string;
  townId: string;
  npcName: string;
  parser: "mapleland_wiki" | "maplestory_db";
}

async function fetchPage(url: string): Promise<string> {
  const response = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9",
    },
    timeout: 10000,
  });
  return response.data;
}

// 메이플랜드 위키 형식 파서
export function parseMaplelandWiki(html: string, townId: string, npcName: string): ShopItem[] {
  const $ = cheerio.load(html);
  const items: ShopItem[] = [];

  // 위키 아이템 테이블 파싱 (실제 구조에 맞게 수정 필요)
  $("table.itemTable tr").each((_, row) => {
    const cells = $(row).find("td");
    if (cells.length < 2) return;

    const itemName = $(cells[0]).text().trim();
    const priceText = $(cells[1]).text().replace(/[^0-9]/g, "");
    const price = parseInt(priceText, 10);

    if (itemName && !isNaN(price)) {
      items.push({
        itemId: itemName.toLowerCase().replace(/\s+/g, "_"),
        itemName,
        price,
      });
    }
  });

  return items;
}

// MapleStory DB 형식 파서 (maplestory.io 등)
export function parseMapleStoryDB(html: string): ShopItem[] {
  const $ = cheerio.load(html);
  const items: ShopItem[] = [];

  $(".shop-item").each((_, el) => {
    const itemName = $(el).find(".item-name").text().trim();
    const priceText = $(el).find(".item-price").text().replace(/[^0-9]/g, "");
    const price = parseInt(priceText, 10);

    if (itemName && !isNaN(price)) {
      items.push({
        itemId: itemName.toLowerCase().replace(/\s+/g, "_"),
        itemName,
        price,
      });
    }
  });

  return items;
}

export async function crawlShop(target: CrawlTarget): Promise<NpcShop | null> {
  try {
    console.log(`크롤링 중: ${target.npcName} (${target.townId}) - ${target.url}`);
    const html = await fetchPage(target.url);

    let items: ShopItem[] = [];
    if (target.parser === "mapleland_wiki") {
      items = parseMaplelandWiki(html, target.townId, target.npcName);
    } else if (target.parser === "maplestory_db") {
      items = parseMapleStoryDB(html);
    }

    return {
      npcId: `${target.townId}_${target.npcName}`,
      npcName: target.npcName,
      townId: target.townId,
      items,
    };
  } catch (err) {
    console.error(`크롤링 실패: ${target.url}`, err);
    return null;
  }
}

export async function crawlAll(targets: CrawlTarget[]): Promise<NpcShop[]> {
  const results: NpcShop[] = [];

  for (const target of targets) {
    const shop = await crawlShop(target);
    if (shop) results.push(shop);
    // 서버 부하 방지
    await new Promise((r) => setTimeout(r, 500));
  }

  return results;
}
