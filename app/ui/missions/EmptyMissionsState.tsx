
export default function EmptyMissionsState() {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border-2 border-dashed border-gray-100 mt-4">
      <div className="bg-gray-50 p-4 rounded-full mb-4 text-4xl">
        📋
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">אין משימות פעילות</h3>
      <p className="text-gray-500 text-center max-w-xs">
        כרגע רשימת המשימות שלך ריקה. זה הזמן המצוין להוסיף משימה חדשה בעזרת הטופס למעלה.
      </p>
    </div>
  );
}