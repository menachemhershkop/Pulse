"use server"
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";


export async function createMission(formData:FormData){
  const missionName= formData.get("missionName") as string;
  const userId = Number (formData.get("userId"));
  const priority = formData.get("priority") as string;

  if (!missionName || !userId) return;

  await prisma.mission.create({
    data:{
      missionName, userId, priority,
      adultLogs:{create:{
        state: "נוצרה",
        userId: userId,
      }}
    }
  });

  revalidatePath("dashboard/missions");
  revalidatePath('dashboard/logs')
}

export async function getMissions(){
  return await prisma.mission.findMany({
    where:{isDeleted:false},
    include:{
      user:true
    },
    orderBy:{missionId:'desc'}
  });
}


export async function markAsDone(missionId: number, userId: number){
  await prisma.adultLog.create({
    data:{
      missionId, userId,
      state:"בוצע",
    }
  });
  revalidatePath("/logs")
}

export async function deleteMission(missionId: number){
  await prisma.mission.update({
    where:{missionId},
    data:{isDeleted:true}
  });
  revalidatePath("/missions");
  revalidatePath("/logs");
}