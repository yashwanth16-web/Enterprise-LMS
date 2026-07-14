"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createInstructor } from "@/services/instructorService";

export default function useCreateInstructor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createInstructor,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["instructors"],
      });
    },
  });
}