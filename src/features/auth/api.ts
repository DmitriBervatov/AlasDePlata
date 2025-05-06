import axios from "@/lib/api";
import { SignupPayload } from "./types";

export const login = async (username: string, password: string) =>
  (await axios.post("/auth/log-in", { username, password })).data;

export const signup = async (data: SignupPayload) => {
  const payload = {
    username: data.username,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    termsAccepted: data.termsConditions,
    ...(data.newsletter !== undefined && { newsletter: data.newsletter }),
  };

  return (await axios.post("/auth/sign-up", payload)).data;
};

export const logout = async () => await axios.post("/auth/log-out");
