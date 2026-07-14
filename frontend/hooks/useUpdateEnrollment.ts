"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateEnrollment } from "@/services/enrollmentService";

export default function useUpdateEnrollment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      enrollment,
    }: {
      id: number;
      enrollment: any;
    }) => updateEnrollment(id, enrollment),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["enrollments"],
      });

      queryClient.invalidateQueries({
        queryKey: ["enrollment", variables.id],
      });
    },
  });
}