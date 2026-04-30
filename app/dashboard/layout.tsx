import { getMe } from "../lib/dal/services/auth-service";
import Navbar from "../ui/Navbar";

export default async function DahboardLayout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getMe();
  const userName = user? `${user.firstName} ${user.lastName}`:null;
  return (
    <div className="bg-gray-50 min-h-screen">
     <Navbar userName={userName}/>
      <div>{children}</div>
      </div>
   
  );
}
