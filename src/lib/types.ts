export type JobClass = "warrior" | "magician" | "bowman" | "thief" | "pirate";

export interface Job {
  id: string;
  name: string;
  class: JobClass;
  tier: 0 | 1 | 2 | 3 | 4; // 0=초보자, 1=1차, 2=2차, 3=3차, 4=4차
  parent?: string; // parent job id
  weaponTypes: WeaponType[];
  armorTypes: ArmorType[];
}

export type WeaponType =
  | "검(한손)"
  | "검(두손)"
  | "도끼(한손)"
  | "도끼(두손)"
  | "둔기(한손)"
  | "둔기(두손)"
  | "창"
  | "폴암"
  | "활"
  | "석궁"
  | "단검"
  | "아대"
  | "완드"
  | "스태프"
  | "너클"
  | "건"
  | "케이탈"
  | "클로"
  | "단도";

export type ArmorType =
  | "전사갑옷"
  | "마법사갑옷"
  | "궁수갑옷"
  | "도적갑옷"
  | "해적갑옷"
  | "공용갑옷";

export type ItemCategory = "소비" | "장비" | "기타" | "발사체";
export type ItemSubCategory =
  | "포션"
  | "스크롤"
  | "귀환 주문서"
  | "방어구"
  | "무기"
  | "악세서리"
  | "화살"
  | "표창"
  | "기타";

export interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  subCategory: ItemSubCategory;
  requiredLevel?: number;
  requiredClass?: JobClass[];
  description?: string;
  imageUrl?: string;
}

export interface NpcShop {
  npcId: string;
  npcName: string;
  townId: string;
  items: ShopItem[];
}

export interface ShopItem {
  itemId: string;
  itemName: string;
  price: number; // 메소
  stock?: number;
}

export interface Town {
  id: string;
  name: string;
  region: Region;
  minLevel?: number; // 추천 최소 레벨
  shops: NpcShop[];
}

export type Region =
  | "빅토리아 아일랜드"
  | "오르비스"
  | "엘나스"
  | "루디브리엄"
  | "아쿠아리아"
  | "마가티아"
  | "무릉도원"
  | "닌자성"
  | "지구방위본부"
  | "버섯신사"
  | "쇼와마을"
  | "뉴리프시티";

export type EquipSlot =
  | "무기" | "방패" | "모자" | "상의" | "하의" | "한벌옷"
  | "신발" | "장갑" | "망토" | "귀걸이" | "반지" | "펜던트";

export type ObtainMethod = "NPC" | "드랍" | "퀘스트" | "거래소";

export interface GearEntry {
  name: string;
  level: number;
  slot: EquipSlot;
  obtain: ObtainMethod;
  obtainHint?: string;
  keyStats?: string;
  note?: string;
}

export interface ClassGearGuide {
  jobClass: JobClass;
  className: string;
  statBuild: string;
  statBuildNote: string;
  jobAdvance: Array<{
    tier: number;
    level: number;
    requirements: string;
    branches: string;
  }>;
  levelGuides: Array<{
    range: [number, number];
    label: string;
    gear: GearEntry[];
    tips: string[];
  }>;
}

export interface PriceComparison {
  item: Item;
  prices: {
    townId: string;
    townName: string;
    npcName: string;
    price: number;
  }[];
  cheapestTownId: string;
}

export interface LevelGuide {
  levelRange: [number, number];
  jobClass: JobClass;
  jobId?: string;
  recommendations: ShoppingRecommendation[];
}

export interface ShoppingRecommendation {
  item: Item;
  town: Town;
  npcName: string;
  price: number;
  reason: string; // 왜 이 아이템이 이 레벨에 필요한지
}
