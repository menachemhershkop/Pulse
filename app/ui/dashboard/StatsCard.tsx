export interface StatsCardProps{
    title: string;
    value: number;
    description: string;
    color: string;
    bg: string;
    icon: string;
}

export default function StatsCard({title, value, description, color, bg, icon}:(StatsCardProps)) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${bg} text-2xl`}>
          {icon}
        </div>
        <span className={`text-3xl font-bold ${color}`}>
          {value}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}