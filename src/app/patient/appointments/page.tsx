import { AppointmentsPage } from '@/components/appointments-page';
import { Sidebar } from '@/components/sidebar';

export default function PatientAppointmentsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <AppointmentsPage />
      </main>
    </div>
  );
}
