"use client";

export default function MessagesPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold text-white">
          Messages
        </h1>

        <p className="text-gray-400 mt-2">
          Manage communication between students and instructors.
        </p>
      </div>

      <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 h-[500px] flex items-center justify-center">
        <div className="text-center">

          <h2 className="text-3xl text-white font-semibold">
            📩 No Messages
          </h2>

          <p className="text-gray-400 mt-3">
            Messaging module will be implemented here.
          </p>

        </div>
      </div>

    </div>
  );
}