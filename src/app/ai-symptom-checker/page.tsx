'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { analyzeSymptoms, AnalyzeSymptomsOutput } from '@/ai/flows/symptom-checker-flow';
import { Sparkles } from 'lucide-react';

export default function AiSymptomCheckerPage() {
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
    <div className="container mx-auto p-4 md:p-8 flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <Card className="w-full max-w-2xl bg-secondary/30 border-border/50 shadow-xl">
        <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                <Sparkles className="text-primary w-8 h-8" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline">AI Symptom Checker</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
            Describe your symptoms to get a suggestion for a medical specialist.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-8">
            <Textarea
            placeholder="e.g., I've had a persistent cough and chest pain for the last 3 days..."
            className="bg-input min-h-[120px] text-base"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            disabled={isLoading}
            />
            <Button onClick={handleAnalyze} className="w-full font-bold py-6 text-lg" disabled={isLoading}>
            {isLoading ? 'Analyzing...' : 'Analyze Symptoms'}
            </Button>
            {analysis && (
            <div className="pt-6 space-y-4 text-center">
                <div className="p-6 rounded-lg bg-background">
                    <h4 className="font-bold text-base text-muted-foreground">SUGGESTED SPECIALIST</h4>
                    <p className="text-primary font-bold text-2xl py-2">{analysis.specialist}</p>
                    <p className="text-muted-foreground text-sm">{analysis.explanation}</p>
                </div>
            </div>
            )}
        </CardContent>
        </Card>
    </div>
  );
}
