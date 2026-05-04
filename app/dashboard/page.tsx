import { getDashboardStats } from "@/app/lib/dal/services/dashboard-service";
import DashboardHeader from "../ui/dashboard/DashboardHeader";
import StatsGrid from "../ui/dashboard/StatsGrid";
import QuickSummary from "../ui/dashboard/QuickSummary";
import { StatsCardProps } from "../ui/dashboard/StatsCard";

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  const cards:StatsCardProps[] = [
    {
      title: "משימות פתוחות",
      value: stats.openMissions,
      description: "משימות פעילות במערכת",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: "📋"
    },
    {
      title: "הושלמו בהצלחה",
      value: stats.completedLogs,
      description: "סך משימות בסטטוס בוצע",
      color: "text-green-600",
      bg: "bg-green-50",
      icon: "✅"
    },
    {
      title: "פעולות היום",
      value: stats.auditToday,
      description: "לוגים ועדכונים מהיממה האחרונה",
      color: "text-purple-600",
      bg: "bg-purple-50",
      icon: "⏱️"
    }
  ];

  return (
    <div className="dashboard">
      <DashboardHeader/>
      <StatsGrid cards={cards}/>
      <QuickSummary/>
    </div>
  );
}