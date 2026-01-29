"use client";

export default function Footer() {
  return (
    <footer className="text-xs text-gray-700 py-4 shadow-[0_-2px_6px_rgba(0,0,0,0.08)] bg-gradient-to-r from-pink-100 via-rose-100 to-red-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 text-center">
        <span>
          © {new Date().getFullYear()} Karnataka (Govt.) Polytechnic, Mangaluru
        </span>

        <span className="hidden md:inline">|</span>

        <span className="italic text-gray-400">
          Provisional results — subject to verification
        </span>
      </div>
    </footer>
  );
}
