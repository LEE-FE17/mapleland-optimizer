import { Item } from "@/lib/types";

export const ITEMS: Item[] = [
  // ── 기본 HP 포션 (저레벨용) ────────────────────────────────────────────
  { id: "2000000", name: "빨간 포션", category: "소비", subCategory: "포션", description: "HP 50 회복" },
  { id: "2000001", name: "주황 포션", category: "소비", subCategory: "포션", description: "HP 150 회복" },
  { id: "2000002", name: "하얀 포션", category: "소비", subCategory: "포션", description: "HP 300 회복" },

  // ── 기본 MP 포션 (저레벨용) ────────────────────────────────────────────
  { id: "2000003", name: "파란 포션", category: "소비", subCategory: "포션", description: "MP 100 회복" },
  { id: "2000006", name: "마나 엘릭서", category: "소비", subCategory: "포션", description: "MP 300 회복" },

  // ── 고효율 HP 포션 (실사냥용, 출처: 블로그 2025.11 실측) ──────────────
  { id: "ml_jangeo", name: "장어구이", category: "소비", subCategory: "포션", description: "HP 800 회복" },
  { id: "ml_kinoko1", name: "키노코(돼지사골)", category: "소비", subCategory: "포션", description: "HP 800 회복" },
  { id: "ml_ramen", name: "라면", category: "소비", subCategory: "포션", description: "HP 1000 회복" },
  { id: "ml_kinoko2", name: "키노코(구운돼지)", category: "소비", subCategory: "포션", description: "HP 1500 회복" },
  { id: "ml_jjujjuba", name: "쭈쭈바", category: "소비", subCategory: "포션", description: "HP 2000 회복" },
  { id: "ml_cheese", name: "살살 녹는 치즈", category: "소비", subCategory: "포션", description: "HP 4000 회복" },
  { id: "ml_milk", name: "순록의 우유", category: "소비", subCategory: "포션", description: "HP 5000 회복" },
  { id: "ml_honster", name: "혼스터", category: "소비", subCategory: "포션", description: "HP 6000 회복" },

  // ── 고효율 MP 포션 (실사냥용, 출처: 블로그 2025.11 실측) ──────────────
  { id: "ml_eomuk1", name: "어묵(꼬치)", category: "소비", subCategory: "포션", description: "MP 250 회복" },
  { id: "ml_eomuk2", name: "어묵(접시)", category: "소비", subCategory: "포션", description: "MP 500 회복" },
  { id: "ml_water", name: "맑은물", category: "소비", subCategory: "포션", description: "MP 800 회복" },
  { id: "ml_patbingsu", name: "팥빙수", category: "소비", subCategory: "포션", description: "MP 2000 회복" },
  { id: "ml_dawn", name: "새벽의 이슬", category: "소비", subCategory: "포션", description: "MP 4000 회복" },
  { id: "ml_dusk", name: "황혼의 이슬", category: "소비", subCategory: "포션", description: "MP 5000 회복" },
  { id: "ml_manabul", name: "마나불", category: "소비", subCategory: "포션", description: "MP 6000 회복" },

  // ── 엘릭서류 (뉴리프시티 NPC, 출처: 블로그 2025.11 실측) ───────────────
  { id: "ml_warrior_elixir", name: "광전사의 엘릭서", category: "소비", subCategory: "포션", description: "HP 1500 회복" },
  { id: "ml_mage_elixir", name: "대마법사의 엘릭서", category: "소비", subCategory: "포션", description: "MP 1500 회복" },
  { id: "ml_ginger_ale", name: "진저 에일", category: "소비", subCategory: "포션", description: "HP+MP 7500 회복" },
  { id: "ml_insam", name: "인삼 원액", category: "소비", subCategory: "포션", description: "HP+MP 4000 회복" },

  // ── 귀환 주문서 ───────────────────────────────────────────────────────
  { id: "2030000", name: "마을 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030001", name: "리스 항구 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030002", name: "엘리니아 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030003", name: "페리온 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030004", name: "헤네시스 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030005", name: "커닝시티 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030006", name: "슬리피우드 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030019", name: "노틸러스 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },

  // ── 화살 (궁수용) ─────────────────────────────────────────────────────
  { id: "2060001", name: "활전용 청동화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },
  { id: "2060002", name: "활전용 강철화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },
  { id: "2060003", name: "활전용 화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },
  { id: "2061001", name: "석궁전용 청동화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },
  { id: "2061002", name: "석궁전용 강철화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },

  // ── 표창 (도적용) ─────────────────────────────────────────────────────
  { id: "2070000", name: "수비 표창", category: "발사체", subCategory: "표창", requiredLevel: 10, requiredClass: ["thief"] },
  { id: "2070001", name: "월비 표창", category: "발사체", subCategory: "표창", requiredLevel: 10, requiredClass: ["thief"] },
  { id: "2070002", name: "목비 표창", category: "발사체", subCategory: "표창", requiredLevel: 10, requiredClass: ["thief"] },
  { id: "2070003", name: "금비 표창", category: "발사체", subCategory: "표창", requiredLevel: 10, requiredClass: ["thief"] },
];

export function getItemById(id: string): Item | undefined {
  return ITEMS.find((i) => i.id === id);
}

export function getItemsByCategory(category: string): Item[] {
  return ITEMS.filter((i) => i.category === category);
}

export function getItemsBySubCategory(subCategory: string): Item[] {
  return ITEMS.filter((i) => i.subCategory === subCategory);
}
