import { DoctorChatPage } from '@/components/doctor-chat-page';
import { DoctorSidebar } from '@/components/doctor-sidebar';

export default function DoctorChat() {
  return (
    <div className="flex min-h-screen bg-background">
      <DoctorSidebar />
      <main className="flex-1">
        <DoctorChatPage />
      </main>
    </div>
  );
}
