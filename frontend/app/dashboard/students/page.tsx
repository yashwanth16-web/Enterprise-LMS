"use client";

import { useState } from "react";

import StudentTable from "@/components/students/StudentTable";
import AddStudentModal from "@/components/students/AddStudentModal";

export default function StudentsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Students
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all students
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          + New Student
        </button>
      </div>

      <StudentTable />

      <AddStudentModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}