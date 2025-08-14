'use server';
/**
 * @fileOverview An AI agent for checking symptoms.
 *
 * - analyzeSymptoms - A function that suggests a medical specialty based on symptoms.
 * - AnalyzeSymptomsInput - The input type for the analyzeSymptoms function.
 * - AnalyzeSymptomsOutput - The return type for the analyzeSymptoms function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AnalyzeSymptomsInputSchema = z.object({
  description: z.string().describe('The description of the symptoms.'),
});
export type AnalyzeSymptomsInput = z.infer<typeof AnalyzeSymptomsInputSchema>;

const AnalyzeSymptomsOutputSchema = z.object({
  specialist: z
    .string()
    .describe(
      'The suggested medical specialist to consult (e.g., Cardiologist, Dermatologist, Neurologist).'
    ),
  explanation: z
    .string()
    .describe('A brief explanation for the suggestion.'),
});
export type AnalyzeSymptomsOutput = z.infer<typeof AnalyzeSymptomsOutputSchema>;

export async function analyzeSymptoms(
  input: AnalyzeSymptomsInput
): Promise<AnalyzeSymptomsOutput> {
  return symptomCheckerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'symptomCheckerPrompt',
  input: { schema: AnalyzeSymptomsInputSchema },
  output: { schema: AnalyzeSymptomsOutputSchema },
  prompt: `You are a helpful medical assistant. Based on the user's description of their symptoms, suggest an appropriate medical specialist they should consider seeing. Provide a brief, one-sentence explanation for your suggestion. Do not provide any medical advice or diagnosis.

Symptoms: {{{description}}}`,
});

const symptomCheckerFlow = ai.defineFlow(
  {
    name: 'symptomCheckerFlow',
    inputSchema: AnalyzeSymptomsInputSchema,
    outputSchema: AnalyzeSymptomsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
