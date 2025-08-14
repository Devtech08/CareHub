import { AuthCard } from '@/components/auth-card';
import { LoginForm } from '@/components/login-form';

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome Back"
      description="Enter your credentials to access your account."
    >
      <LoginForm />
    </AuthCard>
  );
}
