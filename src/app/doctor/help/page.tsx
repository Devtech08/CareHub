import { DoctorHelpPage } from '@/components/doctor-help-page';
import { DoctorSidebar } from '@/components/doctor-sidebar';

export default function DoctorHelp() {
  return (
    <div className="flex min-h-screen bg-background">
      <DoctorSidebar />
      <main className="flex-1">
        <DoctorHelpPage />
      </main>
    </div>
  );
}
