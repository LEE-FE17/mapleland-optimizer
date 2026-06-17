import { Job } from "@/lib/types";

export const JOBS: Job[] = [
  // ── 초보자 ──
  { id: "beginner", name: "초보자", class: "warrior", tier: 0, weaponTypes: ["검(한손)"], armorTypes: ["공용갑옷"] },

  // ── 전사 계열 ──
  { id: "swordman", name: "검사", class: "warrior", tier: 1, parent: "beginner", weaponTypes: ["검(한손)", "검(두손)", "도끼(한손)", "도끼(두손)", "둔기(한손)", "둔기(두손)"], armorTypes: ["전사갑옷"] },
  { id: "fighter", name: "파이터", class: "warrior", tier: 2, parent: "swordman", weaponTypes: ["검(한손)", "검(두손)", "도끼(한손)", "도끼(두손)", "둔기(한손)", "둔기(두손)"], armorTypes: ["전사갑옷"] },
  { id: "page", name: "페이지", class: "warrior", tier: 2, parent: "swordman", weaponTypes: ["검(한손)", "검(두손)", "둔기(한손)", "둔기(두손)"], armorTypes: ["전사갑옷"] },
  { id: "spearman", name: "스피어맨", class: "warrior", tier: 2, parent: "swordman", weaponTypes: ["창", "폴암"], armorTypes: ["전사갑옷"] },
  { id: "crusader", name: "크루세이더", class: "warrior", tier: 3, parent: "fighter", weaponTypes: ["검(한손)", "검(두손)", "도끼(한손)", "도끼(두손)", "둔기(한손)", "둔기(두손)"], armorTypes: ["전사갑옷"] },
  { id: "whiteknight", name: "화이트나이트", class: "warrior", tier: 3, parent: "page", weaponTypes: ["검(한손)", "검(두손)", "둔기(한손)", "둔기(두손)"], armorTypes: ["전사갑옷"] },
  { id: "dragonknight", name: "드래곤나이트", class: "warrior", tier: 3, parent: "spearman", weaponTypes: ["창", "폴암"], armorTypes: ["전사갑옷"] },
  { id: "hero", name: "히어로", class: "warrior", tier: 4, parent: "crusader", weaponTypes: ["검(한손)", "검(두손)", "도끼(한손)", "도끼(두손)", "둔기(한손)", "둔기(두손)"], armorTypes: ["전사갑옷"] },
  { id: "paladin", name: "팔라딘", class: "warrior", tier: 4, parent: "whiteknight", weaponTypes: ["검(한손)", "검(두손)", "둔기(한손)", "둔기(두손)"], armorTypes: ["전사갑옷"] },
  { id: "darkknight", name: "다크나이트", class: "warrior", tier: 4, parent: "dragonknight", weaponTypes: ["창", "폴암"], armorTypes: ["전사갑옷"] },

  // ── 마법사 계열 ──
  { id: "magician", name: "마법사", class: "magician", tier: 1, parent: "beginner", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },
  { id: "wizard_fp", name: "위저드(불/독)", class: "magician", tier: 2, parent: "magician", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },
  { id: "wizard_il", name: "위저드(썬/콜)", class: "magician", tier: 2, parent: "magician", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },
  { id: "cleric", name: "클레릭", class: "magician", tier: 2, parent: "magician", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },
  { id: "mage_fp", name: "메이지(불/독)", class: "magician", tier: 3, parent: "wizard_fp", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },
  { id: "mage_il", name: "메이지(썬/콜)", class: "magician", tier: 3, parent: "wizard_il", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },
  { id: "priest", name: "프리스트", class: "magician", tier: 3, parent: "cleric", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },
  { id: "archmage_fp", name: "아크메이지(불/독)", class: "magician", tier: 4, parent: "mage_fp", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },
  { id: "archmage_il", name: "아크메이지(썬/콜)", class: "magician", tier: 4, parent: "mage_il", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },
  { id: "bishop", name: "비숍", class: "magician", tier: 4, parent: "priest", weaponTypes: ["완드", "스태프"], armorTypes: ["마법사갑옷"] },

  // ── 궁수 계열 ──
  { id: "bowman", name: "궁수", class: "bowman", tier: 1, parent: "beginner", weaponTypes: ["활", "석궁"], armorTypes: ["궁수갑옷"] },
  { id: "hunter", name: "헌터", class: "bowman", tier: 2, parent: "bowman", weaponTypes: ["활"], armorTypes: ["궁수갑옷"] },
  { id: "crossbowman", name: "크로스보우맨", class: "bowman", tier: 2, parent: "bowman", weaponTypes: ["석궁"], armorTypes: ["궁수갑옷"] },
  { id: "ranger", name: "레인저", class: "bowman", tier: 3, parent: "hunter", weaponTypes: ["활"], armorTypes: ["궁수갑옷"] },
  { id: "sniper", name: "저격수", class: "bowman", tier: 3, parent: "crossbowman", weaponTypes: ["석궁"], armorTypes: ["궁수갑옷"] },
  { id: "bowmaster", name: "보우마스터", class: "bowman", tier: 4, parent: "ranger", weaponTypes: ["활"], armorTypes: ["궁수갑옷"] },
  { id: "marksman", name: "크로스보우마스터", class: "bowman", tier: 4, parent: "sniper", weaponTypes: ["석궁"], armorTypes: ["궁수갑옷"] },

  // ── 도적 계열 ──
  { id: "thief", name: "도적", class: "thief", tier: 1, parent: "beginner", weaponTypes: ["단검", "아대", "단도", "클로"], armorTypes: ["도적갑옷"] },
  { id: "assassin", name: "어쌔신", class: "thief", tier: 2, parent: "thief", weaponTypes: ["클로", "아대"], armorTypes: ["도적갑옷"] },
  { id: "bandit", name: "시프", class: "thief", tier: 2, parent: "thief", weaponTypes: ["단검", "단도"], armorTypes: ["도적갑옷"] },
  { id: "hermit", name: "허밋", class: "thief", tier: 3, parent: "assassin", weaponTypes: ["클로", "아대"], armorTypes: ["도적갑옷"] },
  { id: "chiefbandit", name: "시프마스터", class: "thief", tier: 3, parent: "bandit", weaponTypes: ["단검", "단도"], armorTypes: ["도적갑옷"] },
  { id: "nightlord", name: "나이트로드", class: "thief", tier: 4, parent: "hermit", weaponTypes: ["클로", "아대"], armorTypes: ["도적갑옷"] },
  { id: "shadower", name: "섀도어", class: "thief", tier: 4, parent: "chiefbandit", weaponTypes: ["단검", "단도"], armorTypes: ["도적갑옷"] },

  // ── 해적 계열 ──
  { id: "pirate", name: "해적", class: "pirate", tier: 1, parent: "beginner", weaponTypes: ["너클", "건"], armorTypes: ["해적갑옷"] },
  { id: "brawler", name: "인파이터", class: "pirate", tier: 2, parent: "pirate", weaponTypes: ["너클"], armorTypes: ["해적갑옷"] },
  { id: "gunslinger", name: "건슬링거", class: "pirate", tier: 2, parent: "pirate", weaponTypes: ["건"], armorTypes: ["해적갑옷"] },
  { id: "marauder", name: "마로더", class: "pirate", tier: 3, parent: "brawler", weaponTypes: ["너클"], armorTypes: ["해적갑옷"] },
  { id: "outlaw", name: "아웃로", class: "pirate", tier: 3, parent: "gunslinger", weaponTypes: ["건"], armorTypes: ["해적갑옷"] },
  { id: "buccaneer", name: "바이퍼", class: "pirate", tier: 4, parent: "marauder", weaponTypes: ["너클"], armorTypes: ["해적갑옷"] },
  { id: "corsair", name: "캡틴", class: "pirate", tier: 4, parent: "outlaw", weaponTypes: ["건"], armorTypes: ["해적갑옷"] },
];

export const JOB_CLASS_NAMES: Record<string, string> = {
  warrior: "전사",
  magician: "마법사",
  bowman: "궁수",
  thief: "도적",
  pirate: "해적",
};

export function getJobById(id: string): Job | undefined {
  return JOBS.find((j) => j.id === id);
}

export function getJobsByClass(jobClass: string): Job[] {
  return JOBS.filter((j) => j.class === jobClass);
}

export function getJobTree(jobClass: string): Job[] {
  return JOBS.filter((j) => j.class === jobClass).sort((a, b) => a.tier - b.tier);
}
