import { Town } from "@/lib/types";

export const TOWNS: Town[] = [
  // ── 헤네시스 ────────────────────────────────────────────────────────────
  {
    id: "henesys",
    name: "헤네시스",
    region: "빅토리아 아일랜드",
    shops: [
      {
        npcId: "henesys_potion",
        npcName: "약사 채리",
        townId: "henesys",
        items: [
          { itemId: "2000000", itemName: "빨간 포션", price: 25 },
          { itemId: "2000001", itemName: "주황 포션", price: 80 },
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
          { itemId: "2000006", itemName: "마나 엘릭서", price: 310 },
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
        ],
      },
      {
        npcId: "henesys_scroll",
        npcName: "잡화 상인",
        townId: "henesys",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
          { itemId: "2030004", itemName: "헤네시스 귀환 주문서", price: 250 },
        ],
      },
      {
        npcId: "henesys_arrow",
        npcName: "무기 상인 레드",
        townId: "henesys",
        items: [
          { itemId: "2060001", itemName: "활전용 청동화살", price: 5 },
          { itemId: "2060002", itemName: "활전용 강철화살", price: 10 },
          { itemId: "2060003", itemName: "활전용 화살", price: 20 },
          { itemId: "2061001", itemName: "석궁전용 청동화살", price: 5 },
          { itemId: "2061002", itemName: "석궁전용 강철화살", price: 10 },
        ],
      },
    ],
  },

  // ── 엘리니아 ────────────────────────────────────────────────────────────
  {
    id: "ellinia",
    name: "엘리니아",
    region: "빅토리아 아일랜드",
    shops: [
      {
        npcId: "ellinia_potion",
        npcName: "약사 로시",
        townId: "ellinia",
        items: [
          { itemId: "2000000", itemName: "빨간 포션", price: 25 },
          { itemId: "2000001", itemName: "주황 포션", price: 80 },
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
          { itemId: "2000006", itemName: "마나 엘릭서", price: 310 },
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
        ],
      },
      {
        npcId: "ellinia_scroll",
        npcName: "잡화 상인",
        townId: "ellinia",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
          { itemId: "2030002", itemName: "엘리니아 귀환 주문서", price: 250 },
        ],
      },
    ],
  },

  // ── 페리온 ──────────────────────────────────────────────────────────────
  {
    id: "perion",
    name: "페리온",
    region: "빅토리아 아일랜드",
    shops: [
      {
        npcId: "perion_potion",
        npcName: "약사 트레이",
        townId: "perion",
        items: [
          { itemId: "2000000", itemName: "빨간 포션", price: 25 },
          { itemId: "2000001", itemName: "주황 포션", price: 80 },
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
        ],
      },
      {
        npcId: "perion_scroll",
        npcName: "잡화 상인",
        townId: "perion",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
          { itemId: "2030003", itemName: "페리온 귀환 주문서", price: 250 },
        ],
      },
    ],
  },

  // ── 커닝시티 ────────────────────────────────────────────────────────────
  {
    id: "kerning",
    name: "커닝시티",
    region: "빅토리아 아일랜드",
    shops: [
      {
        npcId: "kerning_potion",
        npcName: "약사 레이나",
        townId: "kerning",
        items: [
          { itemId: "2000000", itemName: "빨간 포션", price: 25 },
          { itemId: "2000001", itemName: "주황 포션", price: 80 },
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
        ],
      },
      {
        npcId: "kerning_scroll",
        npcName: "잡화 상인",
        townId: "kerning",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
          { itemId: "2030005", itemName: "커닝시티 귀환 주문서", price: 250 },
        ],
      },
      {
        npcId: "kerning_stars",
        npcName: "무기 상인",
        townId: "kerning",
        items: [
          { itemId: "2070000", itemName: "수비 표창", price: 250 },
          { itemId: "2070001", itemName: "월비 표창", price: 500 },
          { itemId: "2070002", itemName: "목비 표창", price: 1000 },
          { itemId: "2070003", itemName: "금비 표창", price: 1500 },
        ],
      },
    ],
  },

  // ── 리스 항구 ────────────────────────────────────────────────────────────
  {
    id: "lith",
    name: "리스 항구",
    region: "빅토리아 아일랜드",
    shops: [
      {
        npcId: "lith_potion",
        npcName: "약사",
        townId: "lith",
        items: [
          { itemId: "2000000", itemName: "빨간 포션", price: 25 },
          { itemId: "2000001", itemName: "주황 포션", price: 80 },
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
        ],
      },
      {
        npcId: "lith_scroll",
        npcName: "잡화 상인",
        townId: "lith",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
          { itemId: "2030001", itemName: "리스 항구 귀환 주문서", price: 250 },
        ],
      },
    ],
  },

  // ── 슬리피우드 ──────────────────────────────────────────────────────────
  {
    id: "sleepywood",
    name: "슬리피우드",
    region: "빅토리아 아일랜드",
    minLevel: 50,
    shops: [
      {
        npcId: "sleepy_potion",
        npcName: "약사 로코",
        townId: "sleepywood",
        items: [
          { itemId: "2000001", itemName: "주황 포션", price: 80 },
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
          { itemId: "2000006", itemName: "마나 엘릭서", price: 310 },
          { itemId: "2000004", itemName: "엘릭서", price: 1000 },
          { itemId: "2000005", itemName: "파워 엘릭서", price: 2500 },
        ],
      },
      {
        npcId: "sleepy_scroll",
        npcName: "잡화 상인",
        townId: "sleepywood",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
          { itemId: "2030006", itemName: "슬리피우드 귀환 주문서", price: 300 },
        ],
      },
    ],
  },

  // ── 오르비스 ────────────────────────────────────────────────────────────
  {
    id: "orbis",
    name: "오르비스",
    region: "오르비스",
    minLevel: 50,
    shops: [
      {
        npcId: "orbis_potion",
        npcName: "오르비스 약사",
        townId: "orbis",
        items: [
          { itemId: "2000001", itemName: "주황 포션", price: 80 },
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
          { itemId: "2000006", itemName: "마나 엘릭서", price: 310 },
          { itemId: "2000004", itemName: "엘릭서", price: 1000 },
          { itemId: "2000005", itemName: "파워 엘릭서", price: 2500 },
        ],
      },
      {
        npcId: "orbis_scroll",
        npcName: "오르비스 잡화상",
        townId: "orbis",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
        ],
      },
    ],
  },

  // ── 엘나스 ──────────────────────────────────────────────────────────────
  {
    id: "elnath",
    name: "엘나스",
    region: "엘나스",
    minLevel: 60,
    shops: [
      {
        npcId: "elnath_potion",
        npcName: "엘나스 약사",
        townId: "elnath",
        items: [
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
          { itemId: "2000006", itemName: "마나 엘릭서", price: 310 },
          { itemId: "2000004", itemName: "엘릭서", price: 1000 },
          { itemId: "2000005", itemName: "파워 엘릭서", price: 2500 },
        ],
      },
      {
        npcId: "elnath_scroll",
        npcName: "엘나스 잡화상",
        townId: "elnath",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
        ],
      },
    ],
  },

  // ── 루디브리엄 ──────────────────────────────────────────────────────────
  {
    id: "ludibrium",
    name: "루디브리엄",
    region: "루디브리엄",
    minLevel: 70,
    shops: [
      {
        npcId: "ludi_potion",
        npcName: "루디 약사",
        townId: "ludibrium",
        items: [
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
          { itemId: "2000006", itemName: "마나 엘릭서", price: 310 },
          { itemId: "2000004", itemName: "엘릭서", price: 1000 },
          { itemId: "2000005", itemName: "파워 엘릭서", price: 2500 },
        ],
      },
      {
        npcId: "ludi_scroll",
        npcName: "루디 잡화상",
        townId: "ludibrium",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
        ],
      },
    ],
  },

  // ── 아쿠아리아 ──────────────────────────────────────────────────────────
  {
    id: "aqua",
    name: "아쿠아리아",
    region: "아쿠아리아",
    minLevel: 85,
    shops: [
      {
        npcId: "aqua_potion",
        npcName: "아쿠아 약사",
        townId: "aqua",
        items: [
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
          { itemId: "2000006", itemName: "마나 엘릭서", price: 310 },
          { itemId: "2000004", itemName: "엘릭서", price: 1000 },
          { itemId: "2000005", itemName: "파워 엘릭서", price: 2500 },
        ],
      },
    ],
  },

  // ── 마가티아 ────────────────────────────────────────────────────────────
  {
    id: "magatia",
    name: "마가티아",
    region: "마가티아",
    minLevel: 90,
    shops: [
      {
        npcId: "magatia_potion",
        npcName: "마가티아 약사",
        townId: "magatia",
        items: [
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
          { itemId: "2000006", itemName: "마나 엘릭서", price: 310 },
          { itemId: "2000004", itemName: "엘릭서", price: 1000 },
          { itemId: "2000005", itemName: "파워 엘릭서", price: 2500 },
        ],
      },
    ],
  },
];

export function getTownById(id: string): Town | undefined {
  return TOWNS.find((t) => t.id === id);
}

export function getTownsByRegion(region: string): Town[] {
  return TOWNS.filter((t) => t.region === region);
}
