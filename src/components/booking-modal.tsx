'use client';

import { useState } from 'react';
import type { Doctor } from '@/lib/types';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from './ui/dialog';
import { BookingForm } from './booking-form';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';

type BookingModalProps = {
  doctor: Doctor;
};

export function BookingModal({ doctor }: BookingModalProps) {
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleBookingSuccess = () => {
    setIsOpen(false);
  };
  
  const handleLoginRedirect = () => {
    setIsOpen(false);
    router.push('/login');
  };
  
  const handleRegisterRedirect = () => {
    setIsOpen(false);
    router.push('/register');
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {!loading && (
            user ? (
            <>
                <DialogHeader>
                <DialogTitle>Book Appointment with {doctor.name}</DialogTitle>
                <DialogDescription>
                    Select a date and time to schedule your appointment.
                </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                <BookingForm doctor={doctor} onBookingSuccess={handleBookingSuccess} />
                </div>
            </>
            ) : (
            <>
                <DialogHeader>
                <DialogTitle className="flex items-center gap-2"><LogIn /> Please Log In</DialogTitle>
                <DialogDescription>
                    You need to be logged in to book an appointment. Please log in or create an account to continue.
                </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start gap-2 pt-4">
                <Button onClick={handleLoginRedirect} className="w-full sm:w-auto">Login</Button>
                <Button onClick={handleRegisterRedirect} variant="secondary" className="w-full sm:w-auto">Register</Button>
                </DialogFooter>
            </>
            )
        )}
      </DialogContent>
    </Dialog>
  );
}
