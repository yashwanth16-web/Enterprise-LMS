"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInstructor } from "@/services/instructorService";

export default function useDeleteInstructor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteInstructor,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["instructors"],
      });
    },
  });
}