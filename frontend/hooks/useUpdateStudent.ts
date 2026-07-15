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

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["students"],
      });
    },
  });
}