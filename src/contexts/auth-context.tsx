
'use client';

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
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
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const matchingDoctor = mockDoctors.find(d => d.email === firebaseUser.email);
        
        // This logic is simplistic due to mock data. 
        // A real app would fetch role from a database (e.g., Firestore).
        // For now, if not in mockDoctors, we can't be sure they are a doctor just by email.
        // The login form's role selection is the primary driver for now.
        if (matchingDoctor) {
          setUser({ ...matchingDoctor, uid: firebaseUser.uid, name: firebaseUser.displayName || matchingDoctor.name });
        } else {
            // A more robust solution is needed here for a real application.
            // We'll assume a user is a patient unless they are in the mock doctor list.
            // When they register as a doctor, we need a better way to persist that role.
            setUser({
                uid: firebaseUser.uid,
                email: firebaseUser.email!,
                name: firebaseUser.displayName || 'User',
                // This is a temporary fix. The role should be determined more reliably.
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
