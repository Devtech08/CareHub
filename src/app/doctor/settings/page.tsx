import { DoctorSettingsPage } from '@/components/doctor-settings-page';
import { DoctorSidebar } from '@/components/doctor-sidebar';

export default function DoctorSettings() {
  return (
    <div className="flex min-h-screen bg-background">
      <DoctorSidebar />
      <main className="flex-1">
        <DoctorSettingsPage />
      </main>
    </div>
  );
}
