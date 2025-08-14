'use client';

import { useState } from 'react';
import { mockDoctors } from '@/lib/mock-data';
import type { Doctor } from '@/lib/types';
import { DoctorCard } from './doctor-card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, ListFilter, Calendar as CalendarIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export function FindDoctor() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('all');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const specialties = [
    'All Specialties',
    ...Array.from(new Set(mockDoctors.map((doc) => doc.specialty))),
  ];

  const filteredDoctors = mockDoctors.filter((doctor) => {
    const matchesSearchTerm =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty =
      specialty === 'all' || doctor.specialty.toLowerCase().replace(' ', '-') === specialty;

    const matchesDate = selectedDate
      ? doctor.availability.some(
          (avail) => avail.date === format(selectedDate, 'yyyy-MM-dd') && avail.slots.length > 0
        )
      : true; // If no date is selected, show all doctors

    return matchesSearchTerm && matchesSpecialty && matchesDate;
  });

  return (
    <div className="p-4 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Find a Doctor</h1>
        <p className="text-muted-foreground">
          Search for a specialist and book an appointment.
        </p>
      </div>

      <div className="p-6 bg-secondary/30 border border-border/50 rounded-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative flex-grow md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by name or specialty..."
              className="pl-10 bg-input text-base h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger className="w-full h-12 text-base">
              <ListFilter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map((s) => (
                <SelectItem key={s} value={s.toLowerCase().replace(' ', '-')}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant={'outline'}
                    className={cn(
                        'w-full md:col-span-2 justify-start text-left font-normal h-12 text-base',
                        !selectedDate && 'text-muted-foreground'
                    )}
                    >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, 'PPP') : <span>Filter by availability date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    />
                </PopoverContent>
            </Popover>
            <Button onClick={() => setSelectedDate(undefined)} variant="ghost" className="h-12 text-base">Clear Date</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.uid} doctor={doctor} />
          ))
        ) : (
          <div className="text-center col-span-full py-12">
            <h3 className="text-lg font-semibold">No Doctors Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
