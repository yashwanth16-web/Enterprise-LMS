"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStudent } from "@/services/studentService";

export default function useDeleteStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteStudent(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["students"],
      });
    },
  });
}