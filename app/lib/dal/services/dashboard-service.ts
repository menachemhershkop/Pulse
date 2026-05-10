"use server"

import { cookies } from "next/headers";
import { prisma } from "../prisma"

export async function getDashboardStats() {
    const cookieStore = await cookies();
    const userId: number = Number(cookieStore.get("auth_session")?.value)

    if (!userId || isNaN(userId)){
        return {openMissions:0, completedLogs:0, auditToday:0}
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0)

    const [openMissions, completedLogs, auditToday] = await Promise.all([
        prisma.mission.count({ where: { isDeleted: false, userId:userId } }),
        prisma.adultLog.count({ where: { state: "בוצע",userId:userId, mission: { isDeleted: false } } }),
        prisma.adultLog.count({ where: {userId:userId, lestUpdate: { gte: today } } })
    ]);

    return { openMissions, completedLogs, auditToday }
}