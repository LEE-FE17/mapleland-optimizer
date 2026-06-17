import { Town } from "@/lib/types";

// 가격 출처: 블로그(B플러스) 2025년 11월 23일 모든 월드 직접 실측

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
        npcName: "무기 상인",
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
  // 마나 엘릭서는 엘리니아 단독 판매 (604 메소)
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
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
          { itemId: "2000006", itemName: "마나 엘릭서", price: 604 },
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

  // ── 루디브리엄 ──────────────────────────────────────────────────────────
  // 쭈쭈바(HP 2000, 2185메소), 팥빙수(MP 2000, 3800메소) 판매
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
          { itemId: "2000001", itemName: "주황 포션", price: 80 },
          { itemId: "2000002", itemName: "하얀 포션", price: 160 },
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
        ],
      },
      {
        npcId: "ludi_food",
        npcName: "잡화 상인 미스키",
        townId: "ludibrium",
        items: [
          { itemId: "ml_jjujjuba", itemName: "쭈쭈바", price: 2185 },
          { itemId: "ml_patbingsu", itemName: "팥빙수", price: 3800 },
        ],
      },
      {
        npcId: "ludi_scroll",
        npcName: "잡화 상인",
        townId: "ludibrium",
        items: [
          { itemId: "2030000", itemName: "마을 귀환 주문서", price: 200 },
        ],
      },
    ],
  },

  // ── 아쿠아리아 ──────────────────────────────────────────────────────────
  // 순록의 우유(HP 5000, 5600메소) 판매
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
          { itemId: "2000003", itemName: "파란 포션", price: 100 },
          { itemId: "ml_milk", itemName: "순록의 우유", price: 5600 },
        ],
      },
    ],
  },

  // ── 버섯신사 (세계여행 - 일본) ──────────────────────────────────────────
  // 키노코(돼지사골) HP 800/850메소, 라면 HP 1000/1100메소,
  // 키노코(구운돼지) HP 1500/1600메소, 어묵(꼬치) MP 250/550메소,
  // 어묵(접시) MP 500/1300메소
  {
    id: "mushroom_shrine",
    name: "버섯신사",
    region: "버섯신사",
    shops: [
      {
        npcId: "shrine_food",
        npcName: "버섯신사 잡화상",
        townId: "mushroom_shrine",
        items: [
          { itemId: "ml_kinoko1", itemName: "키노코(돼지사골)", price: 850 },
          { itemId: "ml_ramen", itemName: "라면", price: 1100 },
          { itemId: "ml_kinoko2", itemName: "키노코(구운돼지)", price: 1600 },
          { itemId: "ml_eomuk1", itemName: "어묵(꼬치)", price: 550 },
          { itemId: "ml_eomuk2", itemName: "어묵(접시)", price: 1300 },
        ],
      },
    ],
  },

  // ── 지구방위본부 (세계여행) ─────────────────────────────────────────────
  // 장어구이 HP 800/1045메소, 맑은물 MP 800/1567메소,
  // 새벽의 이슬 MP 4000/7695메소, 황혼의 이슬 MP 5000/9690메소
  {
    id: "omega_sector",
    name: "지구방위본부",
    region: "지구방위본부",
    shops: [
      {
        npcId: "omega_food",
        npcName: "지구방위본부 잡화상",
        townId: "omega_sector",
        items: [
          { itemId: "ml_jangeo", itemName: "장어구이", price: 1045 },
          { itemId: "ml_water", itemName: "맑은물", price: 1567 },
          { itemId: "ml_dawn", itemName: "새벽의 이슬", price: 7695 },
          { itemId: "ml_dusk", itemName: "황혼의 이슬", price: 9690 },
        ],
      },
    ],
  },

  // ── 쇼와마을 (세계여행 - 일본) ──────────────────────────────────────────
  // 살살 녹는 치즈 HP 4000/4500메소
  {
    id: "showa",
    name: "쇼와마을",
    region: "쇼와마을",
    shops: [
      {
        npcId: "showa_food",
        npcName: "쇼와마을 잡화상",
        townId: "showa",
        items: [
          { itemId: "ml_cheese", itemName: "살살 녹는 치즈", price: 4500 },
        ],
      },
    ],
  },

  // ── 뉴리프시티 (리프레시티) ──────────────────────────────────────────────
  // 광전사의 엘릭서 HP 1500/1600메소, 대마법사의 엘릭서 MP 1500/3700메소,
  // 진저 에일 HP+MP 7500/18750메소, 인삼 원액 HP+MP 4000/10000메소,
  // 혼스터 HP 6000/6700메소, 마나불 MP 6000/12200메소
  {
    id: "new_leaf_city",
    name: "뉴리프시티",
    region: "뉴리프시티",
    minLevel: 100,
    shops: [
      {
        npcId: "nlc_elixir",
        npcName: "뉴리프시티 잡화상",
        townId: "new_leaf_city",
        items: [
          { itemId: "ml_warrior_elixir", itemName: "광전사의 엘릭서", price: 1600 },
          { itemId: "ml_mage_elixir", itemName: "대마법사의 엘릭서", price: 3700 },
          { itemId: "ml_ginger_ale", itemName: "진저 에일", price: 18750 },
          { itemId: "ml_insam", itemName: "인삼 원액", price: 10000 },
          { itemId: "ml_honster", itemName: "혼스터", price: 6700 },
          { itemId: "ml_manabul", itemName: "마나불", price: 12200 },
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
