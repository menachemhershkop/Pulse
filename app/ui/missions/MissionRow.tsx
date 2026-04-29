import AssignedUserBadge from "./AssignedUserBadge";
import { deleteMission } from "@/app/lib/dal/services/mission-service";

interface MissionRowProps {
    mission: {
        missionId: number;
        missionName: string;
        user: { firstName: string, lastName: string };
    };
}

export default function MissionRow({ mission }: MissionRowProps) {
    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3">{mission.missionId}</td>

            <td className="p-3 font-medium">{mission.missionName}</td>

            <td className="p-3">
                <AssignedUserBadge
                    name={`${mission.user.firstName} ${mission.user.lastName}`}
                />
            </td>

            <td className="p-4 text-left">
                <form
                    action={async () => {
                        "use server";
                        await deleteMission(mission.missionId);
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
