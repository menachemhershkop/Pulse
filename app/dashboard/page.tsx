import { getDashboardStats } from "@/app/lib/dal/services/dashboard-service";

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  const cards = [
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
    <div className="p-8 max-w-7xl mx-auto text-black">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">לוח בקרה</h1>
        <p className="text-gray-500 mt-2">סקירה כללית של ביצועי המערכת והמשימות.</p>
      </header>

      {/* Grid של הכרטיסיות */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${card.bg} text-2xl`}>
                {card.icon}
              </div>
              <span className={`text-3xl font-bold ${card.color}`}>
                {card.value}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{card.title}</h3>
              <p className="text-sm text-gray-400">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* כאן אפשר להוסיף רשימה של "פעולות אחרונות" מתחת לכרטיסיות */}
      <section className="bg-white rounded-2xl border border-gray-100 p-6">
        <h2 className="text-xl font-bold mb-4 italic text-gray-800">סיכום מהיר</h2>
        <div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-xl text-gray-300">
          כאן ניתן להוסיף גרף התקדמות בעתיד
        </div>
      </section>
    </div>
  );
}