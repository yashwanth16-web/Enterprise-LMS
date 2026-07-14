interface Props {
  title: string;
  value: number;
  icon: string;
}

export default function StatCard({
  title,
  value,
  icon,
}: Props) {
  return (
    <div className="bg-[#171717] border border-[#2A2A2A] rounded-2xl p-6">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-zinc-400">{title}</p>

          <h1 className="text-5xl font-bold text-white mt-3">
            {value}
          </h1>
        </div>

        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-3xl">
          <span>{icon}</span>
        </div>

      </div>

    </div>
  );
}