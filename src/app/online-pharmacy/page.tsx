import { Pill, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const mockMedications = [
  { name: 'Paracetamol 500mg', price: '$5.99', requiresPrescription: false },
  { name: 'Amoxicillin 250mg', price: '$12.50', requiresPrescription: true },
  { name: 'Ibuprofen 200mg', price: '$7.20', requiresPrescription: false },
  { name: 'Lisinopril 10mg', price: '$15.00', requiresPrescription: true },
  { name: 'Cetirizine 10mg', price: '$9.99', requiresPrescription: false },
  { name: 'Metformin 500mg', price: '$18.75', requiresPrescription: true },
];

export default function OnlinePharmacyPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline flex items-center gap-3">
          <Pill className="w-8 h-8" />
          Online Pharmacy
        </h1>
        <p className="text-muted-foreground">
          Order medications and health products from the comfort of your home.
        </p>
      </div>

      <div className="mb-8 p-6 bg-secondary/30 border border-border/50 rounded-lg">
        <div className="relative flex-grow max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for medications..."
            className="pl-10 bg-input text-base h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockMedications.map((med) => (
          <Card key={med.name} className="shadow-md hover:shadow-xl transition-shadow flex flex-col">
            <CardHeader>
              <CardTitle>{med.name}</CardTitle>
              <CardDescription>{med.requiresPrescription ? 'Prescription required' : 'Over-the-counter'}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-2xl font-bold">{med.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
