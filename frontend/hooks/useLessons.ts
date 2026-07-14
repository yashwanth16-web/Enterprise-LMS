"use client";

import { useQuery } from "@tanstack/react-query";
import { getLessonsByCourse } from "@/services/lessonService";

export default function useLessons(courseId: number = 1) {
  return useQuery({
    queryKey: ["lessons", courseId],
    queryFn: () => getLessonsByCourse(courseId),
    enabled: !!courseId,
  });
}