"use client";

import { useState, useEffect } from "react";

import useUpdateEnrollment from "@/hooks/useUpdateEnrollment";

type Props = {
  open: boolean;
  onClose: () => void;
  enrollment: any;
};

export default function EditEnrollmentModal({
  open,
  onClose,
  enrollment,
}: Props) {
  const updateEnrollment = useUpdateEnrollment();

  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
    if (enrollment) {
      setStudentId(String(enrollment.student_id));
      setCourseId(String(enrollment.course_id));
      setStatus(enrollment.status);
    }
  }, [enrollment]);

  if (!open) return null;

  const handleSubmit = async () => {
    try {
      await updateEnrollment.mutateAsync({
        id: enrollment.id,
        enrollment: {
          student_id: Number(studentId),
          course_id: Number(courseId),
          status,
        },
      });

      alert("Enrollment Updated Successfully ✅");
      onClose();
    } catch {
      alert("Failed to update enrollment");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#171717] rounded-xl w-[700px] p-10">

        <h1 className="text-5xl font-bold text-white mb-10">
          Edit Enrollment
        </h1>

        <div className="space-y-6">

          <input
            type="number"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-lg p-4 text-white"
          />

          <input
            type="number"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-lg p-4 text-white"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-lg p-4 text-white"
          >
            <option>Active</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Update Enrollment
          </button>

        </div>

      </div>
    </div>
  );
}