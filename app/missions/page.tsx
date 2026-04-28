import { getMissions, createMission } from "../lib//dal/services/mission-service";
import { getUsers } from "../lib/dal/services/user-service";

export default async function MissionsPage() {

  const [missions, users] = await Promise.all([
    getMissions(),
    getUsers()
  ]);

  return (
    <div className="p-8 max-w-3xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-6">ניהול משימות</h1>

      <form action={createMission} className="bg-gray-50 p-4 rounded-lg border mb-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="missionName"
            placeholder="שם המשימה (למשל: שטיפת כלים)"
            className="border p-2 rounded"
            required
          />
          
          <select name="userId" className="border p-2 rounded" required>
            <option value="">בחר משתמש אחראי...</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>
        
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          צור משימה חדשה
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">ID</th>
              <th className="p-3">שם המשימה</th>
              <th className="p-3">אחראי</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((m) => (
              <tr key={m.missionId} className="border-b hover:bg-gray-50">
                <td className="p-3">{m.missionId}</td>
                <td className="p-3 font-medium">{m.missionName}</td>
                <td className="p-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {m.user.firstName} {m.user.lastName}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {missions.length === 0 && (
          <p className="text-center p-4 text-gray-500">אין משימות במערכת</p>
        )}
      </div>
    </div>
  );
}