interface PriorityBadgeProps {
    priority: "high" | "medium" | "low";
}

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
    const styles =
        priority === "high"
            ? "bg-red-100 text-red-700"
            : priority === "medium"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700";
    const label =
        priority === "high"
            ? "גבוהה"
            : priority === "medium"
                ? "בינונית"
                : "נמוכה";

    return (
        <span className={`px-2 py-1 rounded font-bold ${styles}`}>
            {label}
        </span>
    );
}