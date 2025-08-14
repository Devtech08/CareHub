import { AuthCard } from '@/components/auth-card';
import { LoginForm } from '@/components/login-form';
import Header from '@/components/header';
import Footer from '@/components/footer';


export default function LoginPage() {
  return (
    <>
      <AuthCard
        title="Welcome Back"
        description="Enter your credentials to access your account."
      >
        <LoginForm />
      </AuthCard>
    </>
  );
}
