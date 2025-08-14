'use client';

import {
  mockAppointments,
  mockMedicalRecords,
} from '@/lib/mock-data';
import type { Appointment, MedicalRecord } from '@/lib/types';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from './ui/badge';
import { format } from 'date-fns';
import {
  User,
  Cake,
  Mail,
  Phone,
  Calendar,
  FileText,
  MessageSquare,
  ArrowLeft,
  Download,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

type PatientProfilePageProps = {
  patientId: string;
};

// Mock patient data - in a real app, this would be a single fetch
const MOCK_PATIENTS = {
  user1: { name: 'John Doe', age: 34, email: 'john.d@example.com', phone: '555-0101' },
  user2: { name: 'Jane Smith', age: 45, email: 'jane.s@example.com', phone: '555-0102' },
  user3: { name: 'Peter Jones', age: 28, email: 'peter.j@example.com', phone: '555-0103' },
  user4: { name: 'Mary Poppins', age: 52, email: 'mary.p@example.com', phone: '555-0104' },
};


export function PatientProfilePage({ patientId }: PatientProfilePageProps) {
  const router = useRouter();

  // @ts-ignore
  const patient = MOCK_PATIENTS[patientId];
  const appointments: Appointment[] = mockAppointments.filter(
    (apt) => apt.patientId === patientId && apt.doctorId === 'doc1'
  );
  const records: MedicalRecord[] = mockMedicalRecords.filter(
    (rec) => rec.patientId === patientId
  );

  if (!patient) {
    return (
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Patient not found</h1>
        <Button onClick={() => router.back()} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }

  const statusColor = {
    Pending: 'bg-amber-800/20 text-amber-400 border-amber-700/50',
    Confirmed: 'bg-green-800/20 text-green-400 border-green-700/50',
    Completed: 'bg-secondary/50 border-border/50',
    Rejected: 'bg-red-800/20 text-red-400 border-red-700/50',
  }

  return (
    <div className="p-4 md:p-8 w-full space-y-8">
      <div className="flex items-center gap-4">
        <Button onClick={() => router.back()} variant="outline" size="icon">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
            <h1 className="text-3xl font-bold font-headline">Patient Profile</h1>
            <p className="text-muted-foreground">Detailed view of patient information and history.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <Card className="bg-secondary/30 border-border/50">
            <CardHeader className="items-center text-center">
              <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                <AvatarImage src={`https://placehold.co/128x128.png`} alt={patient.name} data-ai-hint="patient portrait" />
                <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl">{patient.name}</CardTitle>
              <CardDescription>Patient ID: {patientId}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                <div className="flex items-center">
                    <Cake className="mr-3 h-5 w-5 text-primary" />
                    <span>{patient.age} years old</span>
                </div>
                <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-primary" />
                    <a href={`mailto:${patient.email}`} className="hover:underline">{patient.email}</a>
                </div>
                 <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-primary" />
                    <span>{patient.phone}</span>
                </div>
            </CardContent>
          </Card>
           <Button className="w-full" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Send Message
            </Button>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-secondary/30 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Appointment History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((apt) => (
                    <TableRow key={apt.id} className="border-border/50">
                      <TableCell>{format(apt.datetime, 'PP')}</TableCell>
                      <TableCell>{format(apt.datetime, 'p')}</TableCell>
                      <TableCell>
                        <Badge className={statusColor[apt.status]}>{apt.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Medical Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {records.map((record) => (
                  <div key={record.id} className="flex justify-between items-center p-3 bg-muted/30 rounded-md">
                    <div>
                        <p className="font-semibold">{record.title}</p>
                        <p className="text-sm text-muted-foreground">{record.type} - {format(record.date, 'PP')}</p>
                    </div>
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
