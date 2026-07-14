import {
  ArrowUpRight,
} from "lucide-react";

type Props = {
  title: string;
  value: number;
};

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:shadow-2xl
      "
    >
      <div className="absolute right-4 top-4 rounded-xl bg-white/5 p-2 transition group-hover:bg-white/10">
        <ArrowUpRight className="h-5 w-5 text-zinc-400 group-hover:text-white" />
      </div>

      <p className="text-sm uppercase tracking-wider text-muted-foreground">
        {title}
      </p>

      <h2 className="mt-5 text-5xl font-bold tracking-tight">
        {value}
      </h2>

      <div className="mt-5 h-1 w-16 rounded-full bg-white/20 transition-all group-hover:w-28 group-hover:bg-white" />
    </div>
  );
}