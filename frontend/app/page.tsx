"use client";

import DashboardCards from "@/components/dashboard/DashboardCards";

export default function HomePage() {
  return (
    <div className="space-y-10 p-8">

      <div>
        <h1 className="text-5xl font-bold">
          Enterprise LMS Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Monitor students, courses, instructors and enrollments.
        </p>
      </div>

      <DashboardCards />

    </div>
  );
}