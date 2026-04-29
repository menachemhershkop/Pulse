"use server"

import {prisma} from "../prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData:FormData) {
    const firstName = formData.get("firstName")as string;
    const lastName= formData.get("lastName") as string;

    const user = await prisma.user.findFirst({
        where:{firstName, lastName}
    })
    if (!user){
        return {error: "משתמש לא נמצא"}
    }
    const cookieStore = await cookies();
    cookieStore.set("auth_session", user.id.toString(), {
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60*60*24,
        path: "/"
    });

    redirect("/dashboard")
}

export async function logout(){
    const cookieStore = await cookies();
    cookieStore.delete("auth_session");
    redirect("login");
}
