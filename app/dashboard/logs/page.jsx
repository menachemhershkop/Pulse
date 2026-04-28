import { createAdultLog, getLogs } from "../../lib/dal/services/log-service";
import { getUsers } from "../../lib/dal/services/user-service";
import { getMissions, markAsDone } from "../../lib/dal/services/mission-service";

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

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">משימה</th>
              <th className="p-4">עדיפות</th>
              <th className="p-4">מבצע</th>
              <th className="p-4">סטטוס אחרון</th>
              <th className="p-4">פעולה</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 font-bold">{log.mission.missionName}</td>
                <td className="p-4 text-sm">
                   <span className={`px-2 py-1 rounded font-bold ${
                    log.mission.priority === 'high' ? 'bg-red-100 text-red-700' :
                    log.mission.priority === 'medium' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {log.mission.priority === 'high' ? 'גבוהה' : log.mission.priority === 'medium' ? 'בינונית' : 'נמוכה'}
                  </span>
                </td>
                <td className="p-4">{log.user.firstName} {log.user.lastName}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${log.state === 'בוצע' ? 'bg-green-100 text-green-800 font-bold' : 'bg-yellow-100 text-yellow-800'}`}>
                    {log.state}
                  </span>
                </td>
                <td className="p-4">
                  {log.state !== "בוצע" && (
                    <form action={async () => {
                      "use server";
                      await markAsDone(log.missionId, log.userId);
                    }}>
                      <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition shadow-sm">
                        סמן כבוצע ✓
                      </button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}