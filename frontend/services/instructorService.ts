import api from "./api";

export const getInstructors = async () => {
  const res = await api.get("/instructors");
  return res.data;
};

export const getInstructor = async (id: number) => {
  const res = await api.get(`/instructors/${id}`);
  return res.data;
};

export const createInstructor = async (instructor: any) => {
  const res = await api.post("/instructors", instructor);
  return res.data;
};

export const updateInstructor = async (
  id: number,
  instructor: any
) => {
  const res = await api.put(`/instructors/${id}`, instructor);
  return res.data;
};

export const deleteInstructor = async (id: number) => {
  const res = await api.delete(`/instructors/${id}`);
  return res.data;
};