import MissionRow from './MissionRow';

interface MissionTableProps {
    missions: {
        missionId: number;
        missionName:string;
        user:{firstName:string; lastName:string};
    }[];
}

export default function MissionTable( {missions}:MissionTableProps) {
  return (
     <div className="overflow-x-auto">
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
          {missions.map((m) => (
            <MissionRow key={m.missionId} mission={m} />
          ))}
        </tbody>
      </table>

      {missions.length === 0 && (
        <p className="text-center p-4 text-gray-500">אין משימות במערכת</p>
      )}
    </div>
  )
}
