
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Users, Stethoscope, MessageSquare, Sparkles, Pill, Ambulance, ClipboardList, ArrowRight } from 'lucide-react';
import { DoctorCard } from '@/components/doctor-card';
import { mockDoctors } from '@/lib/mock-data';


const articles = [
  {
    title: 'The Benefits of a Balanced Diet',
    description: 'Learn how a balanced diet can improve your overall health and well-being.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'healthy food',
  },
  {
    title: 'Tips for a Better Night\'s Sleep',
    description: 'Discover simple tips and tricks to help you get a more restful night\'s sleep.',
    image: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'person sleeping',
  },
  {
    title: 'The Importance of Regular Exercise',
    description: 'Find out why regular physical activity is crucial for maintaining a healthy lifestyle.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1770&auto=format&fit=crop',
    aiHint: 'person jogging',
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
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
                    <Link href="/find-a-doctor">Get Services</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop"
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a wide range of medical services to cater to your health needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <Link href="/find-a-doctor" className="h-full">
                <Card className="shadow-md hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                       <Stethoscope className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Find a Doctor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Search and find the best doctors from various specialties. Easily book an appointment with a specialist that fits your needs.
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/online-pharmacy" className="h-full">
               <Card className="shadow-md hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                        <Pill className="h-8 w-8 text-primary" />
                    </div>
                  <CardTitle>Online Pharmacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get your prescriptions filled and delivered to your doorstep from our licensed online pharmacy.
                  </CardDescription>
                </CardContent>
              </Card>
              </Link>
              <Link href="/patient/chat" className="h-full">
               <Card className="shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                        <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                  <CardTitle>Online Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Have a virtual consultation with your doctor through our secure chat and video call features, right from the comfort of your home.
                  </CardDescription>
                </CardContent>
              </Card>
              </Link>
              <Link href="/ai-symptom-checker" className="h-full">
               <Card className="shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                     <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                  <CardTitle>AI Symptom Checker</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Use our intelligent symptom checker to get an idea of which specialist you should consult for your health concerns.
                  </CardDescription>
                </CardContent>
              </Card>
              </Link>
              <Link href="/emergency-care" className="h-full">
              <Card className="shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                        <Ambulance className="h-8 w-8 text-primary" />
                    </div>
                  <CardTitle>Emergency Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get immediate medical attention for urgent health issues. Our emergency care is available 24/7.
                  </CardDescription>
                </CardContent>
              </Card>
              </Link>
              <Link href="/patient/records" className="h-full">
              <Card className="shadow-md hover:shadow-xl transition-shadow">
                <CardHeader>
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                        <ClipboardList className="h-8 w-8 text-primary" />
                    </div>
                  <CardTitle>Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track your health progress and medical history with our comprehensive tracking tools.
                  </CardDescription>
                </CardContent>
              </Card>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Top Doctors</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experienced and dedicated doctors are here to provide you with the best medical care.
                </p>
              </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mockDoctors.slice(0, 4).map((doctor) => (
                <DoctorCard key={doctor.uid} doctor={doctor} />
              ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/find-a-doctor">View All Doctors</Link>
                </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Health Articles</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Stay informed with our latest health articles and tips.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Card key={article.title} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                            <Image 
                                src={article.image}
                                width={600}
                                height={400}
                                alt={article.title}
                                data-ai-hint={article.aiHint}
                                className="w-full h-48 object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{article.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{article.description}</CardDescription>
                            </CardContent>
                            <CardContent>
                                <Button variant="link" className="p-0">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/articles">View All Articles</Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
