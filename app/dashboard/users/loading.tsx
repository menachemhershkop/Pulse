export default function UsersLoading() {
  return (
    <div className="p-8 max-w-4xl mx-auto animate-pulse" dir="rtl">
      <div className="h-8 w-32 bg-gray-200 rounded mb-8"></div>

      {/* AddUserForm Skeleton */}
      <div className="flex gap-4 mb-8">
        <div className="h-10 flex-1 bg-gray-100 rounded border"></div>
        <div className="h-10 flex-1 bg-gray-100 rounded border"></div>
        <div className="h-10 w-24 bg-gray-200 rounded"></div>
      </div>

      {/* UserList Skeleton */}
      <div className="bg-white border rounded-xl shadow-sm divide-y">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-4 flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-100 rounded"></div>
              <div className="h-3 w-16 bg-gray-50 rounded"></div>
            </div>
            <div className="h-8 w-24 bg-blue-50 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}