import api from "@/lib/api";

export const getEnrollments = async () => {
  const res = await api.get("/enrollments");
  return res.data;
};

export const getEnrollment = async (id: number) => {
  const res = await api.get(`/enrollments/${id}`);
  return res.data;
};

export const createEnrollment = async (
  enrollment: any
) => {
  const res = await api.post(
    "/enrollments",
    enrollment
  );

  return res.data;
};

export const updateEnrollment = async (
  id: number,
  enrollment: any
) => {
  const res = await api.put(
    `/enrollments/${id}`,
    enrollment
  );

  return res.data;
};

export const deleteEnrollment = async (
  id: number
) => {
  const res = await api.delete(
    `/enrollments/${id}`
  );

  return res.data;
};