import type { Doctor } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Stethoscope } from 'lucide-react';
import { BookingModal } from './booking-modal';

type DoctorCardProps = {
  doctor: Doctor;
};

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-md transition-transform hover:scale-105 hover:shadow-xl">
      <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 p-4">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src={doctor.image} alt={doctor.name} data-ai-hint="doctor portrait" />
          <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-bold font-headline">{doctor.name}</h3>
          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex items-center text-sm text-muted-foreground">
            <Stethoscope className="mr-2 h-4 w-4" />
            <p>Available for consultation.</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <BookingModal doctor={doctor} />
      </CardFooter>
    </Card>
  );
}
