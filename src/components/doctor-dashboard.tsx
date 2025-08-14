'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockAppointments } from '@/lib/mock-data';
import type { Appointment } from '@/lib/types';
import { AppointmentCard } from './appointment-card';
import { CalendarCheck, CalendarClock, CalendarX2 } from 'lucide-react';

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

      <Tabs defaultValue="requests" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 md:w-[600px]">
          <TabsTrigger value="requests">
            <CalendarClock className="mr-2 h-4 w-4" />
            Appointment Requests
            {pendingAppointments.length > 0 && <span className="ml-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{pendingAppointments.length}</span>}
          </TabsTrigger>
          <TabsTrigger value="upcoming">
            <CalendarCheck className="mr-2 h-4 w-4" />
            Upcoming
          </TabsTrigger>
           <TabsTrigger value="completed">
            <CalendarX2 className="mr-2 h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="requests" className="mt-6">
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
        </TabsContent>
        <TabsContent value="upcoming" className="mt-6">
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
        </TabsContent>
         <TabsContent value="completed" className="mt-6">
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
