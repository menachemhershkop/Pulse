import UserItem from "./UserItem";

interface UserListProps {
    users : {
        id: number;
        firstName:string;
        lastName: string;
        _count:{missions:number};
    }[];
}

export default function UsersList({users}: UserListProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden border">
        <ul className="divide-y">
{users.map((user)=>(
    <UserItem key={user.id} user={user}/>
))}
        </ul>

    </div>
  )
}
