"use client";

import { useState } from "react";
import { JOBS } from "@/data/jobs";
import { TOWNS } from "@/data/towns";
import { ITEMS } from "@/data/items";
import { Job, JobClass } from "@/lib/types";
import JobSelector from "./JobSelector";

interface LevelRange {
  label: string;
  min: number;
  max: number;
}

const LEVEL_RANGES: LevelRange[] = [
  { label: "1~10", min: 1, max: 10 },
  { label: "11~30", min: 11, max: 30 },
  { label: "31~50", min: 31, max: 50 },
  { label: "51~70", min: 51, max: 70 },
  { label: "71~100", min: 71, max: 100 },
  { label: "101~120", min: 101, max: 120 },
  { label: "121~150", min: 121, max: 150 },
  { label: "151~200", min: 151, max: 200 },
];

function getRecommendedTownForLevel(minLevel: number): string {
  if (minLevel <= 30) return "henesys";
  if (minLevel <= 50) return "kerning";
  if (minLevel <= 70) return "orbis";
  if (minLevel <= 100) return "elnath";
  if (minLevel <= 130) return "ludibrium";
  return "magatia";
}

export default function LevelGuide() {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedRange, setSelectedRange] = useState<LevelRange | null>(null);

  const selectedJob = selectedJobId ? JOBS.find((j) => j.id === selectedJobId) : null;

  // 레벨 구간에 맞는 추천 아이템 필터링
  const recommendedItems = selectedJob && selectedRange
    ? ITEMS.filter((item) => {
        if (item.category !== "장비" && item.category !== "소비" && item.category !== "발사체") return false;
        if (item.requiredLevel && item.requiredLevel > selectedRange.max) return false;
        if (item.requiredLevel && item.requiredLevel < selectedRange.min - 10) return false;
        if (item.requiredClass && !item.requiredClass.includes(selectedJob.class as JobClass)) return false;
        if (!item.requiredClass && item.category === "장비") return false;
        return true;
      })
    : [];

  const recommendedTownId = selectedRange
    ? getRecommendedTownForLevel(selectedRange.min)
    : null;
  const recommendedTown = recommendedTownId
    ? TOWNS.find((t) => t.id === recommendedTownId)
    : null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 직업 선택 */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-3">1. 직업 선택</h3>
          <JobSelector
            selectedJobId={selectedJobId}
            onSelect={(job) => setSelectedJobId(job.id)}
          />
        </div>

        {/* 레벨 구간 선택 */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-3">2. 레벨 구간 선택</h3>
          <div className="grid grid-cols-2 gap-2">
            {LEVEL_RANGES.map((range) => (
              <button
                key={range.label}
                onClick={() => setSelectedRange(range)}
                className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  selectedRange?.label === range.label
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                }`}
              >
                Lv. {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 결과 */}
      {selectedJob && selectedRange && (
        <div className="space-y-4">
          <div className="border-t pt-4">
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              {selectedJob.name} · Lv.{selectedRange.label} 쇼핑 가이드
            </h3>

            {/* 추천 마을 */}
            {recommendedTown && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                <p className="text-blue-800 font-semibold">
                  추천 쇼핑 마을: {recommendedTown.name}
                </p>
                <p className="text-blue-600 text-sm mt-1">
                  {recommendedTown.region} 소속 · 상점 {recommendedTown.shops.length}개
                </p>
              </div>
            )}

            {/* 추천 아이템 목록 */}
            {recommendedItems.length > 0 ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-500">이 레벨대 추천 구매 아이템</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recommendedItems.map((item) => {
                    // 해당 아이템을 파는 마을 중 가장 저렴한 곳 찾기
                    let cheapestPrice = Infinity;
                    let cheapestTownName = "-";
                    let cheapestNpcName = "-";

                    for (const town of TOWNS) {
                      for (const shop of town.shops) {
                        const si = shop.items.find((i) => i.itemId === item.id);
                        if (si && si.price < cheapestPrice) {
                          cheapestPrice = si.price;
                          cheapestTownName = town.name;
                          cheapestNpcName = shop.npcName;
                        }
                      }
                    }

                    return (
                      <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-800">{item.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{item.subCategory}</p>
                          </div>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                            Lv.{item.requiredLevel ?? 1}+
                          </span>
                        </div>
                        {cheapestPrice < Infinity ? (
                          <div className="mt-2 pt-2 border-t border-gray-100">
                            <p className="text-green-700 font-semibold text-sm">
                              {cheapestPrice.toLocaleString()} 메소
                            </p>
                            <p className="text-xs text-gray-400">
                              {cheapestTownName} · {cheapestNpcName}
                            </p>
                          </div>
                        ) : (
                          <p className="mt-2 text-xs text-amber-600">가격 데이터 없음</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-500">이 구간에 해당하는 아이템 데이터가 없습니다.</p>
                <p className="text-gray-400 text-sm mt-1">크롤링 후 데이터를 채워주세요.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {(!selectedJob || !selectedRange) && (
        <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-400">
          직업과 레벨 구간을 선택하면 맞춤 쇼핑 가이드가 표시됩니다.
        </div>
      )}
    </div>
  );
}
