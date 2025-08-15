'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { mockAppointments } from '@/lib/mock-data';
import type { Appointment } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from './ui/badge';
import { format } from 'date-fns';
import { Search, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { analyzeSymptoms, AnalyzeSymptomsOutput } from '@/ai/flows/symptom-checker-flow';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

function AiSymptomChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [analysis, setAnalysis] = useState<AnalyzeSymptomsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!symptoms.trim()) {
      toast({
        title: 'Symptoms Required',
        description: 'Please describe your symptoms before analyzing.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzeSymptoms({ description: symptoms });
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Analysis Failed',
        description: 'There was an error analyzing your symptoms. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-secondary/50 border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          <Sparkles className="text-primary w-6 h-6" />
          AI Symptom Checker
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Not sure which specialist to see? Describe your symptoms to get a suggestion.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="e.g., I've had a persistent cough and chest pain for the last 3 days..."
          className="bg-input min-h-[100px] text-base"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          disabled={isLoading}
        />
        <Button onClick={handleAnalyze} className="w-full font-bold" disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Analyze Symptoms'}
        </Button>
        {analysis && (
          <div className="pt-4 space-y-2 text-sm">
            <h4 className="font-bold text-base">Suggested Specialist:</h4>
            <p className="text-primary font-semibold">{analysis.specialist}</p>
            <h4 className="font-bold text-base pt-2">Explanation:</h4>
            <p className="text-muted-foreground">{analysis.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}


export function PatientDashboard() {
  const router = useRouter();
  const { user } = useAuth();

  const appointments: Appointment[] = mockAppointments.filter(
    (apt) => apt.patientId === 'user1' // Mocking for a specific patient
  );

  const upcomingAppointments = appointments.filter(
    (apt) => new Date(apt.datetime) > new Date() && (apt.status === 'Confirmed' || apt.status === 'Pending')
  );
  
  const handleSearch = () => {
    router.push('/patient/find-doctor');
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold">Welcome back, {user?.name?.split(' ')[0]}!</h1>
          <p className="text-muted-foreground">Here's a summary of your activities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-secondary/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <Stethoscope className="text-primary w-6 h-6" />
              Find a Doctor
            </CardTitle>
            <p className="text-muted-foreground text-sm">Search for a specialist for your needs.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search by name or specialty..." className="pl-10 bg-input text-base" />
            </div>
            <Button className="w-full font-bold" onClick={handleSearch}>Search Doctors</Button>
          </CardContent>
        </Card>
        
        <AiSymptomChecker />
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Upcoming Appointments</h2>
            <p className="text-muted-foreground">
              You have {upcomingAppointments.length} appointments coming up.
            </p>
          </div>
           <Button variant="ghost" className="text-primary hover:text-primary/80" onClick={() => router.push('/patient/appointments')}>
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Card className="bg-secondary/50 border-border/50">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-muted-foreground">Doctor</TableHead>
                  <TableHead className="text-muted-foreground">Date</TableHead>
                  <TableHead className="text-muted-foreground">Time</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingAppointments.length > 0 ? (
                  upcomingAppointments.slice(0, 5).map((apt) => (
                    <TableRow key={apt.id} className="border-border/50">
                      <TableCell className="font-medium">{apt.doctorName}</TableCell>
                      <TableCell>{format(new Date(apt.datetime), 'PP')}</TableCell>
                      <TableCell>{format(new Date(apt.datetime), 'p')}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            apt.status === 'Confirmed'
                              ? 'secondary'
                              : 'default'
                          }
                          className={apt.status === 'Confirmed' ? 'bg-green-800/20 text-green-400 border-green-700/50' : 'bg-amber-800/20 text-amber-400 border-amber-700/50'}
                        >
                          {apt.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                         <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground h-24">
                      No upcoming appointments.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
