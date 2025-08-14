import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Get Quick Medical Services
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    In today's fast-paced world, access to prompt and efficient
                    medical services is of paramount importance. When faced with a
                    medical emergency or seeking immediate medical attention, the
                    ability to receive quick medical services can significantly
                    impact the outcome of a situation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/patient/find-doctor">Get Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://placehold.co/600x600.png"
                  width="600"
                  height="600"
                  alt="Hero Doctor"
                  data-ai-hint="doctor pointing"
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                />
                <Card className="absolute top-1/4 -left-16 shadow-lg p-4 w-56">
                  <CardContent className="flex items-center gap-4 p-0">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">1520+</p>
                      <p className="text-sm text-muted-foreground">
                        Active Clients
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="absolute bottom-12 -right-12 shadow-lg p-4 w-64">
                  <CardContent className="space-y-2 p-0">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <p>Get 20% off on every 1st month</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <p>Expert Doctors</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
