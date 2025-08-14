import DoctorDashboard from "@/components/doctor-dashboard";
import { DoctorSidebar } from "@/components/doctor-sidebar";

export default function DoctorDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DoctorSidebar />
      <main className="flex-1">
        <DoctorDashboard />
      </main>
    </div>
  )
}
