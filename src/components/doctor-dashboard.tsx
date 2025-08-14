'use client';

import { mockAppointments } from '@/lib/mock-data';
import type { Appointment } from '@/lib/types';
import { AppointmentCard } from './appointment-card';

export default function DoctorDashboard() {
  // In a real app, this data would be fetched for the logged-in doctor
  const appointments: Appointment[] = mockAppointments.filter(
    (apt) => apt.doctorId === 'doc1' // Mocking for a specific doctor
  );

  const pendingAppointments = appointments.filter(
    (apt) => apt.status === 'Pending'
  );
  const confirmedAppointments = appointments.filter(
    (apt) => apt.status === 'Confirmed'
  );
  const completedAppointments = appointments.filter(
    (apt) => apt.status === 'Completed'
  );

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Doctor Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Dr. Alice Williams!</p> {/* This would be dynamic */}
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">Appointment Requests</h2>
          {pendingAppointments.length > 0 ? (
            <div className="space-y-4">
              {pendingAppointments.map((apt) => (
                <AppointmentCard key={apt.id} appointment={apt} userRole="Doctor" />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">You have no new appointment requests.</p>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">Upcoming Appointments</h2>
          {confirmedAppointments.length > 0 ? (
            <div className="space-y-4">
              {confirmedAppointments.map((apt) => (
                <AppointmentCard key={apt.id} appointment={apt} userRole="Doctor" />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">You have no upcoming appointments.</p>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold font-headline mb-4">Completed Appointments</h2>
          {completedAppointments.length > 0 ? (
            <div className="space-y-4">
              {completedAppointments.map((apt) => (
                <AppointmentCard key={apt.id} appointment={apt} userRole="Doctor" />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">You have no completed appointments.</p>
          )}
        </section>
      </div>
    </div>
  );
}
