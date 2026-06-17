import Link from "next/link";

const FEATURES = [
  {
    icon: "💰",
    title: "마을별 가격 비교",
    description: "같은 아이템이 어느 마을 NPC에서 가장 저렴한지 한눈에 비교합니다.",
    href: "/compare",
    cta: "가격 비교하기",
  },
  {
    icon: "📋",
    title: "레벨별 쇼핑 가이드",
    description: "직업과 레벨 구간을 선택하면 필요한 아이템과 최적 구매처를 안내합니다.",
    href: "/guide",
    cta: "가이드 보기",
  },
];

const JOB_CLASSES = [
  { name: "전사", icon: "⚔️", color: "bg-red-100 text-red-700" },
  { name: "마법사", icon: "🔮", color: "bg-purple-100 text-purple-700" },
  { name: "궁수", icon: "🏹", color: "bg-green-100 text-green-700" },
  { name: "도적", icon: "🗡️", color: "bg-yellow-100 text-yellow-700" },
  { name: "해적", icon: "⚓", color: "bg-blue-100 text-blue-700" },
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          메이플랜드 아이템 최적화
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          직업별로 어느 마을에서 장비·소비·기타 아이템을 사는 게 가장 효율적인지
          <br />
          데이터로 비교해드립니다.
        </p>
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {JOB_CLASSES.map((cls) => (
            <span
              key={cls.name}
              className={`px-4 py-2 rounded-full text-sm font-medium ${cls.color}`}
            >
              {cls.icon} {cls.name}
            </span>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURES.map((f) => (
          <div
            key={f.href}
            className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{f.description}</p>
            <Link
              href={f.href}
              className="inline-block px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              {f.cta} →
            </Link>
          </div>
        ))}
      </section>

      <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="font-semibold text-blue-800 mb-2">📊 데이터 현황</h3>
        <p className="text-blue-700 text-sm leading-relaxed">
          포션, 귀환 주문서, 화살, 표창 등 주요 소비 아이템 데이터가 포함되어 있습니다.
          헤네시스·엘리니아·페리온·커닝시티·슬리피우드 등 10개 마을의 NPC 상점 정보를 비교할 수 있습니다.
        </p>
      </section>
    </div>
  );
}
