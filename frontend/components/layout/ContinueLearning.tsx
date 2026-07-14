export default function ContinueLearning() {
  const courses = [
    {
      title: "Advanced React",
      progress: 78,
      lessons: 42,
      duration: "18 Hours",
    },
    {
      title: "Python Masterclass",
      progress: 55,
      lessons: 30,
      duration: "12 Hours",
    },
    {
      title: "Machine Learning",
      progress: 25,
      lessons: 50,
      duration: "24 Hours",
    },
  ];

  return (
    <div className="space-y-5">

      <h2 className="text-3xl font-bold text-white">
        Continue Learning
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-[#18181B] border border-zinc-800 rounded-2xl p-6 hover:border-white transition"
          >
            <div className="h-40 rounded-xl bg-zinc-900 mb-5 flex items-center justify-center text-6xl">
              📚
            </div>

            <h3 className="text-white text-xl font-bold">
              {course.title}
            </h3>

            <p className="text-zinc-400 mt-2">
              {course.lessons} Lessons
            </p>

            <div className="mt-5 h-2 rounded-full bg-zinc-800">
              <div
                className="bg-white h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>

            <div className="flex justify-between mt-3 text-sm text-zinc-400">
              <span>{course.progress}%</span>
              <span>{course.duration}</span>
            </div>

            <button className="w-full mt-6 bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition">
              Continue
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}