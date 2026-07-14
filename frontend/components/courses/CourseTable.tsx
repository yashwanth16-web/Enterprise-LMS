"use client";

import Link from "next/link";
import useCourses from "@/hooks/useCourses";

export default function CourseTable() {
  const { data, isLoading } = useCourses();

  if (isLoading) {
    return (
      <div className="text-white text-lg">
        Loading courses...
      </div>
    );
  }

  return (
    <div className="bg-[#171717] rounded-xl border border-[#2A2A2A] overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#111111]">
          <tr>
            <th className="text-left p-4 text-gray-300">ID</th>
            <th className="text-left p-4 text-gray-300">Title</th>
            <th className="text-left p-4 text-gray-300">Category</th>
            <th className="text-left p-4 text-gray-300">Price</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((course: any) => (
            <tr
              key={course.id}
              className="border-t border-[#2A2A2A] hover:bg-[#222222]"
            >
              <td className="p-4 text-white">
                {course.id}
              </td>

              <td className="p-4">
                <Link
                  href={`/dashboard/courses/${course.id}`}
                  className="text-white hover:underline hover:text-gray-300 transition"
                >
                  {course.title}
                </Link>
              </td>

              <td className="p-4 text-gray-400">
                {course.category}
              </td>

              <td className="p-4 text-white">
                ₹{course.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}