'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LifeBuoy } from 'lucide-react';

const faqs = [
  {
    question: 'How do I manage my appointment schedule?',
    answer:
      "You can manage your appointments from the 'Appointments' section in your dashboard. You can view pending requests, confirm upcoming appointments, and see your history. To set your availability, go to the 'Settings' page.",
  },
  {
    question: 'How can I view a patient\'s medical history?',
    answer:
      "Navigate to the 'Patients' section, find the patient you're looking for, and click 'View Profile'. This will take you to their detailed profile page, which includes their appointment history and medical records.",
  },
  {
    question: 'Is the chat feature secure?',
    answer:
      'Yes, all communications through the CareHub chat feature are end-to-end encrypted to ensure patient privacy and HIPAA compliance.',
  },
  {
    question: 'How do I update my profile information?',
    answer:
      "You can update your name, specialty, and other professional details in the 'Settings' section. Navigate to Settings and find the 'Profile Information' card.",
  },
];

export function DoctorHelpPage() {
  return (
    <div className="p-4 md:p-8 w-full space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
          <LifeBuoy className="w-8 h-8" />
          Help & Support
        </h1>
        <p className="text-muted-foreground">
          Find answers to common questions or contact our support team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold font-headline mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border/50 bg-secondary/30 rounded-lg px-6"
              >
                <AccordionTrigger className="hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <h2 className="text-2xl font-bold font-headline mb-4">
            Contact Support
          </h2>
          <Card className="bg-secondary/30 border-border/50">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Your Email Address" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Describe your issue..." />
              <Button className="w-full">Submit</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
