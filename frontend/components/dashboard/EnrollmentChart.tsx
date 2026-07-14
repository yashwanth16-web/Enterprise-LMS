"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { useEnrollmentTrend } from "@/hooks/useEnrollmentTrend";

export default function EnrollmentChart() {
  const { data, isLoading } = useEnrollmentTrend();

  if (isLoading) {
    return (
      <div className="bg-card border border-border rounded-2xl h-[350px] flex items-center justify-center">
        <p className="text-muted-foreground">
          Loading chart...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-6">
        Enrollment Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={280}
      >
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="enrollments"
            stroke="#ffffff"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}