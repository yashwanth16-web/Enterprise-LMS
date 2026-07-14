"use client";

import { useState } from "react";

import InstructorTable from "@/components/instructors/InstructorTable";
import AddInstructorModal from "@/components/instructors/AddInstructorModal";

export default function InstructorsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-5xl font-bold text-white">
            Instructors
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all instructors
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-black px-6 py-4 rounded-lg font-semibold"
        >
          + New Instructor
        </button>

      </div>

      <InstructorTable />

      <AddInstructorModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}