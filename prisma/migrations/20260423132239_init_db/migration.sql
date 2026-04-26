-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mission" (
    "missionId" SERIAL NOT NULL,
    "missionName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("missionId")
);

-- CreateTable
CREATE TABLE "AdultLog" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "lestUpdate" TIMESTAMP(3) NOT NULL,
    "missionId" INTEGER NOT NULL,

    CONSTRAINT "AdultLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mission" ADD CONSTRAINT "Mission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdultLog" ADD CONSTRAINT "AdultLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdultLog" ADD CONSTRAINT "AdultLog_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("missionId") ON DELETE RESTRICT ON UPDATE CASCADE;
