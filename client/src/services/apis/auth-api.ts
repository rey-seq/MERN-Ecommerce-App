import { AxiosError } from "axios";
import { axiosInstance } from "../axios";
import { SigninSchemaType, SignupSchemaType } from "@/schemas/auth-schema";
import {
  ISignInResponse,
  ISignUpResponse,
  IVerifyAuthResponse,
} from "../types";

export const VerifyAuthApi = async (): Promise<IVerifyAuthResponse> => {
  try {
    const response = await axiosInstance.get("/auth/verify");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const SignUpApi = async (
  values: SignupSchemaType
): Promise<ISignUpResponse> => {
  try {
    const response = await axiosInstance.post("/auth/signup", values);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const SignInApi = async (
  values: SigninSchemaType
): Promise<ISignInResponse | Error> => {
  try {
    const response = await axiosInstance.post("/auth/signin", values);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};
