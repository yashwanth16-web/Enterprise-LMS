"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createEnrollment } from "@/services/enrollmentService";

export default function useCreateEnrollment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEnrollment,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["enrollments"],
      });
    },
  });
}