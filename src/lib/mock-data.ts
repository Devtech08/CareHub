import type { Doctor, Appointment, MedicalRecord, ChatMessage } from './types';

export const mockDoctors: Doctor[] = [
  {
    uid: 'doc1',
    name: 'Dr. Alice Williams',
    email: 'alice@clinic.com',
    role: 'Doctor',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1770&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da60710?q=80&w=1770&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1537368910025-700350796527?q=80&w=1770&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1582750421873-9a3c9405d454?q=80&w=1770&auto=format&fit=crop',
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
    doctorName: 'Alice Williams',
    doctorSpecialty: 'Cardiology',
    datetime: new Date('2024-09-15T09:00:00'),
    status: 'Confirmed',
  },
  {
    id: 'apt2',
    patientId: 'user1',
    patientName: 'John Doe',
    doctorId: 'doc2',
    doctorName: 'Bob Brown',
    doctorSpecialty: 'Dermatology',
    datetime: new Date('2024-09-17T11:30:00'),
    status: 'Pending',
  },
  {
    id: 'apt3',
    patientId: 'user2',
    patientName: 'Jane Smith',
    doctorId: 'doc1',
    doctorName: 'Alice Williams',
    doctorSpecialty: 'Cardiology',
    datetime: new Date('2024-09-16T14:00:00'),
    status: 'Pending',
  },
  {
    id: 'apt4',
    patientId: 'user1',
    patientName: 'John Doe',
    doctorId: 'doc3',
    doctorName: 'Charlie Davis',
    doctorSpecialty: 'Pediatrics',
    datetime: new Date('2024-07-20T10:00:00'),
    status: 'Completed',
  },
    {
    id: 'apt5',
    patientId: 'user3',
    patientName: 'Peter Jones',
    doctorId: 'doc1',
    doctorName: 'Alice Williams',
    doctorSpecialty: 'Cardiology',
    datetime: new Date('2024-09-22T11:00:00'),
    status: 'Confirmed',
  },
   {
    id: 'apt6',
    patientId: 'user4',
    patientName: 'Mary Poppins',
    doctorId: 'doc1',
    doctorName: 'Alice Williams',
    doctorSpecialty: 'Cardiology',
    datetime: new Date('2024-08-01T10:00:00'),
    status: 'Rejected',
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

export const articles = [
  {
    title: 'The Benefits of a Balanced Diet',
    description: 'Learn how a balanced diet can improve your overall health and well-being.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'healthy food',
  },
  {
    title: 'Tips for a Better Night\'s Sleep',
    description: 'Discover simple tips and tricks to help you get a more restful night\'s sleep.',
    image: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'person sleeping',
  },
  {
    title: 'The Importance of Regular Exercise',
    description: 'Find out why regular physical activity is crucial for maintaining a healthy lifestyle.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'person jogging',
  },
  {
    title: "Understanding and Managing Stress",
    description: "Explore effective techniques for managing stress in your daily life.",
    image: "https://images.unsplash.com/photo-1598704259954-47202b885543?q=80&w=1770&auto=format&fit=crop",
    aiHint: "person meditating"
  },
  {
    title: "Hydration: Why It's Key to Your Health",
    description: "Learn about the importance of staying hydrated and how much water you really need.",
    image: "https://images.unsplash.com/photo-1563203369-694a7c7293ce?q=80&w=1770&auto=format&fit=crop",
    aiHint: "glass of water"
  },
  {
    title: "The Role of Gut Health in Overall Wellness",
    description: "An introduction to the gut microbiome and its impact on your health.",
    image: "https://images.unsplash.com/photo-1599941913901-38335293d7c4?q=80&w=1770&auto=format&fit=crop",
    aiHint: "probiotic food"
  }
];
