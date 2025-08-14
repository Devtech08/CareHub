import { AuthCard } from '@/components/auth-card';
import { RegisterForm } from '@/components/register-form';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function RegisterPage() {
  return (
    <>
      <AuthCard
        title="Create an Account"
        description="Join CareHub to manage your healthcare."
      >
        <RegisterForm />
      </AuthCard>
    </>
  );
}
