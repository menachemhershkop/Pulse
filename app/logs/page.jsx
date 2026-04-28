import {createAdultLog, getLogs} from '../lib/dal/services/log-service'
import { getUsers } from "../lib/dal/services/user-service";
import { getMissions } from "../lib/dal/services/mission-service";

export default async function LogsPage() {
  const [logs, users, missions] = await Promise.all([
    getLogs(),
    getUsers(),
    getMissions()
  ]);

  return (
    <div className="p-8 max-w-6xl mx-auto text-black">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">מעקב משימות ולוגים</h1>
        <p className="text-gray-600">צפייה בכלל הפעילויות והסטטוסים במערכת</p>
      </header>
      <section className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">עדכון סטטוס חדש</h2>
        <form action={createAdultLog} className="flex flex-wrap gap-4">
          <select name="userId" className="border p-2 rounded flex-1 min-w-[150px]" required>
            <option value="">משתמש...</option>
            {users.map(u => <option key={u.id} value={u.id}>{u.firstName} {u.lastName}</option>)}
          </select>

          <select name="missionId" className="border p-2 rounded flex-1 min-w-[150px]" required>
            <option value="">משימה...</option>
            {missions.map(m => <option key={m.missionId} value={m.missionId}>{m.missionName}</option>)}
          </select>

          <input 
            name="state" 
            placeholder="סטטוס (למשל: בביצוע, הושלם)" 
            className="border p-2 rounded flex-[2] min-w-[200px]" 
            required 
          />
          
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded font-medium hover:bg-indigo-700 transition">
            עדכן
          </button>
        </form>
      </section>


      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-semibold text-gray-700">שם המשימה</th>
              <th className="p-4 font-semibold text-gray-700">מבצע/משויך</th>
              <th className="p-4 font-semibold text-gray-700">סטטוס אחרון</th>
              <th className="p-4 font-semibold text-gray-700 text-left">זמן עדכון</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-gray-900">{log.mission.missionName}</div>
                  <div className="text-xs text-gray-400 font-mono">ID: {log.missionId}</div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold">
                      {log.user.firstName[0]}{log.user.lastName[0]}
                    </div>
                    <span className="text-gray-700">{log.user.firstName} {log.user.lastName}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {log.state}
                  </span>
                </td>
                <td className="p-4 text-left text-sm text-gray-500">
                  {new Date(log.lestUpdate).toLocaleString('he-IL', {
                    dateStyle: 'short',
                    timeStyle: 'short'
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {logs.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            טרם תועדו פעילויות במערכת.
          </div>
        )}
      </div>
    </div>
  );
}