"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "לוח בקרה", href: "/dashboard" },
    { name: "משתמשים", href: "/dashboard/users" },
    { name: "משימות", href: "/dashboard/missions" },
    { name: "לוגים", href: "/dashboard/logs" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-8">
            {/* לוגו או שם המערכת */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600 tracking-tight">
                MissionControl
              </span>
            </div>

            {/* תפריט הניווט */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:space-x-reverse">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* צד שמאל - חיווי סטטוס או פרופיל (אופציונלי) */}
          <div className="flex items-center">
            <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
              מחובר למסד נתונים
            </div>
          </div>
        </div>
      </div>

      {/* תפריט מובייל מהיר (למסכים קטנים) */}
      <div className="sm:hidden flex justify-around py-2 border-t bg-gray-50">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[10px] font-bold uppercase ${
              pathname === item.href ? "text-indigo-600" : "text-gray-400"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;