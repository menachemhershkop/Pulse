export default function LogsLoading() {
  return (
    <div className="p-8 max-w-6xl mx-auto animate-pulse" dir="rtl">
      <div className="h-8 w-60 bg-gray-200 rounded mb-6"></div>

      {/* LogsTable Skeleton */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        {/* Table Header Placeholder */}
        <div className="h-14 bg-gray-50 border-b"></div>
        
        {/* Table Rows Placeholder */}
        <div className="divide-y divide-gray-100">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="p-4 flex gap-4 items-center">
              <div className="h-4 w-1/4 bg-gray-100 rounded"></div>
              <div className="h-4 w-1/6 bg-gray-100 rounded"></div>
              <div className="h-4 w-1/6 bg-gray-100 rounded"></div>
              <div className="h-4 w-1/6 bg-gray-100 rounded"></div>
              <div className="h-4 w-1/6 bg-gray-100 rounded mr-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}