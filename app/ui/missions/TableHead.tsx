export default function TableHeader() {
  return (
    <div className="p-4 bg-gray-50 border-b">
      <h2 className="text-lg font-bold text-gray-800">סל מחזור</h2>
    </div>
  );
}

TableHeader.Columns = function Columns() {
  return (
    <tr>
      <th className="p-4">שם המשימה</th>
      <th className="p-4">אחראי</th>
      <th className="p-4 text-center">עדיפות</th>
      <th className="p-4 text-left">פעולה</th>
    </tr>
  );
};