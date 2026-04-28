import { getMissions, createMission, deleteMission} from '@/app/lib/dal/services/mission-service';
import { getUsers } from "@/app/lib/dal/services/user-service";


export default async function MissionsPage() {

  const [missions, users] = await Promise.all([
    getMissions(),
    getUsers()
  ]);

  return (
    <div className="p-8 max-w-3xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-6">ניהול משימות</h1>

      <form action={createMission} className="bg-white p-6 rounded-lg border shadow-sm mb-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="missionName"
            placeholder="שם המשימה"
            className="border p-2 rounded"
            required
          />
          
          <select name="userId" className="border p-2 rounded" required>
            <option value="">אחראי...</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
            ))}
          </select>

          {/* שדה העדיפות החדש */}
          <select name="priority" className="border p-2 rounded" required>
            <option value="low">עדיפות נמוכה</option>
            <option value="medium" selected>עדיפות בינונית</option>
            <option value="high">עדיפות גבוהה 🔥</option>
          </select>
        </div>
        
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition font-bold">
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
                <td className="p-4 text-left">
  <form action={async () => {
    "use server";
    await deleteMission(m.missionId);
  }}>
    <button className="text-red-600 hover:text-red-800 text-sm font-bold bg-red-50 px-2 py-1 rounded border border-red-200">
      מחק משימה 🗑️
    </button>
  </form>
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