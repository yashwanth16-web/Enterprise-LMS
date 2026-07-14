"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import useInstructor from "@/hooks/useInstructor";

import EditInstructorModal from "@/components/instructors/EditInstructorModal";
import DeleteInstructorDialog from "@/components/instructors/DeleteInstructorDialog";

export default function InstructorDetailsPage() {
  const params = useParams();

  const id = Number(params.id);

  const { data: instructor, isLoading } = useInstructor(id);

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  if (!instructor) {
    return <div className="text-red-500">Instructor not found.</div>;
  }

  return (
    <div className="space-y-8">

      <Link
        href="/dashboard/instructors"
        className="text-gray-400 hover:text-white"
      >
        ← Back to Instructors
      </Link>

      <div className="flex justify-between">

        <div>

          <h1 className="text-5xl font-bold text-white">
            {instructor.name}
          </h1>

          <p className="text-gray-400 mt-2">
            Instructor Details
          </p>

        </div>

        <div className="text-4xl font-bold text-green-500">
          {instructor.status}
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-[#171717] p-8 rounded-xl">

          <p className="text-gray-400">
            Email
          </p>

          <h2 className="text-2xl text-white mt-3">
            {instructor.email}
          </h2>

        </div>

        <div className="bg-[#171717] p-8 rounded-xl">

          <p className="text-gray-400">
            Phone
          </p>

          <h2 className="text-2xl text-white mt-3">
            {instructor.phone}
          </h2>

        </div>

      </div>

      <div className="bg-[#171717] p-8 rounded-xl">

        <p className="text-gray-400">
          Specialization
        </p>

        <h2 className="text-2xl text-white mt-3">
          {instructor.specialization}
        </h2>

      </div>

      <div className="flex gap-4">

        <button
          onClick={() => setEditOpen(true)}
          className="bg-white text-black px-8 py-4 rounded-xl font-bold"
        >
          Edit Instructor
        </button>

        <button
          onClick={() => setDeleteOpen(true)}
          className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold"
        >
          Delete Instructor
        </button>

      </div>

      <EditInstructorModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        instructor={instructor}
      />

      <DeleteInstructorDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        instructorId={instructor.id}
      />

    </div>
  );
}