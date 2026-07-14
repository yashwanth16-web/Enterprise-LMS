"use client";

import Link from "next/link";
import useInstructors from "@/hooks/useInstructors";

export default function InstructorTable() {
  const { data: instructors, isLoading } = useInstructors();

  if (isLoading) {
    return (
      <p className="text-white">
        Loading instructors...
      </p>
    );
  }

  return (
    <div className="bg-[#171717] rounded-xl overflow-hidden">
      <table className="w-full">

        <thead>
          <tr className="border-b border-gray-800">
            <th className="p-5 text-left text-white">ID</th>
            <th className="p-5 text-left text-white">Name</th>
            <th className="p-5 text-left text-white">Email</th>
            <th className="p-5 text-left text-white">Specialization</th>
            <th className="p-5 text-left text-white">Status</th>
            <th className="p-5 text-left text-white">Actions</th>
          </tr>
        </thead>

        <tbody>
          {instructors?.map((instructor: any) => (
            <tr
              key={instructor.id}
              className="border-b border-gray-800"
            >
              <td className="p-5 text-white">
                {instructor.id}
              </td>

              <td className="p-5 text-white">
                {instructor.name}
              </td>

              <td className="p-5 text-white">
                {instructor.email}
              </td>

              <td className="p-5 text-white">
                {instructor.specialization}
              </td>

              <td className="p-5">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full">
                  {instructor.status}
                </span>
              </td>

              <td className="p-5">
                <Link
                  href={`/dashboard/instructors/${instructor.id}`}
                  className="bg-white text-black px-5 py-2 rounded-lg"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}