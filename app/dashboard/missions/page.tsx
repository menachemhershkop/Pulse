import { getDeleltedMissions, getMissions} from '@/app/lib/dal/services/mission-service';
import { getUsers } from "@/app/lib/dal/services/user-service";
import DeletedMissionsTable from '@/app/ui/missions/DeletedMissionsTable';
import MissionForm from '@/app/ui/missions/MissionForm';
import MissionTable from '@/app/ui/missions/MissionTable';
import { deleteMissionAction } from '@/app/ui/missions/action';


export default async function MissionsPage() {

  const [missions, users, deletedMissions] = await Promise.all([
    getMissions(),
    getUsers(),
    getDeleltedMissions(),
  ]);


  return (
   <div className='p-8 max-w-3xl mx-auto text-black'>
    <h1 className='text-2xl font-bold nb-6'>ניהול משימות</h1>

    <MissionForm users={users}/>
    <MissionTable missions={missions} deleteAction={deleteMissionAction}/>
    <DeletedMissionsTable deletedMissions={deletedMissions}/>
   </div>
  );
}