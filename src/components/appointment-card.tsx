'use client';

import type { Appointment } from '@/lib/types';
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Clock, User, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type AppointmentCardProps = {
  appointment: Appointment;
  userRole: 'Patient' | 'Doctor';
};

export function AppointmentCard({ appointment, userRole }: AppointmentCardProps) {
  const { toast } = useToast();

  const handleAction = (action: 'Accept' | 'Reject') => {
    toast({
      title: `Appointment ${action}ed`,
      description: `The appointment with ${appointment.patientName} has been ${action.toLowerCase()}ed.`,
    });
    // Here you would update the appointment status in Firestore
  };

  const statusVariant = {
    Pending: 'default',
    Confirmed: 'secondary',
    Completed: 'outline',
    Rejected: 'destructive',
  } as const;

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-headline">
              {userRole === 'Patient' ? `Appt. with ${appointment.doctorName}` : `Appt. with ${appointment.patientName}`}
            </CardTitle>
            {userRole === 'Patient' && <p className="text-sm text-muted-foreground">{appointment.doctorSpecialty}</p>}
          </div>
          <Badge variant={statusVariant[appointment.status]}>{appointment.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-primary" />
            <span>{format(appointment.datetime, 'EEEE, MMMM d, yyyy')}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-primary" />
            <span>{format(appointment.datetime, 'p')}</span>
          </div>
        </div>
        {userRole === 'Doctor' && appointment.status === 'Pending' && (
          <div className="flex gap-2 pt-2">
            <Button size="sm" onClick={() => handleAction('Accept')} className="bg-green-600 hover:bg-green-700 text-white">Accept</Button>
            <Button size="sm" variant="destructive" onClick={() => handleAction('Reject')}>
              Reject
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
