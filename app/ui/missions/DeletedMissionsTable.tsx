"use client";

import { restoreMission } from "@/app/lib/dal/services/mission-service";
import { useActionState, useOptimistic, useTransition, useState } from "react";
import TableHead from "./TableHead";
import EmptyState from "./EmptyState";
import StatusMessage from "./StatusMessage";
import DeletedMissionRow from "./DeletedMissionRow";

export type Priority = "low" | "medium" | "high";

export interface Mission {
  missionId: number;
  missionName: string;
  priority: Priority | string;
  user: { firstName: string; lastName: string };
}

interface Props {
  deletedMissions: Mission[];
}

interface ActionState {
  success: string | null;
  error: string | null;
}

export default function DeletedMissionsTable({ deletedMissions }: Props) {
  const [pendingId, setPendingId] = useState<number | null>(null);

  const [state, formAction] = useActionState<ActionState, FormData>(
  async (_, formData) => {
    const id = Number(formData.get("missionId"));

    try {
      const result = await restoreMission(id);

      return {
        success: result.success ?? "המשימה שוחזרה",
        error: null,
      };
    } catch  {
      return {
        success: null,
        error: {message: "שגיאה בשחזור המשימה"},
      };
    }
  },
  { success: null, error: null }
);
  const [missions, removeMission] = useOptimistic(
    deletedMissions,
    (current, id: number) =>
      current.filter((m) => m.missionId !== id)
  );

  const [, startTransition] = useTransition();

  function handleRestore(id: number, formData: FormData) {
    setPendingId(id);

    startTransition(() => {
      removeMission(id);
      formAction(formData);
    });
  }

  if (missions.length === 0) return <EmptyState />;

  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden mt-8">
      <TableHead />

      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
            <TableHead.Columns />
          </thead>

          <tbody className="divide-y">
            {missions.map((mission) => (
              <DeletedMissionRow
                key={mission.missionId}
                mission={mission}
                onRestore={handleRestore}
                isPending={pendingId === mission.missionId}
              />
            ))}
          </tbody>
        </table>
      </div>

      <StatusMessage state={state} />
    </div>
  );
}