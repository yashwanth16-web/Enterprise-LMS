import { useQuery } from "@tanstack/react-query";
import { getCourseCategories } from "@/services/analyticsService";

export function useCourseCategories() {
  return useQuery({
    queryKey: ["course-categories"],
    queryFn: getCourseCategories,
  });
}