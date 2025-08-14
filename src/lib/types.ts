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
