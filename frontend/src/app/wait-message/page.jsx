"use client";
export default function WaitMessagePage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-white text-black shadow-lg rounded-xl px-6 py-8 text-center">
          <h1 className="text-2xl font-bold text-indigo-900 mb-4">
            📢 Result Announcement
          </h1>

          <p className="text-sm text-gray-600 mb-2">
            Results will be published on
          </p>

          <p className="text-xl font-extrabold text-red-700 mb-6">
            🗓️ 30 January 2026 &nbsp;•&nbsp; ⏰ 10:30 AM
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Please wait patiently. 🌱 <br />
            Hard work always pays off — success is loading!
          </p>

          <p className="mt-6 text-sm font-semibold text-green-700">
            💐 All the best and congratulations in advance!
          </p>
        </div>
      </div>
    </>
  );
}
