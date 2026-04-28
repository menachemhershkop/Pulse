import Link from "next/link";
import Navbar from "../ui/Navbar";

export default function DahboardLayout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-50 min-h-screen">
     <Navbar/>
      <div>{children}</div>
      </div>
   
  );
}
