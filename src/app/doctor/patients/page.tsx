import { DoctorPatientsPage } from '@/components/doctor-patients-page';
import { DoctorSidebar } from '@/components/doctor-sidebar';

export default function DoctorPatients() {
  return (
    <div className="flex min-h-screen bg-background">
      <DoctorSidebar />
      <main className="flex-1">
        <DoctorPatientsPage />
      </main>
    </div>
  );
}
