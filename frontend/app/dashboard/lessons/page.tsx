"use client";

import { useState } from "react";

import LessonTable from "@/components/lessons/LessonTable";
import AddLessonModal from "@/components/lessons/AddLessonModal";

export default function LessonsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Lessons
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all lessons
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          + New Lesson
        </button>

      </div>

      <LessonTable />

      <AddLessonModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}