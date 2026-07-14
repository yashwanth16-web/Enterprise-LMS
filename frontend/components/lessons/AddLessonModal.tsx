"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLesson } from "@/services/lessonService";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddLessonModal({
  open,
  onClose,
}: Props) {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: 30,
    order_number: 1,
    video_url: "",
    course_id: 1,
  });

  const mutation = useMutation({
    mutationFn: createLesson,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });

      setForm({
        title: "",
        description: "",
        duration: 30,
        order_number: 1,
        video_url: "",
        course_id: 1,
      });

      onClose();
    },
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">

      <div className="w-[650px] rounded-2xl bg-card border border-border p-8">

        <h2 className="text-3xl font-bold mb-8">
          Add Lesson
        </h2>

        <div className="space-y-5">

          <input
            placeholder="Lesson Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            className="w-full rounded-xl border border-border bg-background p-3"
          />

          <textarea
            rows={4}
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full rounded-xl border border-border bg-background p-3"
          />

          <input
            type="number"
            placeholder="Duration"
            value={form.duration}
            onChange={(e) =>
              setForm({
                ...form,
                duration: Number(e.target.value),
              })
            }
            className="w-full rounded-xl border border-border bg-background p-3"
          />

          <input
            type="number"
            placeholder="Order"
            value={form.order_number}
            onChange={(e) =>
              setForm({
                ...form,
                order_number: Number(e.target.value),
              })
            }
            className="w-full rounded-xl border border-border bg-background p-3"
          />

          <input
            placeholder="YouTube URL"
            value={form.video_url}
            onChange={(e) =>
              setForm({
                ...form,
                video_url: e.target.value,
              })
            }
            className="w-full rounded-xl border border-border bg-background p-3"
          />

          <input
            type="number"
            placeholder="Course ID"
            value={form.course_id}
            onChange={(e) =>
              setForm({
                ...form,
                course_id: Number(e.target.value),
              })
            }
            className="w-full rounded-xl border border-border bg-background p-3"
          />

        </div>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border border-border px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={() => mutation.mutate(form)}
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black"
          >
            Save Lesson
          </button>

        </div>

      </div>

    </div>
  );
}