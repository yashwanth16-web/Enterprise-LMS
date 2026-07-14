"use client";

import DashboardCards from "@/components/dashboard/DashboardCards";

export default function DashboardPage() {
  return (
    <div className="space-y-10">

      <div>

        <span className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Enterprise LMS
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Monitor your students, instructors, courses and
          enrollments from one centralized dashboard.
        </p>

      </div>

      <DashboardCards />

    </div>
  );
}