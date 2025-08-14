import { PatientSettingsPage } from '@/components/patient-settings-page';
import { Sidebar } from '@/components/sidebar';

export default function PatientSettings() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <PatientSettingsPage />
      </main>
    </div>
  );
}
