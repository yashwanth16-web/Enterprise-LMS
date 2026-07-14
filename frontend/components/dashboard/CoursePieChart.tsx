"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { useCourseCategories } from "@/hooks/useCourseCategories";

const COLORS = [
  "#ffffff",
  "#d4d4d4",
  "#a3a3a3",
  "#737373",
  "#525252",
];

export default function CoursePieChart() {
  const { data, isLoading } = useCourseCategories();

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
        Course Categories
      </h2>

      <ResponsiveContainer
        width="100%"
        height={280}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="total"
            nameKey="category"
            outerRadius={90}
          >

            {data?.map(
              (_: any, index: number) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              )
            )}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}