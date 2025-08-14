import type { Doctor } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Stethoscope } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type DoctorCardProps = {
  doctor: Doctor;
};

export function DoctorCard({ doctor }: DoctorCardProps) {
    const { toast } = useToast();

    const handleBooking = () => {
        toast({
            title: 'Booking Feature',
            description: 'This would open a modal or navigate to a booking page.',
        });
    }

  return (
    <Card className="flex flex-col overflow-hidden shadow-md transition-transform hover:scale-105 hover:shadow-xl">
      <CardHeader className="flex flex-row items-center gap-4 bg-primary/5 p-4">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src={`https://placehold.co/128x128.png`} alt={doctor.name} data-ai-hint="doctor portrait" />
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
        <Button className="w-full" onClick={handleBooking}>Book Appointment</Button>
      </CardFooter>
    </Card>
  );
}
