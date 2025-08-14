'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockAppointments } from '@/lib/mock-data';
import type { Appointment } from '@/lib/types';
import { AppointmentCard } from './appointment-card';
import { CalendarCheck, CalendarClock, History } from 'lucide-react';

export function DoctorAppointmentsPage() {
  const appointments: Appointment[] = mockAppointments.filter(
    (apt) => apt.doctorId === 'doc1' // Mocking for a specific doctor
  );

  const pendingAppointments = appointments.filter(
    (apt) => apt.status === 'Pending'
  );
  const upcomingAppointments = appointments.filter(
    (apt) => apt.status === 'Confirmed' && new Date(apt.datetime) >= new Date()
  );
  const pastAppointments = appointments.filter(
    (apt) => apt.status === 'Completed' || (new Date(apt.datetime) < new Date() && apt.status !== 'Pending')
  );

  return (
    <div className="p-4 md:p-8 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">My Appointments</h1>
        <p className="text-muted-foreground">Manage patient appointments.</p>
      </div>

      <Tabs defaultValue="requests" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 sm:w-auto max-w-full sm:max-w-[600px]">
           <TabsTrigger value="requests">
            <CalendarClock className="mr-2 h-4 w-4" />
            Requests
            {pendingAppointments.length > 0 && <span className="ml-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{pendingAppointments.length}</span>}
          </TabsTrigger>
          <TabsTrigger value="upcoming">
            <CalendarCheck className="mr-2 h-4 w-4" />
            Upcoming
            {upcomingAppointments.length > 0 && <span className="ml-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{upcomingAppointments.length}</span>}
          </TabsTrigger>
           <TabsTrigger value="history">
            <History className="mr-2 h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>
         <TabsContent value="requests" className="mt-6">
           <h2 className="text-2xl font-bold font-headline mb-4">Appointment Requests</h2>
            {pendingAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {pendingAppointments.map((apt) => (
                  <AppointmentCard key={apt.id} appointment={apt} userRole="Doctor" />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">You have no pending appointment requests.</p>
            )}
        </TabsContent>
        <TabsContent value="upcoming" className="mt-6">
           <h2 className="text-2xl font-bold font-headline mb-4">Upcoming Appointments</h2>
            {upcomingAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {upcomingAppointments.map((apt) => (
                  <AppointmentCard key={apt.id} appointment={apt} userRole="Doctor" />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">You have no upcoming appointments.</p>
            )}
        </TabsContent>
         <TabsContent value="history" className="mt-6">
           <h2 className="text-2xl font-bold font-headline mb-4">Past Appointments</h2>
            {pastAppointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {pastAppointments.map((apt) => (
                  <AppointmentCard key={apt.id} appointment={apt} userRole="Doctor" />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">You have no past appointments.</p>
            )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
