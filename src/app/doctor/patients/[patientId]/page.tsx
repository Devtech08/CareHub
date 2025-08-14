import { PatientProfilePage } from '@/components/patient-profile-page';
import { DoctorSidebar } from '@/components/doctor-sidebar';

export default function PatientProfile({
  params,
}: {
  params: { patientId: string };
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <DoctorSidebar />
      <main className="flex-1">
        <PatientProfilePage patientId={params.patientId} />
      </main>
    </div>
  );
}
