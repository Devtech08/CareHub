'use client';

import type { Appointment } from '@/lib/types';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Clock, User, Stethoscope, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

type AppointmentCardProps = {
  appointment: Appointment;
  userRole: 'Patient' | 'Doctor';
};

export function AppointmentCard({ appointment, userRole }: AppointmentCardProps) {
  const { toast } = useToast();

  const handleAction = (action: 'Accept' | 'Reject') => {
    toast({
      title: `Appointment ${action}ed`,
      description: `The appointment with ${
        userRole === 'Doctor' ? appointment.patientName : appointment.doctorName
      } has been ${action.toLowerCase()}ed.`,
    });
    // Here you would update the appointment status in your backend
  };

  const statusVariant = {
    Pending: 'default',
    Confirmed: 'secondary',
    Completed: 'outline',
    Rejected: 'destructive',
  } as const;

  const statusColor = {
    Pending: 'bg-amber-800/20 text-amber-400 border-amber-700/50',
    Confirmed: 'bg-green-800/20 text-green-400 border-green-700/50',
    Completed: 'bg-secondary/50 border-border/50',
    Rejected: 'bg-red-800/20 text-red-400 border-red-700/50',
  }

  return (
    <Card className="shadow-md hover:shadow-xl transition-shadow flex flex-col bg-secondary/30 border-border/50">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
         <Avatar className="h-12 w-12">
            <AvatarImage src={`https://placehold.co/128x128.png`} alt={userRole === 'Doctor' ? appointment.patientName : appointment.doctorName} data-ai-hint="person portrait" />
            <AvatarFallback>{(userRole === 'Doctor' ? appointment.patientName : appointment.doctorName).charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <CardTitle className="text-base font-bold">
            {userRole === 'Patient' ? `Dr. ${appointment.doctorName}` : appointment.patientName}
          </CardTitle>
           <CardDescription className="text-sm text-muted-foreground">
            {userRole === 'Patient' ? appointment.doctorSpecialty : `Appointment Request`}
          </CardDescription>
        </div>
        <Badge variant={statusVariant[appointment.status]} className={cn('whitespace-nowrap', statusColor[appointment.status])}>{appointment.status}</Badge>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <div className="border-t border-border/50 pt-4 flex flex-col gap-3 text-sm">
            <div className="flex items-center">
                <Calendar className="mr-3 h-4 w-4 text-primary" />
                <span>{format(appointment.datetime, 'EEEE, MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center">
                <Clock className="mr-3 h-4 w-4 text-primary" />
                <span>{format(appointment.datetime, 'p')}</span>
            </div>
        </div>
      </CardContent>
      {userRole === 'Doctor' && appointment.status === 'Pending' && (
        <CardFooter className="p-4 pt-0">
          <div className="flex w-full gap-2">
            <Button size="sm" onClick={() => handleAction('Accept')} className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Check className="mr-2 h-4 w-4"/>
                Accept
            </Button>
            <Button size="sm" variant="destructive" onClick={() => handleAction('Reject')} className="w-full">
              <X className="mr-2 h-4 w-4"/>
              Reject
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
