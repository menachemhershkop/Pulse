"use client";

import MissionRow from "./MissionRow";
import EmptyMissionsState from "./EmptyMissionsState";
import { useOptimistic } from "react";


interface MissionTableProps {
  missions: {
    missionId: number;
    missionName: string;
    user: { firstName: string; lastName: string };
    createAt: Date;
    adultLogs: {state: string}[];
  }[];
  deleteAction: (id: number) => Promise<number>;
  markAsDoneAction:(id:number)=> Promise<void>;
}

export default function MissionTable({ missions, deleteAction, markAsDoneAction }: MissionTableProps) {
  const [optimisticMissions, removeOptimistic] = useOptimistic(
    missions,
    (current, id: number) => current.filter((m) => m.missionId !== id)
  );

  if (missions.length === 0) return <EmptyMissionsState />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3">ID</th>
            <th className="p-3">שם המשימה</th>
            <th className="p-3">אחראי</th>
            <th>נוצר ב-</th>
            <th className="p-3">פעולות</th>
          </tr>
        </thead>

        <tbody>
          {optimisticMissions.map((m) => (
            <MissionRow
              key={m.missionId}
              mission={m}
              onDelete={removeOptimistic}
              deleteAction={deleteAction}
              markAsDoneAction={markAsDoneAction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
