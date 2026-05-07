"use server"
import { ActionState } from "@/app/ui/types";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { MissionSchema } from "../actions";
import { cookies } from "next/headers";

export async function createMission(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const validatedFields = MissionSchema.safeParse({
    missionName: formData.get("missionName"),
    userId: Number(formData.get("userId")),
    priority: formData.get("priority"),
  });
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.missionName?.[0] ||
        validatedFields.error.flatten().fieldErrors.userId?.[0] ||
        "נתונים לא תקינים",
    };
  }
  try {
    const { missionName, userId, priority } = validatedFields.data;
    await prisma.mission.create({
      data: {
        missionName,
        userId,
        priority,
        adultLogs: {
          create: {
            state: "נוצרה",
            userId: userId,
          },
        },
      },
    });

    revalidatePath("dashboard/missions");
    revalidatePath("dashboard/logs");

    return { success: "המשימה נוצרה בהצלחה" };
  } catch {
    return { error: "שגיאה בקריאה לבסיס הנתונים" }
  }
}

export async function getMissions() {
  return await prisma.mission.findMany({
    where: { isDeleted: false },
    select: {
      missionId: true,
      missionName: true,
      createAt: true, 
      user: {
        select: { firstName: true, lastName: true }
      }
    },
    orderBy: { missionId: 'desc' }
  });
}


export async function markAsDone(missionId: number) {
  const cookieStore = await cookies();
    const userId:number =   Number(cookieStore.get("auth_session")?.value)
    
      
      
  await prisma.adultLog.create({
    data: {
      missionId, userId,
      state: "בוצע",
    }
  });
  revalidatePath("/logs")
}

export async function deleteMission(missionId: number) {
  await prisma.mission.update({
    where: { missionId },
    data: { isDeleted: true }
  });
  revalidatePath("/missions");
  revalidatePath("/logs");
}

export async function getDeleltedMissions() {
  try {
    return await prisma.mission.findMany({
      where: {
        isDeleted: true,
      },
      include: {
        user: {
          select: { firstName: true, lastName: true },
        },
      },
    });
  } catch {
    throw new Error("שגיאה בשליפת ההודעות שנמחקו")
  }
}

export async function restoreMission(missionId: number) {
  console.log(missionId);
  
  try {
     const cookieStore = await cookies();
    const userId:number =   Number(cookieStore.get("auth_session")?.value)
    
    const mission = await prisma.mission.update({
      where: { missionId: missionId },
      data: {
        isDeleted: false,
      },
    });
    await prisma.adultLog.create({
      data: {
        state: "שוחזרה",
        missionId: mission.missionId,
        userId: userId,
      }
    });
    revalidatePath('/dashboard/mission');
    return { success: "המשימה שוחזרה בהצלחה!" };
  } catch  {
    return { error: "שגיאה בשחזור המשימה" };
  }
}

export async function deleteMissionAction(id: number) {
  await deleteMission(id);
  return id;
}