const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export function LogRowSkeleton() {
  return (
    <tr className="border-b">
      <td className="p-4">
        <div className="h-5 w-32 bg-gray-200 rounded" />
      </td>

      <td className="p-4">
        <div className="h-5 w-20 bg-gray-200 rounded" />
      </td>

      <td className="p-4">
        <div className="h-5 w-28 bg-gray-200 rounded" />
      </td>

      <td className="p-4">
        <div className="h-5 w-24 bg-gray-200 rounded" />
      </td>

      <td className="p-4">
        <div className="h-5 w-24 bg-gray-200 rounded" />
      </td>

      <td className="p-4">
        <div className="h-8 w-24 bg-gray-200 rounded" />
      </td>
    </tr>
  );
}

export function LogsTableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className={`${shimmer} relative bg-white border rounded-xl shadow-sm overflow-hidden`}>
      <table className="w-full text-right border-collapse">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4">משימה</th>
            <th className="p-4">עדיפות</th>
            <th className="p-4">מבצע</th>
            <th className="p-4">סטטוס</th>
            <th className="p-4">תאריך</th>
            <th className="p-4">פעולה</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <LogRowSkeleton key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MissionRowSkeleton() {
  return (
    <tr className="border-b">
      <td className="p-3">
        <div className="h-5 w-10 bg-gray-200 rounded" />
      </td>

      <td className="p-3">
        <div className="h-5 w-40 bg-gray-200 rounded" />
      </td>

      <td className="p-3">
        <div className="h-5 w-32 bg-gray-200 rounded" />
      </td>

      <td className="p-3 text-left">
        <div className="h-7 w-24 bg-gray-200 rounded" />
      </td>
    </tr>
  );
}

export function MissionsTableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className={`${shimmer} relative overflow-x-auto`}>
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="p-3">ID</th>
            <th className="p-3">שם המשימה</th>
            <th className="p-3">אחראי</th>
            <th className="p-3"></th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <MissionRowSkeleton key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StatsCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden bg-white p-6 rounded-2xl border border-gray-100 shadow-sm`}
    >
      {/* Top section */}
      <div className="flex items-center justify-between mb-4">
        {/* icon */}
        <div className="p-3 rounded-xl bg-gray-200 w-12 h-12" />

        {/* value */}
        <div className="h-8 w-16 bg-gray-200 rounded" />
      </div>

      {/* bottom section */}
      <div>
        {/* title */}
        <div className="h-5 w-32 bg-gray-200 rounded mb-2" />

        {/* description */}
        <div className="h-4 w-40 bg-gray-200 rounded" />
      </div>
    </div>
  );
}

export function StatsCardsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <StatsCardSkeleton key={i} />
      ))}
    </div>
  );
}