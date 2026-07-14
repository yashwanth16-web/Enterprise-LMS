"use client";

import { useState } from "react";

import EnrollmentTable from "@/components/enrollments/EnrollmentTable";
import AddEnrollmentModal from "@/components/enrollments/AddEnrollmentModal";

export default function EnrollmentsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-5xl font-bold text-white">
            Enrollments
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all enrollments
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-black px-6 py-4 rounded-xl font-bold"
        >
          + New Enrollment
        </button>

      </div>

      <EnrollmentTable />

      <AddEnrollmentModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}