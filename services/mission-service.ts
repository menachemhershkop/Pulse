"use server"
import { prisma } from "@/lib/dal/prisma"; 
import { revalidatePath } from "next/cache";

export async function createMission(formData:FormData){
  const missionName= formData.get("missionName") as string;
  const userId = Number (formData.get("userId"));

  if (!missionName || !userId) return;

  await prisma.mission.create({
    data:{
      missionName, userId,
      adultLogs:{create:{
        state: "נוצרה",
        userId: userId,
      }}
    }
  });

  revalidatePath("/missions");
  revalidatePath('/logs')
}

export async function getMissions(){
  return await prisma.mission.findMany({
    include:{
      user:true
    },
    orderBy:{missionId:'desc'}
  });
}
