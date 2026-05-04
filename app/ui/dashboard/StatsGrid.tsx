import StatsCard, { StatsCardProps } from "./StatsCard";

interface StatsGridProps {
  cards: StatsCardProps[];
}


export default function StatsGrid({ cards }: StatsGridProps) {
  return (
    <div className="stats-grid">
      {cards.map((card, index) => (
        <StatsCard key={index} {...card} />
      ))}
    </div>
  );
}
