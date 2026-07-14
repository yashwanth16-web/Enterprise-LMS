"use client";

import { useQuery } from "@tanstack/react-query";
import { getLesson } from "@/services/lessonService";

export default function useLesson(id: number) {
  return useQuery({
    queryKey: ["lesson", id],
    queryFn: () => getLesson(id),
    enabled: !!id,
  });
}