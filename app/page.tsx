import Link from "next/link";

export default function Home() {
  return (<div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-b from-white to-indigo-50 text-black px-4">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <header className="mb-8">
          <div className="inline-block p-3 rounded-2xl bg-indigo-600 text-white mb-6 shadow-lg shadow-indigo-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            ניהול משימות <span className="text-indigo-600">חכם</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            המערכת המתקדמת למעקב אחר משימות, ניהול צוותים ותיעוד פעולות בזמן אמת.
            הכל במקום אחד, מאובטח ונגיש.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/login"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-200"
          >
            התחברות למערכת
          </Link>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm italic">
            <span>מאובטח ע``י Prisma & Next.js</span>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-gray-200 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">🚀</span>
            <h3 className="font-bold text-gray-800">ביצועים מהירים</h3>
            <p className="text-sm text-gray-500">שרת Next.js מותאם אישית</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">🔒</span>
            <h3 className="font-bold text-gray-800">אבטחה מלאה</h3>
            <p className="text-sm text-gray-500">ניהול הרשאות מבוסס Cookies</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-2">📊</span>
            <h3 className="font-bold text-gray-800">מעקב דשבורד</h3>
            <p className="text-sm text-gray-500">ניתוח נתונים בזמן אמת</p>
          </div>
        </div>
      </div>
    </div>
  );
}
