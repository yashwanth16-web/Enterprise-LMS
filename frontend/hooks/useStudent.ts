"use client";

import { useQuery } from "@tanstack/react-query";
import { getStudent } from "@/services/studentService";

export default function useStudent(
  id: number
) {
  return useQuery({
    queryKey: ["student", id],
    queryFn: () => getStudent(id),
    enabled: !!id,
  });
}