
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
        // In a real app, the user's role would be fetched from a database (e.g., Firestore)
        // using the firebaseUser.uid. The role would be stored upon registration.
        // For this mockup, we'll use a combination of mock data and session storage as a fallback.
        const matchingDoctor = mockDoctors.find(d => d.email === firebaseUser.email);
        
        // Check if a role was stored during login/register
        const sessionRole = sessionStorage.getItem('userRole');

        if (matchingDoctor && (sessionRole === 'Doctor' || !sessionRole)) {
          setUser({ ...matchingDoctor, uid: firebaseUser.uid, name: firebaseUser.displayName || matchingDoctor.name });
        } else {
            // Default to 'Patient' role, but respect the role selected during login if available.
            setUser({
                uid: firebaseUser.uid,
                email: firebaseUser.email!,
                name: firebaseUser.displayName || 'User',
                role: (sessionRole as 'Patient' | 'Doctor') || 'Patient',
            });
        }
      } else {
        setUser(null);
        sessionStorage.removeItem('userRole');
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
