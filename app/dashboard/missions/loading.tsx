// app/mission/loading.tsx
export default function MissionsLoading() {
  return (
    <div className="p-8 max-w-3xl mx-auto animate-pulse" dir="rtl">
      <div className="h-8 w-40 bg-gray-200 rounded mb-6"></div>


      <div className="bg-white p-6 rounded-lg border shadow-sm mb-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-10 bg-gray-100 rounded"></div> 
          <div className="h-10 bg-gray-100 rounded"></div>
          <div className="h-10 bg-gray-100 rounded"></div> 
        </div>
        <div className="h-10 w-32 bg-indigo-100 rounded"></div> 
      </div>

   
      <div className="overflow-x-auto bg-white border rounded-xl shadow-sm">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 w-16"><div className="h-4 bg-gray-200 rounded w-8"></div></th>
              <th className="p-3"><div className="h-4 bg-gray-200 rounded w-24"></div></th>
              <th className="p-3 w-32"><div className="h-4 bg-gray-200 rounded w-16"></div></th>
              <th className="p-3 w-24"></th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="border-b">
                <td className="p-3"><div className="h-4 bg-gray-50 rounded w-8"></div></td>
                <td className="p-3"><div className="h-4 bg-gray-50 rounded w-40"></div></td>
                <td className="p-3"><div className="h-6 bg-blue-50 rounded-full w-20"></div></td>
                <td className="p-3 text-left"><div className="h-7 bg-red-50 rounded w-20 inline-block"></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}