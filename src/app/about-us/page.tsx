
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Heart, Users } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">About CareHub</h1>
        <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
          Your trusted partner in health. We are dedicated to providing accessible, high-quality medical care through innovative technology and a compassionate approach.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-headline">Our Mission</h2>
          <p className="text-muted-foreground">
            Our mission is to revolutionize healthcare by making it simple, convenient, and patient-centric. We believe that everyone deserves access to the best medical expertise, regardless of their location. By bridging the gap between patients and doctors through our seamless platform, we empower individuals to take control of their health and well-being.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Prioritizing patient comfort and convenience.</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Leveraging technology to improve health outcomes.</span>
            </li>
             <li className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Upholding the highest standards of medical ethics.</span>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            width={600}
            height={400}
            alt="Team behind CareHub"
            data-ai-hint="team portrait"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="text-center bg-secondary/30 p-8 rounded-lg">
        <h2 className="text-3xl font-bold font-headline">Our Values</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Compassion</h3>
            <p className="text-muted-foreground mt-2">We approach every interaction with empathy and kindness.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Excellence</h3>
            <p className="text-muted-foreground mt-2">We are committed to the highest quality of care and service.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Integrity</h3>
            <p className="text-muted-foreground mt-2">We operate with transparency, honesty, and respect.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
