import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:3000/users",
});

export const getUsers = async () => {
  const res = await usersApi.get("/");
  return res.data;
}

export const addUsers = (user) => usersApi.post("/", user)
