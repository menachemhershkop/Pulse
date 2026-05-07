"use client";

import { useActionState } from "react";
import { login } from "@/app/lib/dal/services/auth-service";
import Link from "next/link";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">התחברות למערכת</h1>
        <form action={formAction} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">שם פרטי</label>
            <input name="firstName" type="text" className="w-full border p-3 rounded-lg" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">שם משפחה</label>
            <input name="lastName" type="text" className="w-full border p-3 rounded-lg" required />
          </div>
          {state?.error && (
            <p className="text-red-500 text-sm font-medium">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="bg-indigo-600 text-white p-3 rounded-lg font-bold hover:bg-indigo-700 transition disabled:bg-gray-400"
          >
            {isPending ? "מתחבר..." : "כניסה"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link href={'/'} className="text-sm text-gray-500 hover:underline">חזרה לדף הראשי</Link>
        </div>
      </div>
    </div>
  );
}