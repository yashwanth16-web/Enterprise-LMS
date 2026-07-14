"use client";

import useDashboardStats from "@/hooks/useDashboardStats";
import StatsCard from "./StatsCard";

export default function DashboardCards() {
  const { data, isLoading } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-40 animate-pulse rounded-2xl border border-border bg-card"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Students"
        value={data?.total_students ?? 0}
      />

      <StatsCard
        title="Courses"
        value={data?.total_courses ?? 0}
      />

      <StatsCard
        title="Instructors"
        value={data?.total_instructors ?? 0}
      />

      <StatsCard
        title="Enrollments"
        value={data?.total_enrollments ?? 0}
      />

    </div>
  );
}