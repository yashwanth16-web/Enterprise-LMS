"use client";

import { useQuery } from "@tanstack/react-query";

import { getEnrollment } from "@/services/enrollmentService";

export default function useEnrollment(
  id: number
) {
  return useQuery({
    queryKey: ["enrollment", id],
    queryFn: () => getEnrollment(id),
    enabled: !!id,
  });
}