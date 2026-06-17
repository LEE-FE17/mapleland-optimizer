"use client";

import { useState } from "react";
import { JOBS, JOB_CLASS_NAMES, getJobsByClass } from "@/data/jobs";
import { Job, JobClass } from "@/lib/types";

interface Props {
  selectedJobId: string | null;
  onSelect: (job: Job) => void;
}

const CLASS_ICONS: Record<JobClass, string> = {
  warrior: "⚔️",
  magician: "🔮",
  bowman: "🏹",
  thief: "🗡️",
  pirate: "⚓",
};

const CLASS_COLORS: Record<JobClass, string> = {
  warrior: "bg-red-100 border-red-400 text-red-800",
  magician: "bg-purple-100 border-purple-400 text-purple-800",
  bowman: "bg-green-100 border-green-400 text-green-800",
  thief: "bg-yellow-100 border-yellow-400 text-yellow-800",
  pirate: "bg-blue-100 border-blue-400 text-blue-800",
};

const TIER_LABELS = ["초보자", "1차", "2차", "3차", "4차"];

export default function JobSelector({ selectedJobId, onSelect }: Props) {
  const [selectedClass, setSelectedClass] = useState<JobClass | null>(null);

  const jobClasses: JobClass[] = ["warrior", "magician", "bowman", "thief", "pirate"];

  const jobsByTier = selectedClass
    ? [1, 2, 3, 4].map((tier) =>
        getJobsByClass(selectedClass).filter((j) => j.tier === tier)
      )
    : [];

  return (
    <div className="space-y-4">
      {/* 계열 선택 */}
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">계열 선택</p>
        <div className="flex gap-2 flex-wrap">
          {jobClasses.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls === selectedClass ? null : cls)}
              className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                selectedClass === cls
                  ? CLASS_COLORS[cls] + " shadow-md"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {CLASS_ICONS[cls]} {JOB_CLASS_NAMES[cls]}
            </button>
          ))}
        </div>
      </div>

      {/* 직업 선택 트리 */}
      {selectedClass && (
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm font-medium text-gray-600 mb-3">직업 선택</p>
          <div className="grid grid-cols-1 gap-2">
            {jobsByTier.map((tierJobs, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-xs text-gray-400 w-8 mt-2 shrink-0">{TIER_LABELS[idx + 1]}</span>
                <div className="flex gap-2 flex-wrap">
                  {tierJobs.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => onSelect(job)}
                      className={`px-3 py-1.5 rounded-lg text-sm border transition-all ${
                        selectedJobId === job.id
                          ? CLASS_COLORS[selectedClass] + " shadow"
                          : "bg-white border-gray-200 hover:border-gray-400 text-gray-700"
                      }`}
                    >
                      {job.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 선택된 직업 정보 */}
      {selectedJobId && (() => {
        const job = JOBS.find((j) => j.id === selectedJobId);
        if (!job) return null;
        return (
          <div className={`rounded-lg p-3 border-2 ${CLASS_COLORS[job.class]}`}>
            <p className="font-semibold">{CLASS_ICONS[job.class]} {job.name}</p>
            <p className="text-xs mt-1">
              사용 무기: {job.weaponTypes.join(", ")}
            </p>
          </div>
        );
      })()}
    </div>
  );
}
