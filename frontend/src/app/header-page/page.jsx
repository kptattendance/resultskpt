"use client";

export default function MainHeader() {
  return (
    <header className="bg-gradient-to-b from-white via-slate-50 to-white shadow-md">
      <div className="max-w-7xl mx-auto px-3 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3">
          {/* LEFT LOGO */}

          <div className="hidden md:flex justify-center md:justify-start">
            <img
              src="/logo1.png"
              alt="Government of Karnataka Logo"
              className="h-16 sm:h-20 md:h-28 object-contain"
            />
          </div>

          {/* CENTER LOGO + TEXT */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/logo.jpg"
              alt="College Logo"
              className="h-12 sm:h-14 object-contain mb-1"
            />

            <p className="uppercase text-[10px] sm:text-xs tracking-[0.3em] font-semibold text-indigo-700">
              Government of Karnataka
            </p>

            <p className="text-xs sm:text-sm mt-1 text-emerald-700 font-medium">
              Department of Collegiate and Technical Education
            </p>

            <h1
              className="mt-1 text-lg sm:text-2xl md:text-3xl font-extrabold tracking-wide
              bg-gradient-to-r from-red-700 via-orange-600 to-pink-700
              bg-clip-text text-transparent
              whitespace-normal md:whitespace-nowrap"
            >
              Karnataka (Govt.) Polytechnic, Mangaluru
            </h1>

            <p className="mt-1 text-xs sm:text-sm italic text-gray-600">
              (An Autonomous Polytechnic under AICTE, New Delhi)
            </p>
          </div>

          {/* RIGHT LOGO */}
          <div className="hidden md:flex justify-center md:justify-end">
            <img
              src="/logo2.png"
              alt="DTE Logo"
              className="h-16 sm:h-20 md:h-28 object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
