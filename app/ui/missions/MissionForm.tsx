import { createMission } from "@/app/lib/dal/services/mission-service";


interface MissionFormProps {
    users: {
        id: number;
        firstName: string;
        lastName: string;
    }[];
}

export default function MissionForm({ users }: MissionFormProps) {
    return (
        <form
            action={createMission}
            className="bg-white p-6 rounded-lg border shadow-sm mb-8 flex flex-col gap-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    name="missionName"
                    placeholder="שם המשימה"
                    className="border p-2 rounded"
                    required
                />

                <select name="userId" className="border p-2 rounded" required>
                    <option value="">אחראי...</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.firstName} {user.lastName}
                        </option>
                    ))}
                </select>

                <select name="priority" className="border p-2 rounded" required>
                    <option value="low">עדיפות נמוכה</option>
                    <option value="medium" selected>
                        עדיפות בינונית
                    </option>
                    <option value="high">עדיפות גבוהה 🔥</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition font-bold"
            >
                צור משימה חדשה
            </button>
        </form>
    )
}
