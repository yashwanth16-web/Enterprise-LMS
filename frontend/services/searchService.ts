import axios from "axios";

const API = "http://127.0.0.1:8000";

export const search = async (query: string) => {
  if (!query) return [];

  const { data } = await axios.get(
    `${API}/search?q=${query}`
  );

  return data;
};