"use client";

import { useQuery } from "@tanstack/react-query";

import { getDashboardStats } from "@/services/analyticsService";

export default function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: getDashboardStats,
  });
}