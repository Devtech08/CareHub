
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, MessageSquare, Sparkles, Pill, Ambulance, ClipboardList } from 'lucide-react';

const services = [
    {
        href: "/find-a-doctor",
        icon: Stethoscope,
        title: "Find a Doctor",
        description: "Search and find the best doctors from various specialties. Easily book an appointment with a specialist that fits your needs."
    },
    {
        href: "/online-pharmacy",
        icon: Pill,
        title: "Online Pharmacy",
        description: "Get your prescriptions filled and delivered to your doorstep from our licensed online pharmacy."
    },
    {
        href: "/patient/chat",
        icon: MessageSquare,
        title: "Online Consultation",
        description: "Have a virtual consultation with your doctor through our secure chat and video call features, right from the comfort of your home."
    },
    {
        href: "/ai-symptom-checker",
        icon: Sparkles,
        title: "AI Symptom Checker",
        description: "Use our intelligent symptom checker to get an idea of which specialist you should consult for your health concerns."
    },
    {
        href: "/emergency-care",
        icon: Ambulance,
        title: "Emergency Care",
        description: "Get immediate medical attention for urgent health issues. Our emergency care is available 24/7."
    },
    {
        href: "/patient/records",
        icon: ClipboardList,
        title: "Tracking",
        description: "Track your health progress and medical history with our comprehensive tracking tools."
    }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Services</h1>
        <p className="text-muted-foreground text-lg mt-2 max-w-2xl mx-auto">
          We provide a wide range of medical services to cater to all of your health needs, from routine check-ups to emergency care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link key={service.title} href={service.href} className="h-full">
            <Card className="shadow-md hover:shadow-xl transition-shadow h-full bg-secondary/30 border-border/50">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
