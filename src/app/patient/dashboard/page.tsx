import { PatientDashboard } from '@/components/patient-dashboard';
import { Sidebar } from '@/components/sidebar';

export default function PatientDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <PatientDashboard />
      </main>
    </div>
  );
}
