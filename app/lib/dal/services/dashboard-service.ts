"use server"

import { prisma } from "../prisma"

export async function  getDashboardStats(){
    const today = new Date();
    today.setHours(0,0,0,0)

    const [openMissions, completedLogs, auditToday] = await Promise.all([
        prisma.mission.count({where:{isDeleted:false}}),
        prisma.adultLog.count({where:{state:"בוצע", mission:{isDeleted:false}}}),
        prisma.adultLog.count({ where:{lestUpdate:{gte:today}}})
    ]);

    return {openMissions, completedLogs, auditToday}
}