export default function DashboardLoading() {
  return (
    <div className="p-8 max-w-7xl mx-auto animate-pulse" dir="rtl">
      {/* Header Skeleton */}
      <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>
      
      {/* StatsGrid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-gray-100 rounded-2xl border border-gray-50"></div>
        ))}
      </div>

      {/* QuickSummary Skeleton */}
      <div className="h-48 bg-gray-100 rounded-2xl border border-gray-50"></div>
    </div>
  );
}