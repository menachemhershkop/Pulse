-- AlterTable
ALTER TABLE "AdultLog" ALTER COLUMN "lestUpdate" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Mission" ADD COLUMN     "priority" TEXT NOT NULL DEFAULT 'Medium';
