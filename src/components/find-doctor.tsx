'use client';

import { useState } from 'react';
import { mockDoctors } from '@/lib/mock-data';
import type { Doctor } from '@/lib/types';
import { DoctorCard } from './doctor-card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search, ListFilter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function FindDoctor() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('all');

  const specialties = [
    'All Specialties',
    ...Array.from(new Set(mockDoctors.map((doc) => doc.specialty))),
  ];

  const filteredDoctors = mockDoctors.filter((doctor) => {
    const matchesSearchTerm =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      specialty === 'all' || doctor.specialty === specialty;
    return matchesSearchTerm && matchesSpecialty;
  });

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Find a Doctor</h1>
        <p className="text-muted-foreground">
          Search for a specialist to book an appointment.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by name or specialty..."
            className="pl-10 bg-input text-base h-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={specialty} onValueChange={setSpecialty}>
          <SelectTrigger className="w-full md:w-[280px] h-12">
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
