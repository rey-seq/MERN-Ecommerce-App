import AuthWrapper from "@/components/common/auth-wrapper";
import SignInForm from "@/components/forms/sign-in-form";

export default function SignInPage() {
  return (
    <AuthWrapper auth="sign-in">
      <SignInForm />
    </AuthWrapper>
  );
}
