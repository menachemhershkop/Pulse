"use server"

import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

export async function createAdultLog(formData: FormData) {
  const userId = Number(formData.get('userId'));
  const missionId = Number(formData.get('missionId'));
  const state = formData.get("state") as string;

  if (!userId || !missionId || !state) return;

  await prisma.adultLog.create({
    data: {
      userId, missionId, state, lestUpdate: new Date()
    }
  });
  revalidatePath('logs');
}

export async function getLogs() {
  return await prisma.adultLog.findMany({
    include:{
      user:true,
      mission:true,
    },
    orderBy:{lestUpdate:'desc'}
  });
}

export async function getActiveLogs(){
  return await prisma.adultLog.findMany({
    where:{
      mission:{
        isDeleted:false
      }
    },
    include:{
      user:true,
      mission: true
    },
    orderBy:{lestUpdate:'desc'}
  });
}