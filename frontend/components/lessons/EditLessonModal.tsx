"use client";

import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLesson } from "@/services/lessonService";

type Props = {
  open: boolean;
  onClose: () => void;
  lesson: any;
};

export default function EditLessonModal({
  open,
  onClose,
  lesson,
}: Props) {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: 0,
    order_number: 0,
    video_url: "",
    course_id: 0,
  });

  useEffect(() => {
    if (lesson) {
      setForm({
        title: lesson.title,
        description: lesson.description,
        duration: lesson.duration,
        order_number: lesson.order_number,
        video_url: lesson.video_url,
        course_id: lesson.course_id,
      });
    }
  }, [lesson]);

  const mutation = useMutation({
    mutationFn: (data: any) =>
      updateLesson(lesson.id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });

      queryClient.invalidateQueries({
        queryKey: ["lesson", lesson.id],
      });

      onClose();
    },
  });

  if (!open || !lesson) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="w-[650px] rounded-2xl border border-border bg-card p-8">

        <h2 className="text-3xl font-bold mb-8">
          Edit Lesson
        </h2>

        <div className="space-y-5">

          <input
            className="w-full rounded-xl border border-border bg-background p-3"
            value={form.title}
            onChange={(e)=>
              setForm({...form,title:e.target.value})
            }
          />

          <textarea
            rows={4}
            className="w-full rounded-xl border border-border bg-background p-3"
            value={form.description}
            onChange={(e)=>
              setForm({...form,description:e.target.value})
            }
          />

          <input
            type="number"
            className="w-full rounded-xl border border-border bg-background p-3"
            value={form.duration}
            onChange={(e)=>
              setForm({...form,duration:Number(e.target.value)})
            }
          />

          <input
            type="number"
            className="w-full rounded-xl border border-border bg-background p-3"
            value={form.order_number}
            onChange={(e)=>
              setForm({...form,order_number:Number(e.target.value)})
            }
          />

          <input
            className="w-full rounded-xl border border-border bg-background p-3"
            value={form.video_url}
            onChange={(e)=>
              setForm({...form,video_url:e.target.value})
            }
          />

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl border border-border"
          >
            Cancel
          </button>

          <button
            onClick={() => mutation.mutate(form)}
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold"
          >
            Update Lesson
          </button>

        </div>

      </div>

    </div>
  );
}