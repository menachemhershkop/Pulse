import {getUsersWithTaskCount, addUser} from "@/services/user-service"


export default async function Dashboard() {
  const users = await getUsersWithTaskCount();
 return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">ניהול משתמשים</h1>

  
      <form action={addUser} className="flex gap-4 mb-8">
        <input
          name="firstName"
          placeholder="שם פרטי"
          className="border p-2 rounded w-full text-black"
          required
        />
        <input
          name="lastName"
          placeholder="שם משפחה"
          className="border p-2 rounded w-full text-black"
          required
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          הוסף
        </button>
      </form>


      <div className="bg-white shadow rounded-lg overflow-hidden border">
        <ul className="divide-y">
          {users.map((user) => (
            <li key={user.id} className="p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{user.firstName} {user.lastName}</p>
                <p className="text-xs text-gray-500">מזהה: {user.id}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200">
                   {user._count.missions} משימות
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
