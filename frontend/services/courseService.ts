import api from "@/lib/api";

export const getCourses = async () => {
  const res = await api.get("/courses");
  return res.data;
};

export const getCourse = async (id: number) => {
  const res = await api.get(`/courses/${id}`);
  return res.data;
};

export const createCourse = async (course: any) => {
  const res = await api.post("/courses", course);
  return res.data;
};

export const updateCourse = async (
  id: number,
  course: any
) => {
  const res = await api.put(`/courses/${id}`, course);
  return res.data;
};

export const deleteCourse = async (id: number) => {
  const res = await api.delete(`/courses/${id}`);
  return res.data;
};