export type User = {
  id: number;
  firstName: string;
  lastName: string;
};

export type Mission = {
  missionId: number;
  missionName: string;
  priority: "low" | "medium" | "high";
};

export type Log = {
  id: number;
  state: string;
  missionId: number;
  userId: number;
  mission: {
    missionName: string;
    priority: "low" | "medium" | "high";
  };
  user: {
    firstName: string;
    lastName: string;
  };
};
