import StatsCard, { StatsCardProps } from "./StatsCard";

interface StatsGridProps {
  cards: StatsCardProps[];
}


export default function StatsGrid({ cards }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {cards.map((card, index) => (
        <StatsCard key={index} {...card} />
      ))}
    </div>
  );
}
