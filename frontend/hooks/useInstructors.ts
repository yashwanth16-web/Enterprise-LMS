"use client";

import { useQuery } from "@tanstack/react-query";
import { getInstructors } from "@/services/instructorService";

export default function useInstructors() {
  return useQuery({
    queryKey: ["instructors"],
    queryFn: getInstructors,
  });
}