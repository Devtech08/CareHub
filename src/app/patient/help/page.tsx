import { PatientHelpPage } from '@/components/patient-help-page';
import { Sidebar } from '@/components/sidebar';

export default function PatientHelp() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <PatientHelpPage />
      </main>
    </div>
  );
}
