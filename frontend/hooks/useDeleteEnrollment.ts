"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteEnrollment } from "@/services/enrollmentService";

export default function useDeleteEnrollment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEnrollment,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["enrollments"],
      });
    },
  });
}