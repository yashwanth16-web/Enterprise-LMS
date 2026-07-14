"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import CourseTable from "@/components/courses/CourseTable";
import AddCourseModal from "@/components/courses/AddCourseModal";

export default function CoursesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-5xl font-bold tracking-tight">
            Courses
          </h1>

          <p className="mt-2 text-muted-foreground">
            Create, update and manage all enterprise courses.
          </p>

        </div>

        <Button
          size="lg"
          onClick={() => setOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" />

          New Course

        </Button>

      </div>

      <CourseTable />

      <AddCourseModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}