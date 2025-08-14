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
    question: 'How do I book an appointment?',
    answer:
      "To book an appointment, go to the 'Find a Doctor' section, search for a specialist, and click the 'Book Appointment' button on their profile card. This will guide you through selecting an available date and time.",
  },
  {
    question: 'Where can I see my upcoming appointments?',
    answer:
      "You can view all your upcoming, pending, and past appointments in the 'Appointments' section. You'll see the status of each appointment and the details of the doctor.",
  },
  {
    question: 'How can I access my medical records?',
    answer:
      "Your medical records, including consultation notes and lab results from your doctors on CareHub, are available in the 'Medical Records' section. You can view and download them from there.",
  },
  {
    question: 'How do I change my password?',
    answer:
      "You can change your password in the 'Settings' section. Navigate to Settings, find the 'Security' card, and enter your current and new passwords.",
  },
];

export function PatientHelpPage() {
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
