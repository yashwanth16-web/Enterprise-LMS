import { useQuery } from "@tanstack/react-query";
import { getRecentActivity } from "@/services/analyticsService";

export function useRecentActivity() {
  return useQuery({
    queryKey: ["recent-activity"],
    queryFn: getRecentActivity,
  });
}