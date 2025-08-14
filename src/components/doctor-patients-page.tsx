'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockAppointments } from '@/lib/mock-data';
import type { Appointment } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { format } from 'date-fns';
import { Search, ArrowUpDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Patient = {
  id: string;
  name: string;
  lastAppointment: Date;
  totalAppointments: number;
};

export function DoctorPatientsPage() {
  const router = useRouter();
  // In a real app, this data would be fetched for the logged-in doctor
  const appointments: Appointment[] = mockAppointments.filter(
    (apt) => apt.doctorId === 'doc1'
  );

  // Deriving patient list from appointments
  const patientsData = appointments.reduce((acc, apt) => {
    let patient = acc.get(apt.patientId);
    if (!patient) {
      patient = {
        id: apt.patientId,
        name: apt.patientName,
        lastAppointment: apt.datetime,
        totalAppointments: 0,
      };
    }
    patient.totalAppointments += 1;
    if (apt.datetime > patient.lastAppointment) {
      patient.lastAppointment = apt.datetime;
    }
    acc.set(apt.patientId, patient);
    return acc;
  }, new Map<string, Patient>());

  const patients = Array.from(patientsData.values());

  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Patient;
    direction: 'ascending' | 'descending';
  } | null>({ key: 'lastAppointment', direction: 'descending' });

  const sortedPatients = [...patients].sort((a, b) => {
    if (sortConfig !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });
  
  const filteredPatients = sortedPatients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const requestSort = (key: keyof Patient) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const handleViewProfile = (patientId: string) => {
    router.push(`/doctor/patients/${patientId}`);
  }

  return (
    <div className="p-4 md:p-8 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">My Patients</h1>
        <p className="text-muted-foreground">
          View and manage your patient records.
        </p>
      </div>

      <div className="mb-6">
        <div className="relative flex-grow max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search by patient name..."
            className="pl-10 bg-input text-base h-11"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-lg border border-border/50 bg-secondary/30">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-muted/0">
              <TableHead>Patient Name</TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => requestSort('lastAppointment')}>
                  Last Appointment
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                 <Button variant="ghost" onClick={() => requestSort('totalAppointments')}>
                  Total Appointments
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <TableRow key={patient.id} className="border-border/50">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={`https://placehold.co/128x128.png`}
                          alt={patient.name}
                          data-ai-hint="patient portrait"
                        />
                        <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{patient.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {format(new Date(patient.lastAppointment), 'PP')}
                  </TableCell>
                  <TableCell>{patient.totalAppointments}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewProfile(patient.id)}
                      className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                    >
                      View Profile
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
                  No patients found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
