import { FindDoctor } from '@/components/find-doctor';
import { Sidebar } from '@/components/sidebar';

export default function FindDoctorPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <FindDoctor />
      </main>
    </div>
  );
}
