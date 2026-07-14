"use client";

import { useRecentActivity } from "@/hooks/useRecentActivity";

export default function RecentActivity() {
  const { data, isLoading } =
    useRecentActivity();

  if (isLoading) {
    return (
      <div className="bg-card border border-border rounded-2xl h-[350px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {data?.map((item: any) => (

          <div
            key={item.id}
            className="border border-border rounded-xl p-4"
          >

            <p className="font-semibold">
              Student #{item.student_id}
            </p>

            <p className="text-sm text-muted-foreground">
              Enrolled in Course #{item.course_id}
            </p>

            <p className="text-xs text-muted-foreground mt-2">
              {new Date(
                item.enrolled_at
              ).toLocaleString()}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}