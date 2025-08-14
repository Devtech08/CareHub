
'use client';

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { mockDoctors } from '@/lib/mock-data';
import type { User as AppUser, Doctor } from '@/lib/types';


interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
      if (firebaseUser) {
        // In a real app, you'd fetch user role and other profile info from Firestore
        // For this mock, we'll check if the email belongs to a predefined doctor
        const matchingDoctor = mockDoctors.find(d => d.email === firebaseUser.email);
        if (matchingDoctor) {
          setUser(matchingDoctor as Doctor);
        } else {
            // Default to a patient role
            setUser({
                uid: firebaseUser.uid,
                email: firebaseUser.email!,
                name: firebaseUser.displayName || 'Patient User',
                role: 'Patient',
            });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
