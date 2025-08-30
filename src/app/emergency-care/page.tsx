import { Phone, MapPin, Ambulance } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function EmergencyCarePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-destructive">Emergency Medical Care</h1>
        <p className="text-muted-foreground text-lg mt-2">
          For immediate, life-threatening emergencies, please dial your local emergency number.
        </p>
         <p className="text-3xl font-bold mt-4">Call 911 Now</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
            <Image 
                src="https://placehold.co/600x400.png"
                width={600}
                height={400}
                alt="Emergency room"
                data-ai-hint="emergency room"
                className="rounded-lg shadow-lg"
            />
        </div>
        <div className="space-y-6">
          <Card className="bg-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Ambulance className="w-6 h-6 text-primary" />
                24/7 Ambulance Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Our dedicated ambulance service is available around the clock for rapid response.
              </CardDescription>
              <Button className="mt-4 w-full" size="lg">
                <Phone className="mr-2" />
                Request Ambulance
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Find Nearest Emergency Room
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Locate the closest CareHub partner hospital or emergency facility.
              </CardDescription>
              <Button className="mt-4 w-full" size="lg" variant="outline">
                <MapPin className="mr-2" />
                Open Map
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
