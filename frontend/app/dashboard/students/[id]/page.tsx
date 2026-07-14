"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import useStudent from "@/hooks/useStudent";

import EditStudentModal from "@/components/students/EditStudentModal";
import DeleteStudentDialog from "@/components/students/DeleteStudentDialog";

export default function StudentDetailsPage() {
  const params = useParams();

  const id = Number(params.id);

  const { data: student, isLoading } = useStudent(id);

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="text-white">
        Loading...
      </div>
    );
  }

  if (!student) {
    return (
      <div className="text-red-500">
        Student not found.
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8">

        <Link
          href="/dashboard/students"
          className="text-gray-400 hover:text-white"
        >
          ← Back to Students
        </Link>

        <div className="flex justify-between items-start">

          <div>

            <h1 className="text-5xl font-bold text-white">
              {student.name}
            </h1>

            <p className="text-gray-400 mt-2">
              Student Details
            </p>

          </div>

          <div className="text-2xl font-bold text-green-500">
            {student.status}
          </div>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#171717] rounded-xl p-8">

            <p className="text-gray-400">
              Email
            </p>

            <h2 className="text-2xl text-white mt-2">
              {student.email}
            </h2>

          </div>

          <div className="bg-[#171717] rounded-xl p-8">

            <p className="text-gray-400">
              Phone
            </p>

            <h2 className="text-2xl text-white mt-2">
              {student.phone}
            </h2>

          </div>

        </div>

        <div className="bg-[#171717] rounded-xl p-8">

          <p className="text-gray-400">
            Course
          </p>

          <h2 className="text-2xl text-white mt-2">
            {student.course}
          </h2>

        </div>

        <div className="flex gap-4">

          <button
            onClick={() => setEditOpen(true)}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Edit Student
          </button>

          <button
            onClick={() => setDeleteOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Delete Student
          </button>

        </div>

      </div>

      <EditStudentModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        student={student}
      />

      <DeleteStudentDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        studentId={student.id}
      />
    </>
  );
}