"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { string } from "zod";


export default function LogsFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const handleFilterChange = (key: string, value: string)=>{
        const params = new URLSearchParams(searchParams.toString());
        if (value){
            params.set(key,value);
        } else{
            params.delete(key)
        }
        startTransition(()=>{router.push(`?${params.toString()}`)});
    };

  return (
    <div
      className={`flex flex-wrap gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-opacity ${
        isPending ? "opacity-50" : "opacity-100"
      }`}
    >
      {/* חיפוש לפי שם משימה */}
      <div className="flex-1 min-w-52">
        <input
          type="text"
          placeholder="חפש לפי שם משימה..."
          defaultValue={searchParams.get("missionName") || ""}
          onChange={(e) =>
            handleFilterChange("missionName", e.target.value)
          }
          className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      {/* פילטר עדיפות */}
      <select
        defaultValue={searchParams.get("priority") || ""}
        onChange={(e) => handleFilterChange("priority", e.target.value)}
        className="border border-gray-200 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">כל רמות העדיפות</option>
        <option value="high">גבוהה</option>
        <option value="medium">בינונית</option>
        <option value="low">נמוכה</option>
      </select>

      {/* פילטר סטטוס */}
      <select
        defaultValue={searchParams.get("state") || ""}
        onChange={(e) => handleFilterChange("state", e.target.value)}
        className="border border-gray-200 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">כל הסטטוסים</option>
        <option value="בוצע">בוצע</option>
        <option value="בתהליך">בתהליך</option>
      </select>
    </div>
  );
}