import { getLogs } from "../../lib/dal/services/log-service";
import { getUsers } from "../../lib/dal/services/user-service";
import { getMissions } from "../../lib/dal/services/mission-service";
import LogsTable from "@/app/ui/logs/LogsTable";

export default async function LogsPage() {
  const [logs, users, missions] = await Promise.all([
    getLogs(),
    getUsers(),
    getMissions()
  ]);
// const logs = await getLogs();

  return (
    <div className="p-8 max-w-6xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-6">מעקב וביצוע משימות</h1>
      <LogsTable logs={logs} />
    </div>
  );
}