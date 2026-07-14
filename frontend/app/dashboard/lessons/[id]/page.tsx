"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useLesson from "@/hooks/useLesson";

import {
  deleteLesson,
} from "@/services/lessonService";

import EditLessonModal from "@/components/lessons/EditLessonModal";

export default function LessonDetailsPage() {
  const router = useRouter();

  const queryClient = useQueryClient();

  const params = useParams();

  const id = Number(params.id);

  const { data: lesson, isLoading } = useLesson(id);

  const [editOpen, setEditOpen] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: () => deleteLesson(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });

      router.push("/dashboard/lessons");
    },
  });

  if (isLoading) {
    return (
      <div className="text-white text-xl">
        Loading lesson...
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="text-red-500 text-xl">
        Lesson not found.
      </div>
    );
  }

  function handleDelete() {
    const ok = window.confirm(
      "Are you sure you want to delete this lesson?"
    );

    if (!ok) return;

    deleteMutation.mutate();
  }

  return (
    <>
      <EditLessonModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        lesson={lesson}
      />

      <div className="space-y-8">

        <Link
          href="/dashboard/lessons"
          className="text-gray-400 hover:text-white"
        >
          ← Back to Lessons
        </Link>

        <div>

          <h1 className="text-5xl font-bold text-white">
            {lesson.title}
          </h1>

          <p className="text-gray-400 mt-2">
            Lesson Details
          </p>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6">

            <p className="text-gray-400">
              Duration
            </p>

            <h2 className="text-3xl text-white font-bold mt-2">
              {lesson.duration} min
            </h2>

          </div>

          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6">

            <p className="text-gray-400">
              Order
            </p>

            <h2 className="text-3xl text-white font-bold mt-2">
              {lesson.order_number}
            </h2>

          </div>

          <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-6">

            <p className="text-gray-400">
              Course ID
            </p>

            <h2 className="text-3xl text-white font-bold mt-2">
              {lesson.course_id}
            </h2>

          </div>

        </div>

        <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8">

          <h2 className="text-3xl font-bold text-white mb-5">
            Description
          </h2>

          <p className="text-gray-300 leading-8">
            {lesson.description}
          </p>

        </div>

        <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8">

          <h2 className="text-3xl font-bold text-white mb-5">
            Video
          </h2>

          <a
            href={lesson.video_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 inline-block"
          >
            ▶ Watch on YouTube
          </a>

        </div>

        <div className="flex gap-4">

          <button
            onClick={() => setEditOpen(true)}
            className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200"
          >
            Edit Lesson
          </button>

          <button
            onClick={handleDelete}
            disabled={deleteMutation.isPending}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            {deleteMutation.isPending
              ? "Deleting..."
              : "Delete Lesson"}
          </button>

        </div>

      </div>
    </>
  );
}