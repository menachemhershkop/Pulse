import { Log } from "@/app/ui/types";
import { getLogs } from "../../lib/dal/services/log-service";
import LogsTable from "@/app/ui/logs/LogsTable";
import LogsFilter from "@/app/ui/logs/LogsFilter";

interface LogsPageProps {
  searchParams: Promise<{
    missionName?: string;
    priority?: string;
    state?: string;
  }>;
}

export default async function LogsPage({ searchParams }: LogsPageProps) {
  const params = await searchParams;

  const logs = (await getLogs()) as unknown as Log[];

  const filteredLogs = logs.filter((log) => {
    const matchMissionName =
      !params.missionName ||
      log.mission.missionName
        .toLowerCase()
        .includes(params.missionName.toLowerCase());

    const matchPriority =
      !params.priority || log.mission.priority === params.priority;

    const matchState = !params.state || log.state === params.state;

    return matchMissionName && matchPriority && matchState;
  });

  return (
    <div className="p-8 max-w-6xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-6">מעקב וביצוע משימות</h1>

      <LogsFilter />

      <LogsTable logs={filteredLogs} />
    </div>
  );
}