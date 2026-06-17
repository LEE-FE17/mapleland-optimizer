"use client";

import { useState, useMemo } from "react";
import { TOWNS } from "@/data/towns";
import { ITEMS } from "@/data/items";
import { Item, ItemCategory, ItemSubCategory } from "@/lib/types";

interface PriceRow {
  item: Item;
  prices: { townId: string; townName: string; npcName: string; price: number }[];
  cheapestTownId: string;
}

const CATEGORY_OPTIONS: { value: ItemCategory | "전체"; label: string }[] = [
  { value: "전체", label: "전체" },
  { value: "소비", label: "소비" },
  { value: "발사체", label: "발사체" },
  { value: "장비", label: "장비" },
  { value: "기타", label: "기타" },
];

const SUBCATEGORY_OPTIONS: { value: ItemSubCategory | "전체"; label: string }[] = [
  { value: "전체", label: "전체" },
  { value: "포션", label: "포션" },
  { value: "귀환 주문서", label: "귀환주문서" },
  { value: "화살", label: "화살" },
  { value: "표창", label: "표창" },
  { value: "방어구", label: "방어구" },
  { value: "무기", label: "무기" },
  { value: "악세서리", label: "악세서리" },
];

export default function PriceTable() {
  const [categoryFilter, setCategoryFilter] = useState<ItemCategory | "전체">("전체");
  const [subCategoryFilter, setSubCategoryFilter] = useState<ItemSubCategory | "전체">("전체");
  const [search, setSearch] = useState("");

  // 모든 마을의 상점에서 아이템별 가격 수집
  const priceRows = useMemo((): PriceRow[] => {
    const filteredItems = ITEMS.filter((item) => {
      if (categoryFilter !== "전체" && item.category !== categoryFilter) return false;
      if (subCategoryFilter !== "전체" && item.subCategory !== subCategoryFilter) return false;
      if (search && !item.name.includes(search)) return false;
      return true;
    });

    return filteredItems.map((item) => {
      const prices: PriceRow["prices"] = [];

      for (const town of TOWNS) {
        for (const shop of town.shops) {
          const shopItem = shop.items.find((si) => si.itemId === item.id);
          if (shopItem) {
            prices.push({
              townId: town.id,
              townName: town.name,
              npcName: shop.npcName,
              price: shopItem.price,
            });
          }
        }
      }

      const cheapest = prices.reduce(
        (min, p) => (p.price < min.price ? p : min),
        prices[0] ?? { price: Infinity, townId: "" }
      );

      return { item, prices, cheapestTownId: cheapest.townId };
    });
  }, [categoryFilter, subCategoryFilter, search]);

  const allTowns = TOWNS.filter((t) =>
    priceRows.some((r) => r.prices.some((p) => p.townId === t.id))
  );

  const hasData = priceRows.some((r) => r.prices.length > 0);

  return (
    <div className="space-y-4">
      {/* 필터 */}
      <div className="flex gap-3 flex-wrap items-center">
        <input
          type="text"
          placeholder="아이템 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <div className="flex gap-1">
          {CATEGORY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setCategoryFilter(opt.value as ItemCategory | "전체")}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                categoryFilter === opt.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1 flex-wrap">
          {SUBCATEGORY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSubCategoryFilter(opt.value as ItemSubCategory | "전체")}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${
                subCategoryFilter === opt.value
                  ? "bg-gray-700 text-white border-gray-700"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* 데이터 없음 안내 */}
      {!hasData && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
          <p className="text-amber-700 font-medium">아직 상점 가격 데이터가 없습니다.</p>
          <p className="text-amber-600 text-sm mt-1">
            <code className="bg-amber-100 px-1 rounded">npm run crawl</code> 을 실행하거나,{" "}
            <code className="bg-amber-100 px-1 rounded">src/data/towns.ts</code> 에 직접 데이터를 입력해주세요.
          </p>
        </div>
      )}

      {/* 가격 비교 테이블 */}
      {hasData && (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-600 sticky left-0 bg-gray-50">아이템</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">카테고리</th>
                <th className="px-4 py-3 text-left font-medium text-gray-600">레벨 제한</th>
                {allTowns.map((t) => (
                  <th key={t.id} className="px-4 py-3 text-right font-medium text-gray-600 whitespace-nowrap">
                    {t.name}
                  </th>
                ))}
                <th className="px-4 py-3 text-right font-medium text-green-700 whitespace-nowrap">최저가</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {priceRows
                .filter((r) => r.prices.length > 0)
                .map((row) => (
                  <tr key={row.item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium sticky left-0 bg-white">{row.item.name}</td>
                    <td className="px-4 py-3 text-gray-500">{row.item.subCategory}</td>
                    <td className="px-4 py-3 text-gray-500">{row.item.requiredLevel ?? "-"}</td>
                    {allTowns.map((t) => {
                      const p = row.prices.find((p) => p.townId === t.id);
                      const isCheapest = t.id === row.cheapestTownId;
                      return (
                        <td
                          key={t.id}
                          className={`px-4 py-3 text-right ${
                            isCheapest ? "text-green-700 font-semibold" : "text-gray-700"
                          }`}
                        >
                          {p ? `${p.price.toLocaleString()}메소` : "-"}
                        </td>
                      );
                    })}
                    <td className="px-4 py-3 text-right font-semibold text-green-700">
                      {row.prices.length > 0
                        ? `${Math.min(...row.prices.map((p) => p.price)).toLocaleString()}메소`
                        : "-"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
