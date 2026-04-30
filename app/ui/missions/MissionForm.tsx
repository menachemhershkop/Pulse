"use client"
import { createMission } from "@/app/lib/dal/services/mission-service";
import { useActionState } from "react";
import { ActionState } from "../types";


interface MissionFormProps {
    users: {
        id: number;
        firstName: string;
        lastName: string;
    }[];
}

export default function MissionForm({ users }: MissionFormProps) {
    const [state, formAction, isPending] = useActionState<ActionState, FormData>(
  createMission,
  {}
);
    return (
        <form
            action={formAction}
            className="bg-white p-6 rounded-lg border shadow-sm mb-8 flex flex-col gap-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <input
            name="missionName"
            placeholder="שם המשימה"
            className={`border p-2 rounded ${state?.error ? 'border-red-300' : ''}`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <select name="userId" className="border p-2 rounded">
            <option value="">אחראי...</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <select name="priority" className="border p-2 rounded" defaultValue="medium">
            <option value="low">עדיפות נמוכה</option>
            <option value="medium">עדיפות בינונית</option>
            <option value="high">עדיפות גבוהה</option>
          </select>
        </div>
      </div>

      <button type="submit" disabled={isPending} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition font-bold">
        {isPending ? "יוצר..." : "צור משימה חדשה"}
      </button>

      {/* הצגת הודעות סטטוס */}
      {state?.error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
          ⚠️ {state.error}
        </div>
      )}
      {state?.success && (
        <div className="p-3 bg-green-50 text-green-600 rounded-lg text-sm font-medium">
          ✅ {state.success}
        </div>
      )}
        </form>
    )
}
