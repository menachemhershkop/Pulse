"use client";

import AssignedUserBadge from "./AssignedUserBadge";

interface MissionRowProps {
  mission: {
    missionId: number;
    missionName: string;
    user: { firstName: string; lastName: string };
    createAt: Date|string;
  };
  onDelete: (id: number) => void;
  deleteAction: (id: number) => Promise<number>;
}

export default function MissionRow({ mission, onDelete, deleteAction }: MissionRowProps) {
  const formatMissionDate = (dateParam: string | Date | undefined) => {
    if (!dateParam) return '---'; 
    
    const d = new Date(dateParam);
    if (isNaN(d.getTime())) {
      return 'תאריך לא חוקי'; 
    }
    return d.toLocaleDateString('he-IL');
  };
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{mission.missionId}</td>

      <td className="p-3 font-medium">{mission.missionName}</td>

      <td className="p-3">
        <AssignedUserBadge
          name={`${mission.user.firstName} ${mission.user.lastName}`}
        />
      </td>
      <td className="p-3">
        {formatMissionDate(mission.createAt)}
      </td>
      <td className="p-4 text-left">
        <form
          action={async () => {
            const deletedId = await deleteAction(mission.missionId);
            onDelete(deletedId);
          }}
        >
          <button className="text-red-600 hover:text-red-800 text-sm font-bold bg-red-50 px-2 py-1 rounded border border-red-200">
            מחק משימה 🗑️
          </button>
        </form>
      </td>
    </tr>
  );
}
