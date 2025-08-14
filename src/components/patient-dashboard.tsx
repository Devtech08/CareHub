'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockDoctors, mockAppointments } from '@/lib/mock-data';
import type { Appointment, Doctor } from '@/lib/types';
import { DoctorCard } from './doctor-card';
import { AppointmentCard } from './appointment-card';
import { Calendar, Stethoscope } from 'lucide-react';

export default function PatientDashboard() {
  // In a real app, this data would be fetched for the logged-in user
  const doctors: Doctor[] = mockDoctors;
  const appointments: Appointment[] = mockAppointments.filter(
    (apt) => apt.patientId === 'user1' // Mocking for a specific patient
  );

  const upcomingAppointments = appointments.filter(
    (apt) => apt.datetime >= new Date() && apt.status !== 'Completed'
  );
  const pastAppointments = appointments.filter(
    (apt) => apt.datetime < new Date() || apt.status === 'Completed'
  );

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Patient Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, John Doe!</p> {/* This would be dynamic */}
      </div>

      <Tabs defaultValue="doctors" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="doctors">
            <Stethoscope className="mr-2 h-4 w-4" />
            Find a Doctor
          </TabsTrigger>
          <TabsTrigger value="appointments">
            <Calendar className="mr-2 h-4 w-4" />
            My Appointments
          </TabsTrigger>
        </TabsList>
        <TabsContent value="doctors" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.uid} doctor={doctor} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="appointments" className="mt-6 space-y-8">
          <div>
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
          </div>
          <div>
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
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
