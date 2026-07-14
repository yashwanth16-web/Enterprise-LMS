"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLesson } from "@/services/lessonService";

export default function useCreateLesson() {

  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: createLesson,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });
    },

  });

}