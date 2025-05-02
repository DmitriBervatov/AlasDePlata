import { useMutation } from "@tanstack/react-query";
import { login, logout, signup } from "./api";

export function useLoginAuth() {
  return useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => login(username, password),
  });
}

export function useLogoutAuth() {
  return useMutation({
    mutationFn: () => logout(),
  });
}

export function useSignupAuth() {
  return useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => signup(username, password),
  });
}
