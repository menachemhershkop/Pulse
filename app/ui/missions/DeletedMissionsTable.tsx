"use client"
import { restoreMission } from "@/app/lib/dal/services/mission-service";
import { useActionState, useOptimistic } from "react";

interface Mission {
    missionId: number;
    missionName: string;
    priority: string;
    user: { firstName: string; lastName: string };
}
interface DeletedMissionsTableProps {
    deletedMissions: Mission[]
}

interface State {
    missions: Mission[];
    message: string | null;
    error: string | null;
    restoringId: number | null
}

export default function DeletedMissionsTable({ deletedMissions }: DeletedMissionsTableProps) {
    const initialState: State = {
        missions: deletedMissions,
        message: null,
        error: null,
        restoringId: null
    };
    const [state, restoreAction, isPending] = useActionState(
        async (prevState: State, formData: FormData): Promise<State> => {
            const id = Number(formData.get("missionId"));
            try {
                const result = await restoreMission(id);
                if (result.success) {
                    return {
                        missions: prevState.missions.filter((m) => m.missionId !== id),
                        message: result.success,
                        error: null,
                        restoringId: null,
                    };
                }
                return {
                    ...prevState,
                    error: result.error ?? "שגיאה לא ידועה",
                    message: null,
                    restoringId: null
                };
            } catch {
                return{
                    ...prevState,
                    error: "שגיאה בשחזור המשימה",
                    message:null,
                    restoringId:null,
                };
            }   
        },
        initialState
    );
    console.log(state);
    
    const [optinisticMissions, removeOptimistic] = useOptimistic(
        state.missions,
        (currentMissions, missionId:number) =>
            currentMissions.filter((m)=>m.missionId !==missionId)
    );
    if (state.missions.length ===0){
        return (
            <div className="p-6 bg-gray-50 border rounded-xl text-center text-gray-400 mt-8">
        אין משימות בארכיון / בסל המחזור.
      </div>
    );
}
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mt-8">
      <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-800">סל מחזור ומשימות שנמחקו</h2>
      </div>

      <table className="w-full text-right border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="p-4 font-bold text-gray-600">שם המשימה</th>
            <th className="p-4 font-bold text-gray-600">אחראי</th>
            <th className="p-4 font-bold text-gray-600">עדיפות</th>
            <th className="p-4 font-bold text-gray-600 text-left">פעולה</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {optinisticMissions.map((mission) => (
            <tr key={mission.missionId } className="hover:bg-gray-50 transition-colors">
              <td className="p-4 font-semibold text-gray-800">{mission.missionName}</td>
              <td className="p-4 text-gray-700">
                {mission.user?.firstName} {mission.user?.lastName}
              </td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    mission.priority === "high"
                      ? "bg-red-50 text-red-700"
                      : mission.priority === "medium"
                      ? "bg-orange-50 text-orange-700"
                      : "bg-green-50 text-green-700"
                  }`}
                >
                  {mission.priority}
                </span>
              </td>
              <td className="p-4 text-left">
                <form
  action={async (formData) => {
    const id = Number(formData.get("missionId"));

    // 👇 הסרה מיידית מה־UI
    removeOptimistic(id);

    // 👇 קריאה לשרת
    await restoreAction(formData);
  }}
>
  <input type="hidden" name="missionId" value={mission.missionId} />
  <button
    type="submit"
    disabled={isPending}
    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-100 transition disabled:opacity-50"
  >
    {isPending ? "משחזר..." : "שחזר"}
  </button>
</form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {state.message && (
        <div className="p-4 bg-green-50 border-t text-green-600 text-sm font-medium">
          {state.message}
        </div>
      )}

      {state.error && (
        <div className="p-4 bg-red-50 border-t text-red-600 text-sm font-medium">
          {state.error}
        </div>
      )}
    </div>
  );
}