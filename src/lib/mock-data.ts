import type { Doctor, Appointment, MedicalRecord, ChatMessage } from './types';

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

export const mockMedicalRecords: MedicalRecord[] = [
  {
    id: 'rec1',
    patientId: 'user1',
    date: new Date('2024-07-20T10:30:00'),
    doctorName: 'Dr. Charlie Davis',
    type: 'Consultation Note',
    title: 'Follow-up on Seasonal Allergies',
    summary: 'Patient reports improvement in symptoms with the prescribed antihistamines. Advised to continue medication and schedule a follow-up if symptoms worsen. No signs of secondary infection.',
    fileUrl: '/mock-records/rec1.pdf',
  },
  {
    id: 'rec2',
    patientId: 'user1',
    date: new Date('2024-05-12T09:15:00'),
    doctorName: 'Dr. Alice Williams',
    type: 'Lab Result',
    title: 'Annual Blood Panel Results',
    summary: 'All markers within normal range. Cholesterol levels are good. Vitamin D slightly low, recommend supplement and sun exposure. Full report attached.',
    fileUrl: '/mock-records/rec2.pdf',
  },
    {
    id: 'rec3',
    patientId: 'user1',
    date: new Date('2024-05-12T09:00:00'),
    doctorName: 'Dr. Alice Williams',
    type: 'Prescription',
    title: 'Prescription for Vitamin D Supplement',
    summary: 'Prescribed Vitamin D3 2000 IU to be taken daily with a meal.',
    fileUrl: '/mock-records/rec3.pdf',
  },
];

export const mockMessages: ChatMessage[] = [
  {
    id: 'msg1',
    senderId: 'user1',
    receiverId: 'doc1',
    text: 'Good morning, Dr. Williams. I had a quick question about the new medication.',
    timestamp: new Date('2024-08-14T09:30:00'),
  },
  {
    id: 'msg2',
    senderId: 'doc1',
    receiverId: 'user1',
    text: 'Good morning! Of course, what is your question?',
    timestamp: new Date('2024-08-14T09:31:00'),
  },
  {
    id: 'msg3',
    senderId: 'user1',
    receiverId: 'doc1',
    text: 'Should I take it with food or on an empty stomach?',
    timestamp: new Date('2024-08-14T09:32:00'),
  },
  {
    id: 'msg4',
    senderId: 'doc1',
    receiverId: 'user1',
    text: 'It is best to take it with food. Let me know if you have any other questions!',
    timestamp: new Date('2024-08-14T09:35:00'),
  },
    {
    id: 'msg5',
    senderId: 'user1',
    receiverId: 'doc2',
    text: 'Hello Dr. Brown, I have a follow up question from our last appointment.',
    timestamp: new Date(),
  },
];
