"use client";

import AssignedUserBadge from "./AssignedUserBadge";

interface MissionRowProps {
  mission: {
    missionId: number;
    missionName: string;
    user: { firstName: string; lastName: string };
    createAt: Date | string;
    // בדיקה אם הלוג האחרון הוא "בוצע"
    adultLogs?: { state: string }[]; 
  };
  onDelete: (id: number) => void;
  deleteAction: (id: number) => Promise<number>;
  markAsDoneAction: (id: number) => Promise<void>;
}

export default function MissionRow({ mission, onDelete, deleteAction, markAsDoneAction }: MissionRowProps) {
  // לוגיקה לבדיקה האם המשימה בוצעה
  const isDone = mission.adultLogs?.[0]?.state === "בוצע";

  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="p-3 text-gray-500 text-sm">#{mission.missionId}</td>
      <td className="p-3 font-medium">{mission.missionName}</td>
      <td className="p-3">
        <AssignedUserBadge name={`${mission.user.firstName} ${mission.user.lastName}`} />
      </td>
      <td className="p-3 text-sm">
        {new Date(mission.createAt).toLocaleDateString('he-IL')}
      </td>
      
      <td className="p-4">
        <div className="flex gap-3 justify-end items-center">
          {isDone ? (
            // אם המשימה בוצעה: מציגים רק את הטקסט שביקשת
            <span className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full border border-green-200">
              משימה בוצעה בהצלחה
            </span>
          ) : (
            // אם המשימה לא בוצעה: מציגים את כפתורי הפעולה
            <>
              <form action={async () => {
                await markAsDoneAction(mission.missionId);
              }}>
                <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition shadow-sm font-medium">
                  סמן כבוצע ✓
                </button>
              </form>

              <form action={async () => {
                const deletedId = await deleteAction(mission.missionId);
                onDelete(deletedId);
              }}>
                <button className="text-red-600 hover:text-red-800 text-sm font-medium bg-red-50 px-2 py-1 rounded border border-red-100 hover:border-red-300 transition">
                  מחק משימה 🗑️
                </button>
              </form>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}