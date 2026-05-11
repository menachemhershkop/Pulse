"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function LogsFilter({missionNames}:{missionNames:string[]}) {
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

  return(
    <div
      className={`flex flex-wrap gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-opacity ${
        isPending ? "opacity-50" : "opacity-100"
      }`}
    >
      {/* במקום input — select */}
      <select
        defaultValue={searchParams.get("missionName") || ""}
        onChange={(e) => handleFilterChange("missionName", e.target.value)}
        className="flex-1 min-w-52 border border-gray-200 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">כל המשימות</option>
        {missionNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

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