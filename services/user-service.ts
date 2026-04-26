"use server"

import { prisma } from "@/lib/dal/prisma";
import { revalidatePath } from "next/cache";

export async function getUsers() {
    return await prisma.user.findMany({
        orderBy: { id: 'desc' }
    })
}

export async function addUser(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    if (!firstName || !lastName) return;

    await prisma.user.create({
        data: { firstName, lastName }
    });
    revalidatePath("/dashboard")
};

export async function getUsersWithTaskCount() {
    return await prisma.user.findMany({
        include: {
            _count: {
                select: { missions: true }
            }
        },
        orderBy: { id: 'desc' }
    });
}
