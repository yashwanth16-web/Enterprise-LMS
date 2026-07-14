"use client";

import DashboardCards from "@/components/dashboard/DashboardCards";
import EnrollmentChart from "@/components/dashboard/EnrollmentChart";
import CoursePieChart from "@/components/dashboard/CoursePieChart";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function AnalyticsPage() {
  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-5xl font-bold text-white">
          Analytics
        </h1>

        <p className="text-gray-400 mt-2">
          Enterprise LMS Analytics Dashboard
        </p>
      </div>

      <DashboardCards />

      <EnrollmentChart />

      <div className="grid grid-cols-2 gap-6">
        <CoursePieChart />
        <RecentActivity />
      </div>

    </div>
  );
}