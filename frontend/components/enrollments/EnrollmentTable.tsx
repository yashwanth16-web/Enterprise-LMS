"use client";

import Link from "next/link";

import useEnrollments from "@/hooks/useEnrollments";

export default function EnrollmentTable() {
  const { data: enrollments, isLoading } = useEnrollments();

  if (isLoading) {
    return (
      <div className="text-center text-gray-400 py-10">
        Loading enrollments...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#2a2a2a]">
      <table className="w-full">

        <thead className="bg-[#171717]">
          <tr className="text-left text-white">
            <th className="p-5">ID</th>
            <th className="p-5">Student ID</th>
            <th className="p-5">Course ID</th>
            <th className="p-5">Status</th>
            <th className="p-5">Enrolled At</th>
            <th className="p-5">Actions</th>
          </tr>
        </thead>

        <tbody>
          {enrollments?.map((enrollment: any) => (
            <tr
              key={enrollment.id}
              className="border-t border-[#2a2a2a] text-white"
            >
              <td className="p-5 text-white">
                {enrollment.id}
              </td>

              <td className="p-5 text-white">
                {enrollment.student_id}
              </td>

              <td className="p-5 text-white">
                {enrollment.course_id}
              </td>

              <td className="p-5">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {enrollment.status}
                </span>
              </td>

              <td className="p-5 text-white">
                {new Date(
                  enrollment.enrolled_at
                ).toLocaleDateString()}
              </td>

              <td className="p-5">
                <Link
                  href={`/dashboard/enrollments/${enrollment.id}`}
                  className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}

          {(!enrollments || enrollments.length === 0) && (
            <tr>
              <td
                colSpan={6}
                className="py-10 text-center text-gray-400"
              >
                No enrollments found.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}