"use client";

import { useQuery } from "@tanstack/react-query";

import { getEnrollments } from "@/services/enrollmentService";

export default function useEnrollments() {
  return useQuery({
    queryKey: ["enrollments"],
    queryFn: getEnrollments,
  });
}