'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockAppointments } from '@/lib/mock-data';
import type { Appointment } from '@/lib/types';
import { AppointmentCard } from './appointment-card';
import { CalendarCheck, CalendarClock, History } from 'lucide-react';

export function AppointmentsPage() {
  // In a real app, this data would be fetched for the logged-in patient
  const appointments: Appointment[] = mockAppointments.filter(
    (apt) => apt.patientId === 'user1' // Mocking for a specific patient
  );

  const upcomingAppointments = appointments.filter(
    (apt) => apt.status === 'Confirmed' && new Date(apt.datetime) >= new Date()
  );
  const pendingAppointments = appointments.filter(
    (apt) => apt.status === 'Pending'
  );
  const pastAppointments = appointments.filter(
    (apt) => apt.status === 'Completed' || new Date(apt.datetime) < new Date()
  );

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">My Appointments</h1>
        <p className="text-muted-foreground">View and manage your appointments.</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 md:w-[600px]">
          <TabsTrigger value="upcoming">
            <CalendarCheck className="mr-2 h-4 w-4" />
            Upcoming
            {upcomingAppointments.length > 0 && <span className="ml-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{upcomingAppointments.length}</span>}
          </TabsTrigger>
          <TabsTrigger value="pending">
            <CalendarClock className="mr-2 h-4 w-4" />
            Pending Requests
             {pendingAppointments.length > 0 && <span className="ml-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{pendingAppointments.length}</span>}
          </TabsTrigger>
           <TabsTrigger value="history">
            <History className="mr-2 h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="mt-6">
           <h2 className="text-2xl font-bold font-headline mb-4">Upcoming Appointments</h2>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((apt) => (
                  <AppointmentCard key={apt.id} appointment={apt} userRole="Patient" />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">You have no upcoming appointments.</p>
            )}
        </TabsContent>
        <TabsContent value="pending" className="mt-6">
           <h2 className="text-2xl font-bold font-headline mb-4">Pending Requests</h2>
            {pendingAppointments.length > 0 ? (
              <div className="space-y-4">
                {pendingAppointments.map((apt) => (
                  <AppointmentCard key={apt.id} appointment={apt} userRole="Patient" />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">You have no pending appointment requests.</p>
            )}
        </TabsContent>
         <TabsContent value="history" className="mt-6">
           <h2 className="text-2xl font-bold font-headline mb-4">Past Appointments</h2>
            {pastAppointments.length > 0 ? (
              <div className="space-y-4">
                {pastAppointments.map((apt) => (
                  <AppointmentCard key={apt.id} appointment={apt} userRole="Patient" />
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
