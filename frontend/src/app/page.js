"use client";

import CheckResultPage from "./check-result/page";
import MainHeader from "./header-page/page";
import WaitMessagePage from "./wait-message/page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white flex flex-col">
      {/* 🔷 HEADER */}
      <MainHeader />

      {/* 🔷 MAIN CONTENT */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2">
        {/* LEFT – IMMERSIVE IMAGE */}
        <section className="relative hidden md:block">
          <img
            src="/clgimg3.jpg"
            alt="College Campus"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

          {/* Overlay Text */}
          <div className="absolute bottom-16 left-16 right-16 text-white">
            <h2 className="text-4xl font-bold tracking-wide drop-shadow-lg">
              Student Result Portal
            </h2>
            <div className="h-1 w-20 bg-red-600 my-4" />
            <p className="text-sm tracking-wider opacity-90 max-w-md">
              Official online facility for verification of provisional semester
              examination results issued by the institution.
            </p>
          </div>
        </section>

        {/* RIGHT – FORM PANEL */}
        <section className="flex justify-center items-center bg-gray-100 px-6 py-12">
          <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-gray-200">
            {/* FORM */}
            <div className="p-6">
              <WaitMessagePage />
              {/* <CheckResultPage /> */}
            </div>

            {/* PANEL FOOTER */}
            <div className="px-6 py-3 text-xs text-gray-500 text-center border-t bg-gray-50 rounded-b-xl">
              Secure & Confidential • Official Academic Record
            </div>
          </div>
        </section>
      </main>

      {/* 🔷 FOOTER */}
      <footer className="text-center text-xs text-gray-300 py-4">
        © {new Date().getFullYear()} Karnataka (Govt.) Polytechnic, Mangaluru
      </footer>
    </div>
  );
}
