"use client";

import { useEffect, useState } from "react";
import useUpdateCourse from "@/hooks/useUpdateCourse";

interface Props {
  open: boolean;
  onClose: () => void;
  course: any;
}

export default function EditCourseModal({
  open,
  onClose,
  course,
}: Props) {
  const mutation = useUpdateCourse();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (course) {
      setForm({
        title: course.title || "",
        description: course.description || "",
        category: course.category || "",
        price: String(course.price || ""),
        thumbnail: course.thumbnail || "",
      });
    }
  }, [course]);

  if (!open) return null;

  const submit = async () => {
    await mutation.mutateAsync({
      id: course.id,
      course: {
        ...form,
        price: Number(form.price),
      },
    });

    alert("Course Updated Successfully ✅");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8 w-[700px]">

        <h2 className="text-3xl font-bold text-white mb-6">
          Edit Course
        </h2>

        <div className="space-y-5">

          <input
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-3 text-white"
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <textarea
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-3 text-white"
            rows={5}
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <input
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-3 text-white"
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
          />

          <input
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-3 text-white"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
          />

          <input
            className="w-full bg-[#111111] border border-[#2A2A2A] rounded-lg p-3 text-white"
            placeholder="Thumbnail"
            value={form.thumbnail}
            onChange={(e) =>
              setForm({
                ...form,
                thumbnail: e.target.value,
              })
            }
          />

          <div className="flex justify-end gap-4 pt-4">

            <button
              onClick={onClose}
              className="bg-[#222222] text-white px-6 py-3 rounded-lg"
            >
              Cancel
            </button>

            <button
              onClick={submit}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
            >
              Update Course
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}