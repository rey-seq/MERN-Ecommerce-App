import AuthWrapper from "@/components/common/auth-wrapper";
import SignUpForm from "@/components/forms/sign-up-form";

export default function SignUpPage() {
  return (
    <AuthWrapper auth="sign-up">
      <SignUpForm />
    </AuthWrapper>
  );
}
