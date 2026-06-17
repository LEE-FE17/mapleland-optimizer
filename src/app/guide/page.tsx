import LevelGuide from "@/components/LevelGuide";

export const metadata = {
  title: "레벨 가이드 | 메이플랜드 최적화",
};

export default function GuidePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">레벨별 쇼핑 가이드</h1>
        <p className="text-gray-500 text-sm mt-1">
          직업과 레벨 구간을 선택하면 필요한 아이템과 최적 구매처를 안내합니다.
        </p>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <LevelGuide />
      </div>
    </div>
  );
}
