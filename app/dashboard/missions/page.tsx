import { getMissions} from '@/app/lib/dal/services/mission-service';
import { getUsers } from "@/app/lib/dal/services/user-service";
import MissionForm from '@/app/ui/missions/MissionForm';
import MissionTable from '@/app/ui/missions/MissionTable';


export default async function MissionsPage() {

  const [missions, users] = await Promise.all([
    getMissions(),
    getUsers()
  ]);

  return (
   <div className='p-8 max-w-3xl mx-auto text-black'>
    <h1 className='text-2xl font-bold nb-6'>ניהול משימות</h1>

    <MissionForm users={users}/>
    <MissionTable missions={missions}/>
   </div>
  );
}