"use client";

import { useState } from "react";
import { GEAR_GUIDES } from "@/data/gear";
import { ClassGearGuide, GearEntry, ObtainMethod } from "@/lib/types";

const CLASS_TABS = [
  { id: "warrior",  label: "전사",   icon: "⚔️" },
  { id: "magician", label: "마법사", icon: "🔮" },
  { id: "bowman",   label: "궁수",   icon: "🏹" },
  { id: "thief",    label: "도적",   icon: "🗡️" },
  { id: "pirate",   label: "해적",   icon: "⚓" },
];

const OBTAIN_COLOR: Record<ObtainMethod, string> = {
  NPC:   "bg-blue-100 text-blue-700",
  드랍:  "bg-green-100 text-green-700",
  퀘스트:"bg-purple-100 text-purple-700",
  거래소:"bg-orange-100 text-orange-700",
};

const SLOT_ICON: Record<string, string> = {
  무기: "🗡️", 방패: "🛡️", 모자: "🪖", 상의: "👕", 하의: "👖",
  한벌옷: "👘", 신발: "👟", 장갑: "🧤", 망토: "🧣",
  귀걸이: "💎", 반지: "💍", 펜던트: "📿",
};

function GearCard({ item }: { item: GearEntry }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
            <span className="text-sm">{SLOT_ICON[item.slot] ?? "📦"}</span>
            <span className="text-xs text-gray-500 font-medium">{item.slot}</span>
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${OBTAIN_COLOR[item.obtain]}`}>
              {item.obtain}
            </span>
          </div>
          <p className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</p>
          {item.keyStats && (
            <p className="text-xs text-indigo-700 font-mono mt-1">{item.keyStats}</p>
          )}
          {item.obtainHint && (
            <p className="text-xs text-gray-400 mt-1">{item.obtainHint}</p>
          )}
          {item.note && (
            <p className="text-xs text-amber-700 bg-amber-50 rounded px-2 py-1 mt-2">{item.note}</p>
          )}
        </div>
        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded shrink-0">
          Lv.{item.level}+
        </span>
      </div>
    </div>
  );
}

function JobAdvanceSection({ guide }: { guide: ClassGearGuide }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
      <h3 className="font-semibold text-gray-800 mb-3">전직 경로</h3>
      <div className="flex flex-wrap gap-2 items-center">
        {guide.jobAdvance.map((adv, i) => (
          <div key={adv.tier} className="flex items-center gap-2">
            <div className="text-center">
              <div className="bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded mb-1 whitespace-nowrap">
                {adv.tier}차 · Lv.{adv.level}
              </div>
              <div className="text-xs text-gray-600 max-w-[140px] leading-tight">{adv.branches}</div>
              <div className="text-xs text-gray-400 mt-0.5">({adv.requirements})</div>
            </div>
            {i < guide.jobAdvance.length - 1 && (
              <span className="text-gray-300 text-lg">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatBuildSection({ guide }: { guide: ClassGearGuide }) {
  return (
    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-6">
      <h3 className="font-semibold text-indigo-800 mb-1">스탯 배분 기준</h3>
      <p className="text-sm font-bold text-indigo-900">{guide.statBuild}</p>
      <p className="text-xs text-indigo-700 mt-2 leading-relaxed">{guide.statBuildNote}</p>
    </div>
  );
}

export default function GearGuide() {
  const [selectedClass, setSelectedClass] = useState<string>("warrior");
  const defaultGuide = GEAR_GUIDES.find((g) => g.jobClass === "warrior");
  const [openRanges, setOpenRanges] = useState<Set<string>>(
    new Set(defaultGuide?.levelGuides[1]?.label ? [defaultGuide.levelGuides[1].label] : [])
  );

  const guide = GEAR_GUIDES.find((g) => g.jobClass === selectedClass);

  function toggleRange(label: string) {
    setOpenRanges((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  }

  return (
    <div className="space-y-6">
      {/* 직업 탭 */}
      <div className="flex gap-2 flex-wrap">
        {CLASS_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setSelectedClass(tab.id);
              setOpenRanges(new Set());
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedClass === tab.id
                ? "bg-gray-900 text-white"
                : "bg-white border border-gray-200 text-gray-600 hover:border-gray-400"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {guide && (
        <>
          <StatBuildSection guide={guide} />
          <JobAdvanceSection guide={guide} />

          {/* 범례 */}
          <div className="flex gap-2 flex-wrap text-xs">
            {(Object.entries(OBTAIN_COLOR) as [ObtainMethod, string][]).map(([k, v]) => (
              <span key={k} className={`px-2 py-0.5 rounded-full font-medium ${v}`}>
                {k}
              </span>
            ))}
          </div>

          {/* 레벨 구간 아코디언 */}
          <div className="space-y-3">
            {guide.levelGuides.map((lg) => {
              const isOpen = openRanges.has(lg.label);
              return (
                <div key={lg.label} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleRange(lg.label)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">Lv. {lg.label}</span>
                    <span className="text-gray-400 text-lg">{isOpen ? "▲" : "▼"}</span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 bg-gray-50 space-y-4">
                      {/* 장비 그리드 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {lg.gear.map((item, i) => (
                          <GearCard key={i} item={item} />
                        ))}
                      </div>

                      {/* 팁 */}
                      {lg.tips.length > 0 && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                          <p className="text-xs font-semibold text-yellow-800 mb-2">💡 구간 팁</p>
                          <ul className="space-y-1">
                            {lg.tips.map((tip, i) => (
                              <li key={i} className="text-xs text-yellow-900 flex gap-2">
                                <span className="shrink-0 text-yellow-500">•</span>
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
