"use client";

import { useState } from "react";

import useCreateEnrollment from "@/hooks/useCreateEnrollment";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddEnrollmentModal({
  open,
  onClose,
}: Props) {
  const createEnrollment = useCreateEnrollment();

  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [status, setStatus] = useState("Active");

  if (!open) return null;

  const handleSubmit = async () => {
    try {
      await createEnrollment.mutateAsync({
        student_id: Number(studentId),
        course_id: Number(courseId),
        status,
      });

      alert("Enrollment Added Successfully ✅");

      setStudentId("");
      setCourseId("");
      setStatus("Active");

      onClose();
    } catch (err) {
      alert("Failed to create enrollment");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#171717] rounded-xl w-[700px] p-10">

        <h1 className="text-5xl font-bold text-white mb-10">
          Add Enrollment
        </h1>

        <div className="space-y-6">

          <input
            type="number"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-lg p-4 text-white"
          />

          <input
            type="number"
            placeholder="Course ID"
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
            className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200"
          >
            Save Enrollment
          </button>

        </div>

      </div>

    </div>
  );
}