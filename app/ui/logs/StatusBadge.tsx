interface StatusBadgeProps {
    state: string
}

export default function StatusBadge({ state }: StatusBadgeProps) {
    const isDone = state === "בוצע"
    return (
        <span
            className={`px-2 py-1 rounded-full text-xs ${isDone
                    ? "bg-green-100 text-green-800 font-bold"
                    : "bg-yellow-100 text-yellow-800"
                }`}
        >
            {state}
        </span>
    )
}
