interface AssignedUserBadgeProps {
    name: string
}

export default function AssignedUserBadge({ name }: AssignedUserBadgeProps) {
    return (
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            {name}
        </span>
    )
}
