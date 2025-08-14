'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import type { Doctor } from '@/lib/types';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';
import { useState } from 'react';

const formSchema = z.object({
  date: z.date({ required_error: 'Please select a date.' }),
  time: z.string({ required_error: 'Please select a time slot.' }),
});

type BookingFormProps = {
  doctor: Doctor;
  onBookingSuccess: () => void;
};

export function BookingForm({ doctor, onBookingSuccess }: BookingFormProps) {
  const { toast } = useToast();
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    form.setValue('date', date);
    form.setValue('time', ''); // Reset time when date changes
    const dateString = format(date, 'yyyy-MM-dd');
    const availabilityForDate = doctor.availability.find(a => a.date === dateString);
    setAvailableSlots(availabilityForDate ? availabilityForDate.slots : []);
  };
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Booking submitted for:', values);
    toast({
      title: 'Appointment Booked!',
      description: `Your appointment with ${doctor.name} has been successfully requested.`,
    });
    onBookingSuccess();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={handleDateSelect}
                    disabled={(date) =>
                        date < new Date() || !doctor.availability.some(a => a.date === format(date, 'yyyy-MM-dd'))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={availableSlots.length === 0}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={availableSlots.length > 0 ? "Select an available time slot" : "Select a date first"} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {availableSlots.map(slot => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Confirm Booking
        </Button>
      </form>
    </Form>
  );
}
