import { Mission, Priority } from "./DeletedMissionsTable";

const PRIORITY_STYLES: Record<Priority, string> = {
  high: "bg-red-50 text-red-700",
  medium: "bg-orange-50 text-orange-700",
  low: "bg-green-50 text-green-700",
};

interface Props {
  mission: Mission;
  onRestore: (id: number, formData: FormData) => void;
  isPending: boolean;
}

export default function DeletedMissionRow({ mission, onRestore, isPending }: Props) {
  return (
    <tr className="hover:bg-gray-50/50 transition">
      <td className="p-4 font-medium">{mission.missionName}</td>

      <td className="p-4 text-gray-600">
        {mission.user?.firstName} {mission.user?.lastName}
      </td>

      <td className="p-4 text-center">
        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${PRIORITY_STYLES[mission.priority as Priority]}`}>
          {mission.priority}
        </span>
      </td>

      <td className="p-4 text-left">
        <form action={(formData) => onRestore(mission.missionId, formData)}>
          <input type="hidden" name="missionId" value={mission.missionId} />

          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-semibold hover:bg-indigo-600 hover:text-white transition disabled:opacity-50"
          >
            {isPending ? "משחזר..." : "שחזר"}
          </button>
        </form>
      </td>
    </tr>
  );
}