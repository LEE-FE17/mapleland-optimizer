import { Item } from "@/lib/types";

export const ITEMS: Item[] = [
  // ── 포션 ──────────────────────────────────────────────────────────────────
  { id: "2000000", name: "빨간 포션", category: "소비", subCategory: "포션", description: "HP 50 회복" },
  { id: "2000001", name: "주황 포션", category: "소비", subCategory: "포션", description: "HP 150 회복" },
  { id: "2000002", name: "하얀 포션", category: "소비", subCategory: "포션", description: "HP 300 회복" },
  { id: "2000003", name: "파란 포션", category: "소비", subCategory: "포션", description: "MP 100 회복" },
  { id: "2000004", name: "엘릭서", category: "소비", subCategory: "포션", description: "HP/MP 50% 회복" },
  { id: "2000005", name: "파워 엘릭서", category: "소비", subCategory: "포션", description: "HP/MP 완전 회복" },
  { id: "2000006", name: "마나 엘릭서", category: "소비", subCategory: "포션", description: "MP 300 회복" },

  // ── 귀환 주문서 ───────────────────────────────────────────────────────────
  { id: "2030000", name: "마을 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030001", name: "리스 항구 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030002", name: "엘리니아 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030003", name: "페리온 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030004", name: "헤네시스 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030005", name: "커닝시티 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030006", name: "슬리피우드 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },
  { id: "2030019", name: "노틸러스 귀환 주문서", category: "소비", subCategory: "귀환 주문서" },

  // ── 화살 (궁수용) ─────────────────────────────────────────────────────────
  { id: "2060001", name: "활전용 청동화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },
  { id: "2060002", name: "활전용 강철화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },
  { id: "2060003", name: "활전용 화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },
  { id: "2061001", name: "석궁전용 청동화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },
  { id: "2061002", name: "석궁전용 강철화살", category: "발사체", subCategory: "화살", requiredClass: ["bowman"] },

  // ── 표창 (도적용) ─────────────────────────────────────────────────────────
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
