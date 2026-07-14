import { useQuery } from "@tanstack/react-query";
import { getEnrollmentTrend } from "@/services/analyticsService";

export function useEnrollmentTrend() {
  return useQuery({
    queryKey: ["enrollment-trend"],
    queryFn: getEnrollmentTrend,
  });
}