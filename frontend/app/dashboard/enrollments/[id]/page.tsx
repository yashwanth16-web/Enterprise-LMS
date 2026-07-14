"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import useEnrollment from "@/hooks/useEnrollment";

import EditEnrollmentModal from "@/components/enrollments/EditEnrollmentModal";
import DeleteEnrollmentDialog from "@/components/enrollments/DeleteEnrollmentDialog";

export default function EnrollmentDetailsPage() {
  const params = useParams();

  const id = Number(params.id);

  const { data: enrollment, isLoading } = useEnrollment(id);

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="text-white">
        Loading...
      </div>
    );
  }

  if (!enrollment) {
    return (
      <div className="text-red-500">
        Enrollment not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <Link
        href="/dashboard/enrollments"
        className="text-gray-400 hover:text-white"
      >
        ← Back to Enrollments
      </Link>

      <div>

        <h1 className="text-5xl font-bold text-white">
          Enrollment #{enrollment.id}
        </h1>

        <p className="text-gray-400 mt-2">
          Enrollment Details
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-[#171717] p-8 rounded-xl">

          <p className="text-gray-400">
            Student ID
          </p>

          <h2 className="text-2xl text-white mt-3">
            {enrollment.student_id}
          </h2>

        </div>

        <div className="bg-[#171717] p-8 rounded-xl">

          <p className="text-gray-400">
            Course ID
          </p>

          <h2 className="text-2xl text-white mt-3">
            {enrollment.course_id}
          </h2>

        </div>

      </div>

      <div className="bg-[#171717] p-8 rounded-xl">

        <p className="text-gray-400">
          Status
        </p>

        <h2 className="text-2xl text-green-500 mt-3">
          {enrollment.status}
        </h2>

      </div>

      <div className="bg-[#171717] p-8 rounded-xl">

        <p className="text-gray-400">
          Enrolled At
        </p>

        <h2 className="text-2xl text-white mt-3">
          {new Date(
            enrollment.enrolled_at
          ).toLocaleString()}
        </h2>

      </div>

      <div className="flex gap-4">

        <button
          onClick={() => setEditOpen(true)}
          className="bg-white text-black px-8 py-4 rounded-xl font-bold"
        >
          Edit Enrollment
        </button>

        <button
          onClick={() => setDeleteOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold"
        >
          Delete Enrollment
        </button>

      </div>

      <EditEnrollmentModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        enrollment={enrollment}
      />

      <DeleteEnrollmentDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        enrollmentId={enrollment.id}
      />

    </div>
  );
}