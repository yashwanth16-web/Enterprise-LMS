"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCourse } from "@/services/courseService";

export default function useUpdateCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      course,
    }: {
      id: number;
      course: any;
    }) => updateCourse(id, course),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });

      queryClient.invalidateQueries({
        queryKey: ["course"],
      });
    },
  });
}