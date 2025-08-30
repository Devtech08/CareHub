
'use client';

import { useState } from 'react';
import { Pill, Search, ListFilter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const mockMedications = [
  { name: 'Paracetamol 500mg', price: '$5.99', requiresPrescription: false, category: 'Pain Relief' },
  { name: 'Amoxicillin 250mg', price: '$12.50', requiresPrescription: true, category: 'Antibiotics' },
  { name: 'Ibuprofen 200mg', price: '$7.20', requiresPrescription: false, category: 'Pain Relief' },
  { name: 'Lisinopril 10mg', price: '$15.00', requiresPrescription: true, category: 'Blood Pressure' },
  { name: 'Cetirizine 10mg', price: '$9.99', requiresPrescription: false, category: 'Allergy' },
  { name: 'Metformin 500mg', price: '$18.75', requiresPrescription: true, category: 'Diabetes' },
  { name: 'Aspirin 81mg', price: '$4.50', requiresPrescription: false, category: 'Pain Relief' },
  { name: 'Loratadine 10mg', price: '$8.99', requiresPrescription: false, category: 'Allergy' },
];

export default function OnlinePharmacyPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const categories = [
    'All Categories',
    ...Array.from(new Set(mockMedications.map((med) => med.category))),
  ];
  
  const filteredMedications = mockMedications.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || med.category.toLowerCase().replace(' ', '-') === category;
    return matchesSearch && matchesCategory;
  });

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

      <div className="mb-8 p-6 bg-secondary/30 border border-border/50 rounded-lg space-y-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative flex-grow md:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for medications..."
                className="pl-10 bg-input text-base h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full h-12 text-base">
                    <ListFilter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                    {categories.map((c) => (
                    <SelectItem key={c} value={c.toLowerCase().replace(' ', '-')}>
                        {c}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMedications.length > 0 ? (
          filteredMedications.map((med) => (
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
        ))
        ) : (
            <div className="text-center col-span-full py-12">
                <h3 className="text-lg font-semibold">No Medications Found</h3>
                <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria.
                </p>
            </div>
        )}
      </div>
    </div>
  );
}
