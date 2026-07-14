"use client";

import { useQuery } from "@tanstack/react-query";
import { getInstructor } from "@/services/instructorService";

export default function useInstructor(id: number) {
  return useQuery({
    queryKey: ["instructor", id],
    queryFn: () => getInstructor(id),
    enabled: !!id,
  });
}