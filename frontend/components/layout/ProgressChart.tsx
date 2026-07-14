"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 5 },
  { day: "Sat", hours: 7 },
  { day: "Sun", hours: 8 },
];

export default function ProgressChart() {
  return (
    <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-6">

      <h2 className="text-2xl font-semibold text-white mb-6">
        Weekly Learning Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#9CA3AF" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#FFFFFF"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}