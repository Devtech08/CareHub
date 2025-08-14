import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, CalendarPlus, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Welcome to CareHub
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your health, our priority. Seamlessly connect with trusted doctors and manage your healthcare journey with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/register">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/login">Login Now</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="doctor patient consultation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Better Way to Manage Your Health</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CareHub provides a comprehensive suite of tools to empower both patients and doctors in their healthcare interactions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/20 rounded-full p-3 w-fit">
                    <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-headline mt-4">Find Trusted Doctors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Easily search and find qualified doctors by specialty. View their profiles and availability at a glance.</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-accent/20 rounded-full p-3 w-fit">
                    <CalendarPlus className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-headline mt-4">Effortless Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Book appointments in just a few clicks. Select a convenient date and time from the doctor's schedule.</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                   <div className="mx-auto bg-accent/20 rounded-full p-3 w-fit">
                    <MessageSquare className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-headline mt-4">Real-Time Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Communicate securely with your doctor through our integrated real-time chat feature for quick consultations.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Ready to take control of your health?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join CareHub today and experience a new standard of healthcare management.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button asChild size="lg" className="w-full">
                <Link href="/register">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
