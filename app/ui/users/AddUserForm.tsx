import { addUser } from "@/app/lib/dal/services/user-service";

export default function AddUserForm() {
    return (
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
    );
}
