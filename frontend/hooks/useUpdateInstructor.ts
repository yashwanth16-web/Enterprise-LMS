"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInstructor } from "@/services/instructorService";

export default function useUpdateInstructor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      instructor,
    }: {
      id: number;
      instructor: any;
    }) => updateInstructor(id, instructor),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["instructors"],
      });

      queryClient.invalidateQueries({
        queryKey: ["instructor", variables.id],
      });
    },
  });
}