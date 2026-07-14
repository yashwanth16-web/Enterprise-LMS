import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getNotifications = async () => {
  const { data } = await axios.get(
    `${API}/notifications`
  );

  return data;
};