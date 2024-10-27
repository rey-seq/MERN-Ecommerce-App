import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignInApi, SignUpApi } from "../apis/auth-api";
import { toast } from "sonner";

export function useSignUp() {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: SignUpApi,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}

export function useSignIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["signIn"],
    mutationFn: SignInApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["verify-auth"],
      });
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
