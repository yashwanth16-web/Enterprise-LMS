"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLesson } from "@/services/lessonService";

export default function useDeleteLesson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLesson,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });
    },
  });
}