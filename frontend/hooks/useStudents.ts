"use client";

import { useQuery } from "@tanstack/react-query";
import { getStudents } from "@/services/studentService";

export default function useStudents() {
  return useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
}