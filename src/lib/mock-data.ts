import type { Doctor, Appointment } from './types';

export const mockDoctors: Doctor[] = [
  {
    uid: 'doc1',
    name: 'Dr. Alice Williams',
    email: 'alice@clinic.com',
    role: 'Doctor',
    specialty: 'Cardiology',
    availability: [
      { date: '2024-08-15', slots: ['09:00', '11:00'] },
      { date: '2024-08-16', slots: ['14:00'] },
    ],
  },
  {
    uid: 'doc2',
    name: 'Dr. Bob Brown',
    email: 'bob@clinic.com',
    role: 'Doctor',
    specialty: 'Dermatology',
    availability: [
      { date: '2024-08-15', slots: ['10:00', '12:00', '15:00'] },
      { date: '2024-08-17', slots: ['09:30', '11:30'] },
    ],
  },
  {
    uid: 'doc3',
    name: 'Dr. Charlie Davis',
    email: 'charlie@clinic.com',
    role: 'Doctor',
    specialty: 'Pediatrics',
    availability: [
      { date: '2024-08-16', slots: ['08:00', '09:00', '10:00'] },
      { date: '2024-08-18', slots: ['13:00', '14:00', '15:00'] },
    ],
  },
   {
    uid: 'doc4',
    name: 'Dr. Diana Miller',
    email: 'diana@clinic.com',
    role: 'Doctor',
    specialty: 'Neurology',
    availability: [
      { date: '2024-08-19', slots: ['10:30', '12:30'] },
      { date: '2024-08-20', slots: ['14:30', '16:30'] },
    ],
  },
];

export const mockAppointments: Appointment[] = [
  {
    id: 'apt1',
    patientId: 'user1',
    patientName: 'John Doe',
    doctorId: 'doc1',
    doctorName: 'Dr. Alice Williams',
    doctorSpecialty: 'Cardiology',
    datetime: new Date('2024-08-15T09:00:00'),
    status: 'Confirmed',
  },
  {
    id: 'apt2',
    patientId: 'user1',
    patientName: 'John Doe',
    doctorId: 'doc2',
    doctorName: 'Dr. Bob Brown',
    doctorSpecialty: 'Dermatology',
    datetime: new Date('2024-08-17T11:30:00'),
    status: 'Pending',
  },
  {
    id: 'apt3',
    patientId: 'user2',
    patientName: 'Jane Smith',
    doctorId: 'doc1',
    doctorName: 'Dr. Alice Williams',
    doctorSpecialty: 'Cardiology',
    datetime: new Date('2024-08-16T14:00:00'),
    status: 'Pending',
  },
  {
    id: 'apt4',
    patientId: 'user1',
    patientName: 'John Doe',
    doctorId: 'doc3',
    doctorName: 'Dr. Charlie Davis',
    doctorSpecialty: 'Pediatrics',
    datetime: new Date('2024-07-20T10:00:00'),
    status: 'Completed',
  },
];
