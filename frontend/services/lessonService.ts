import api from "@/lib/api";

// Get all lessons
export const getLessons = async () => {
  const res = await api.get("/lessons");
  return res.data;
};

// Get lessons by course
export const getLessonsByCourse = async (courseId: number) => {
  const res = await api.get(`/lessons/course/${courseId}`);
  return res.data;
};

// Get single lesson
export const getLesson = async (id: number) => {
  const res = await api.get(`/lessons/${id}`);
  return res.data;
};

// Create lesson
export const createLesson = async (lesson: any) => {
  const res = await api.post("/lessons", lesson);
  return res.data;
};

// Update lesson
export const updateLesson = async (id: number, lesson: any) => {
  const res = await api.put(`/lessons/${id}`, lesson);
  return res.data;
};

// Delete lesson
export const deleteLesson = async (id: number) => {
  const res = await api.delete(`/lessons/${id}`);
  return res.data;
};
