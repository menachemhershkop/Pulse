export default function DashboardLoading() {
  return (
    <div className="users-loading" dir="rtl">
      {/* Header Skeleton */}
      <div ></div>
      
      {/* StatsGrid Skeleton */}
      <div >
        {[1, 2, 3].map((i) => (
          <div key={i} ></div>
        ))}
      </div>

      {/* QuickSummary Skeleton */}
      <div ></div>
    </div>
  );
}