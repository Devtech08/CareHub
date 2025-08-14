import { DoctorAppointmentsPage } from '@/components/doctor-appointments-page';
import { DoctorSidebar } from '@/components/doctor-sidebar';

export default function DoctorAppointments() {
  return (
    <div className="flex min-h-screen bg-background">
      <DoctorSidebar />
      <main className="flex-1">
        <DoctorAppointmentsPage />
      </main>
    </div>
  );
}
