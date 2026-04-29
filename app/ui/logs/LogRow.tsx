import { Log } from "../types";
import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";
import { markAsDone } from "@/app/lib/dal/services/mission-service";

interface LogRowProps {
  log: Log;
}

export default function LogRow({ log }: LogRowProps) {
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-4 font-bold">{log.mission.missionName}</td>

      <td className="p-4 text-sm">
        <PriorityBadge priority={log.mission.priority} />
      </td>

      <td className="p-4">
        {log.user.firstName} {log.user.lastName}
      </td>

      <td className="p-4">
        <StatusBadge state={log.state} />
      </td>

      <td>{new Date(log.lestUpdate).toLocaleDateString('he-IL')}</td>
      <td className="p-4">
        {log.state !== "בוצע" && (
          <form
            action={async () => {
              "use server";
              await markAsDone(log.missionId, log.userId);
            }}
          >
            <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition shadow-sm">
              סמן כבוצע ✓
            </button>
          </form>
        )}
      </td>
    </tr>
  );
}
