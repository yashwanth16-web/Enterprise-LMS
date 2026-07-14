"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCourse } from "@/services/courseService";

export default function useDeleteCourse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCourse,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
  });
}