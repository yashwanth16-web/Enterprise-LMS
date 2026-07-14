import axios from "axios";

const API =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://127.0.0.1:8000";

export const getDashboardStats = async () => {
  const { data } = await axios.get(
    `${API}/analytics/dashboard`
  );
  return data;
};

export const getEnrollmentTrend = async () => {
  const { data } = await axios.get(
    `${API}/analytics/enrollment-trend`
  );
  return data;
};

export const getCourseCategories = async () => {
  const { data } = await axios.get(
    `${API}/analytics/course-categories`
  );
  return data;
};

export const getRecentActivity = async () => {
  const { data } = await axios.get(
    `${API}/analytics/recent-activity`
  );
  return data;
};