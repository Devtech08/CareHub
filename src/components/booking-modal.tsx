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
} from './ui/dialog';
import { BookingForm } from './booking-form';

type BookingModalProps = {
  doctor: Doctor;
};

export function BookingModal({ doctor }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleBookingSuccess = () => {
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Appointment with {doctor.name}</DialogTitle>
          <DialogDescription>
            Select a date and time to schedule your appointment.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <BookingForm doctor={doctor} onBookingSuccess={handleBookingSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
