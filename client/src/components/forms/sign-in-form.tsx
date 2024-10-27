import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { SignInSchema, SigninSchemaType } from "@/schemas/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "@/services/mutations";

export default function SignInForm() {
  const form = useForm<SigninSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { mutate: SignIn, isPending } = useSignIn();

  const onSubmit = (values: SigninSchemaType) => {
    SignIn(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="enter your email" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isPending}
          type="submit"
          size={"lg"}
          className="w-full"
        >
          {isPending ? "Loading..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
