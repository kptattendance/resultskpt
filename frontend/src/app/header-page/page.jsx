"use client";

export default function MainHeader() {
  return (
    <header className="bg-gradient-to-b from-white via-slate-50 to-white shadow-md">
      <div className="max-w-7xl mx-auto py-1">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">
          {/* LEFT LOGO */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/logo1.png"
              alt="Government of Karnataka Logo"
              className="h-34 object-contain"
            />
          </div>

          {/* CENTER LOGO + TEXT */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/logo.jpg"
              alt="College Logo"
              className="h-14 object-contain mb-0.3"
            />

            <p className="uppercase text-xs tracking-[0.3em] font-semibold text-indigo-700">
              Government of Karnataka
            </p>

            <p className="text-sm mt-0.5 text-emerald-700 font-medium">
              Department of Collegiate and Technical Education
            </p>

            <h1
              className="mt-0.8 text-2xl md:text-3xl font-extrabold tracking-wide
  bg-gradient-to-r from-red-700 via-orange-600 to-pink-700
  bg-clip-text text-transparent whitespace-nowrap"
            >
              Karnataka (Govt.) Polytechnic, Mangaluru
            </h1>

            <p className="mt-0.5 text-sm italic text-gray-600">
              (An Autonomous Polytechnic under AICTE, New Delhi)
            </p>
          </div>

          {/* RIGHT LOGO */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/logo2.png"
              alt="DTE Logo"
              className="h-34 object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
