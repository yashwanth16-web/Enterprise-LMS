"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLesson } from "@/services/lessonService";

export default function useUpdateLesson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      lesson,
    }: {
      id: number;
      lesson: any;
    }) => updateLesson(id, lesson),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });
    },
  });
}