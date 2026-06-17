import PriceTable from "@/components/PriceTable";

export const metadata = {
  title: "가격 비교 | 메이플랜드 최적화",
};

export default function ComparePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">마을별 가격 비교</h1>
        <p className="text-gray-500 text-sm mt-1">
          아이템별로 각 마을 NPC의 판매가를 비교합니다. 초록색이 최저가입니다.
        </p>
      </div>
      <PriceTable />
    </div>
  );
}
