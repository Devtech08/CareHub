import { ChatPage } from '@/components/chat-page';
import { Sidebar } from '@/components/sidebar';

export default function PatientChatPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1">
        <ChatPage />
      </main>
    </div>
  );
}
