"use client";

import Link from "next/link";
import useLessons from "@/hooks/useLessons";

export default function LessonTable() {
  // Change courseId if needed
  const { data, isLoading } = useLessons(3);

  if (isLoading) {
    return (
      <div className="text-white text-lg">
        Loading lessons...
      </div>
    );
  }

  return (
    <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#111111]">
          <tr>
            <th className="p-4 text-left text-gray-300">ID</th>
            <th className="p-4 text-left text-gray-300">Title</th>
            <th className="p-4 text-left text-gray-300">Duration</th>
            <th className="p-4 text-left text-gray-300">Order</th>
            <th className="p-4 text-left text-gray-300">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((lesson: any) => (
            <tr
              key={lesson.id}
              className="border-t border-[#2A2A2A] hover:bg-[#222222]"
            >
              <td className="p-4 text-white">
                {lesson.id}
              </td>

              <td className="p-4">
                <Link
                  href={`/dashboard/lessons/${lesson.id}`}
                  className="text-white hover:underline"
                >
                  {lesson.title}
                </Link>
              </td>

              <td className="p-4 text-gray-300">
                {lesson.duration} min
              </td>

              <td className="p-4 text-gray-300">
                {lesson.order_number}
              </td>

              <td className="p-4">
                <Link
                  href={`/dashboard/lessons/${lesson.id}`}
                  className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
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