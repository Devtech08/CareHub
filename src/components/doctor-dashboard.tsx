'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { mockAppointments } from '@/lib/mock-data';
import type { Appointment } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { format } from 'date-fns';
import {
  ArrowRight,
  CalendarCheck,
  CalendarClock,
  Users,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DoctorDashboard() {
  const router = useRouter();
  // In a real app, this data would be fetched for the logged-in doctor
  const appointments: Appointment[] = mockAppointments.filter(
    (apt) => apt.doctorId === 'doc1' // Mocking for a specific doctor
  );

  const pendingAppointments = appointments.filter(
    (apt) => apt.status === 'Pending'
  );

  const upcomingAppointments = appointments.filter(
    (apt) =>
      apt.status === 'Confirmed' && new Date(apt.datetime) >= new Date()
  );

  const uniquePatients = new Set(appointments.map((apt) => apt.patientId))
    .size;

  return (
    <div className="p-4 md:p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Welcome back, Dr. Williams!</h1>
        <p className="text-muted-foreground">
          Here's a summary of your activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-secondary/50 border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold">
                Appointment Requests
              </CardTitle>
              <CalendarClock className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{pendingAppointments.length}</p>
            <p className="text-xs text-muted-foreground">
              New requests waiting for your approval
            </p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold">
                Upcoming Appointments
              </CardTitle>
              <CalendarCheck className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{upcomingAppointments.length}</p>
            <p className="text-xs text-muted-foreground">
              Confirmed appointments for today
            </p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold">Total Patients</CardTitle>
              <Users className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{uniquePatients}</p>
            <p className="text-xs text-muted-foreground">
              Number of unique patients
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Today's Appointments</h2>
            <p className="text-muted-foreground">
              You have {upcomingAppointments.length} appointments scheduled for
              today.
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-primary hover:text-primary/80"
            onClick={() => router.push('/doctor/appointments')}
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Card className="bg-secondary/50 border-border/50">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-muted-foreground">
                    Patient Name
                  </TableHead>
                  <TableHead className="text-muted-foreground">Time</TableHead>
                  <TableHead className="text-muted-foreground">
                    Status
                  </TableHead>
                  <TableHead className="text-muted-foreground text-right">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingAppointments.length > 0 ? (
                  upcomingAppointments.slice(0, 5).map((apt) => (
                    <TableRow key={apt.id} className="border-border/50">
                      <TableCell className="font-medium">
                        {apt.patientName}
                      </TableCell>
                      <TableCell>
                        {format(new Date(apt.datetime), 'p')}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className="bg-green-800/20 text-green-400 border-green-700/50"
                        >
                          {apt.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-muted-foreground h-24"
                    >
                      No upcoming appointments for today.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
