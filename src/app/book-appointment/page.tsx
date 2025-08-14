import { BookAppointmentPage } from '@/components/book-appointment-page';

export default function PublicBookAppointmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto">
        <BookAppointmentPage />
      </main>
    </div>
  );
}
