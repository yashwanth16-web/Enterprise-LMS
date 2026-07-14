import StatCard from "@/components/layout/StatCard";

export default function DashboardPage() {
  return (
    <div className="p-8 bg-[#0A0A0A] min-h-screen">

      <h1 className="text-6xl font-bold text-white">
        Welcome Back 👋
      </h1>

      <p className="text-zinc-400 mt-3">
        Here's your learning progress today.
      </p>

      <div className="grid grid-cols-4 gap-6 mt-10">

        <StatCard
          title="Total Courses"
          value={24}
          icon="📚"
        />

        <StatCard
          title="Certificates"
          value={12}
          icon="🎓"
        />

        <StatCard
          title="Learning Hours"
          value={186}
          icon="⏰"
        />

        <StatCard
          title="Achievements"
          value={18}
          icon="🏆"
        />

      </div>

      <div className="mt-10 rounded-2xl bg-[#171717] border border-[#2A2A2A] p-8">

        <h2 className="text-3xl font-bold text-white">
          Continue Learning
        </h2>

        <p className="text-zinc-400 mt-2">
          Course cards will be connected to your backend in the next step.
        </p>

      </div>

    </div>
  );
}