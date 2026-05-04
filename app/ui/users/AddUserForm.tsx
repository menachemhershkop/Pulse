import { addUser } from "@/app/lib/dal/services/user-service";

export default function AddUserForm() {
    return (
        <form action={addUser} className="users-form">
            <input
                name="firstName"
                placeholder="שם פרטי"
                required
            />
            <input
                name="lastName"
                placeholder="שם משפחה"
                required
            />
            <button type="submit">
                הוסף
            </button>
        </form>
    );
}
