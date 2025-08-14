import { MedicalRecordsPage } from '@/components/medical-records-page';
import { Sidebar } from '@/components/sidebar';

export default function PatientMedicalRecordsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <MedicalRecordsPage />
      </main>
    </div>
  );
}
