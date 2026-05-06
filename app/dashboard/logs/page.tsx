import { getLogs } from "../../lib/dal/services/log-service";
import LogsTable from "@/app/ui/logs/LogsTable";

export default async function LogsPage() {
  const [logs, ] = await Promise.all([
    getLogs(),
   
  ]);


  return (
    <div className="p-8 max-w-6xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-6">מעקב וביצוע משימות</h1>
      <LogsTable logs={logs} />
    </div>
  );
}