import {getUsersWithTaskCount} from '@/app/lib/dal/services/user-service';
import AddUserForm from '@/app/ui/users/AddUserForm';
import UsersList from '@/app/ui/users/UsersList';



export default async function Users() {
  const users = await getUsersWithTaskCount();
 return (
   <div className='user-page'>
    <h1>ניהול משתמשים</h1>
  <AddUserForm/>
  <UsersList users={users}/>
   </div>
  );
}
