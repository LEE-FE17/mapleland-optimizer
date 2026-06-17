import { crawlAll, CrawlTarget } from "../src/lib/crawler/index";
import * as fs from "fs";
import * as path from "path";

// 크롤링 대상 목록 - 실제 URL로 교체 필요
const TARGETS: CrawlTarget[] = [
  // 예시: 메이플랜드 관련 위키/DB 사이트의 NPC 상점 URL
  // {
  //   url: "https://wiki.mapleland.gg/npc/henesys-potion-shop",
  //   townId: "henesys",
  //   npcName: "약사 채리",
  //   parser: "mapleland_wiki",
  // },
];

async function main() {
  if (TARGETS.length === 0) {
    console.log("⚠️  크롤링 대상 URL이 설정되지 않았습니다.");
    console.log("scripts/crawl.ts 파일의 TARGETS 배열에 URL을 추가해주세요.");
    process.exit(0);
  }

  console.log(`크롤링 시작: 총 ${TARGETS.length}개 대상`);
  const shops = await crawlAll(TARGETS);

  const outputPath = path.join(__dirname, "../src/data/crawled-shops.json");
  fs.writeFileSync(outputPath, JSON.stringify(shops, null, 2), "utf-8");

  console.log(`✅ 완료: ${shops.length}개 상점 데이터 저장 → ${outputPath}`);
}

main().catch(console.error);
