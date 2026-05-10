import { Log } from "../types";
import LogRow from "./LogRow";

interface LogsTableProps {
    logs: Log[]
}

export default function LogsTable({ logs }: LogsTableProps) {
    return (
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-right border-collapse">
                <thead className="bg-gray-50 border-b">
                    <tr>
                        <th className="p-4">משימה</th>
                        <th className="p-4">עדיפות</th>
                        <th className="p-4">מבצע</th>
                        <th className="p-4">סטטוס אחרון</th>
                        <th className="p-4">תאריך עדכון אחרון</th>
                        {/* <th className="p-4">פעולה</th> */}
                    </tr>
                </thead>

                <tbody>
                    {logs.map((log) => (
                        <LogRow key={log.id} log={log} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
