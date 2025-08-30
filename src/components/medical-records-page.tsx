'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { mockMedicalRecords } from '@/lib/mock-data';
import type { MedicalRecord } from '@/lib/types';
import { format } from 'date-fns';
import { Download, FileText, Calendar, User, Stethoscope } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function MedicalRecordsPage() {
  const { toast } = useToast();
  // In a real app, this data would be fetched for the logged-in patient
  const records: MedicalRecord[] = mockMedicalRecords.filter(
    (rec) => rec.patientId === 'user1'
  );

  const handleDownload = (record: MedicalRecord) => {
    toast({
      title: 'Downloading Record',
      description: `Downloading "${record.title}". This is a mock action.`,
    });
    // In a real app, this would trigger a file download from record.fileUrl
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
          <FileText className="w-8 h-8" />
          Medical Records
        </h1>
        <p className="text-muted-foreground">
          Access your consultation notes, lab results, and prescriptions.
        </p>
      </div>

      {records.length > 0 ? (
        <Accordion type="single" collapsible className="w-full space-y-4">
          {records.map((record) => (
            <AccordionItem
              key={record.id}
              value={record.id}
              className="border-border/50 bg-secondary/30 rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex justify-between items-center w-full">
                  <div className="text-left">
                    <p className="font-bold text-base">{record.title}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{format(record.date, 'MMMM d, yyyy')}</span>
                      <span className="mx-2">|</span>
                      <Stethoscope className="mr-2 h-4 w-4" />
                      <span>{record.doctorName}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-md">
                    {record.type}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <p className="text-muted-foreground mb-4">{record.summary}</p>
                <Button onClick={() => handleDownload(record)}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center text-muted-foreground py-16 border-2 border-dashed border-border/50 rounded-lg">
          <FileText className="mx-auto h-12 w-12" />
          <h3 className="mt-4 text-lg font-semibold">No Medical Records Found</h3>
          <p>Your medical records from your doctors will appear here.</p>
        </div>
      )}
    </div>
  );
}
