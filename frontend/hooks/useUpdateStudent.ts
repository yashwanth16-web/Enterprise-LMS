"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStudent } from "@/services/studentService";

export default function useUpdateStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      student,
    }: {
      id: number;
      student: any;
    }) => updateStudent(id, student),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["students"],
      });

      queryClient.invalidateQueries({
        queryKey: ["student", variables.id],
      });
    },
  });
}