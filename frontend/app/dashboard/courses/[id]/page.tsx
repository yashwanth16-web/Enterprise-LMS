"use client";

import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCourse } from "@/services/courseService";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";
import EditCourseModal from "@/components/courses/EditCourseModal";

import useDeleteCourse from "@/hooks/useDeleteCourse";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function CourseDetailsPage({ params }: Props) {
  const { id } = use(params);
  const [open, setOpen] = useState(false);
  const deleteMutation = useDeleteCourse();
  const router = useRouter();

  const { data: course, isLoading } = useQuery({
    queryKey: ["course", id],
    queryFn: () => getCourse(Number(id)),
  });

  if (isLoading) {
    return (
      <div className="p-10 text-white">
        Loading Course...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="p-10 text-red-500">
        Course not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <Link
            href="/dashboard/courses"
            className="text-gray-400 hover:text-white"
          >
            ← Back to Courses
          </Link>

          <h1 className="text-5xl font-bold text-white mt-4">
            {course.title}
          </h1>

          <p className="text-gray-400 mt-2">
            {course.category}
          </p>

        </div>

        <div className="text-4xl font-bold text-white">
          ₹{course.price}
        </div>

      </div>

      <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8">

        <h2 className="text-2xl font-semibold text-white mb-4">
          Description
        </h2>

        <p className="text-gray-300 leading-8">
          {course.description}
        </p>

      </div>

      <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8">

        <h2 className="text-2xl font-semibold text-white mb-4">
          Thumbnail
        </h2>

        <div className="bg-[#111111] border border-[#2A2A2A] rounded-lg p-6">

          <p className="text-gray-400 break-all">
            {course.thumbnail}
          </p>

        </div>

      </div>

      <div className="flex gap-4">

        <button 
          className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          onClick={() => setOpen(true)}
        >
          Edit Course
        </button>

        <button
  onClick={async () => {
    const ok = confirm(
      "Are you sure you want to delete this course?"
    );

    if (!ok) return;

    await deleteMutation.mutateAsync(course.id);

    alert("Course Deleted Successfully ✅");

    router.push("/dashboard/courses");
  }}
  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
>
  Delete Course
</button>

        <EditCourseModal
          open={open}
          onClose={() => setOpen(false)}
          course={course}
        />

      </div>

    </div>
  );
}