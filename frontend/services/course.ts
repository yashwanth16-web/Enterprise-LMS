import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getCourses = async () => {
  const res = await API.get("/courses");
  return res.data;
};

export const createCourse = async (course: any) => {
  const res = await API.post("/courses", course);
  return res.data;
};

export const updateCourse = async (id: number, course: any) => {
  const res = await API.put(`/courses/${id}`, course);
  return res.data;
};

export const deleteCourse = async (id: number) => {
  const res = await API.delete(`/courses/${id}`);
  return res.data;
};