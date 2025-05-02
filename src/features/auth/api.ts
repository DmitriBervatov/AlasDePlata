import axios from "@/lib/api";

export const login = async (username: string, password: string) =>
  await axios.post("/auth/login", { username, password });

export const signup = async (username: string, password: string) =>
  await axios.post("/auth/signup", { username, password });

export const logout = async () => await axios.post("/auth/logout");
