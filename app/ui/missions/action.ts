"use server";

import { deleteMission } from "@/app/lib/dal/services/mission-service";

export async function deleteMissionAction(id: number) {
  await deleteMission(id);
  return id;
}
