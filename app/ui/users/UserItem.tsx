interface UserItemProps {
    user:{
    id: number;
    firstName: string;
    lastName: string;
    _count: { missions: number };
};
}
export default function UserItem({ user }: UserItemProps) {    
    return (

        <li className="p-4 flex justify-between items-center">
            <div>
                <p className="font-medium">
                    {user.firstName} 
                    {user.lastName}
                </p>
                <p className="text-xs text-gray-500">מזהה: {user.id}</p>
            </div>

            <div className="flex items-center gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200">
                    {user._count.missions} משימות
                </span>
            </div>
        </li>
    );
}
