import GearGuide from "@/components/GearGuide";

export const metadata = {
  title: "세팅 가이드 | 메이플랜드 최적화",
};

export default function GearPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">직업별 장비 세팅 가이드</h1>
        <p className="text-gray-500 text-sm mt-1">
          직업 계열을 선택하면 레벨 구간별 추천 장비, 스탯 배분, 습득 방법을 안내합니다.
        </p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <GearGuide />
      </div>
    </div>
  );
}
