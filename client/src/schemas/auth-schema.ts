import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Please check your password."),
});

export const SignUpSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character."
    ),
});

export type SigninSchemaType = z.infer<typeof SignInSchema>;
export type SignupSchemaType = z.infer<typeof SignUpSchema>;
