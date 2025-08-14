export type User = {
  uid: string;
  name: string;
  email: string;
  role: 'Patient' | 'Doctor';
  profile?: {
    age?: number;
    phone?: string;
    [key: string]: any;
  };
};

export type Doctor = User & {
  role: 'Doctor';
  specialty: string;
  availability: {
    date: string;
    slots: string[];
  }[];
};

export type Appointment = {
  id: string;
  patientId: string;
  patientName: string;

  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;

  datetime: Date;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Rejected';
};

export type MedicalRecord = {
  id: string;
  patientId: string;
  date: Date;
  doctorName: string;
  type: 'Consultation Note' | 'Lab Result' | 'Prescription' | 'Imaging Report';
  title: string;
  summary: string;
  fileUrl?: string; // Link to a PDF or file
};
