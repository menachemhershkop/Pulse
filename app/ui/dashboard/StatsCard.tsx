export interface StatsCardProps{
    title: string;
    value: number;
    description: string;
    bg: "bg-blue"
    color: "text-blue"
    icon: string;
}

export default function StatsCard({title, value, description, color, bg, icon}:(StatsCardProps)) {
  return (
    <div className="stats-card">
      <div className="flex items-center justify-between mb-4">
        <div className={`stats-cars__icon ${bg} text-2xl`}>
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
