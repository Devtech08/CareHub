
import Link from 'next/link';
import { Icons } from './ui/icons';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid items-start gap-8 px-4 py-12 text-center md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-2 items-center text-center">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg">CareHub</span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Your health, our priority. Seamlessly connect with trusted doctors.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-center">
          <h3 className="font-semibold">Quick Links</h3>
          <Link href="/find-a-doctor" className="text-muted-foreground hover:text-primary">
            Book Appointment
          </Link>
          <Link href="/patient/chat" className="text-muted-foreground hover:text-primary">
            Chat with Doctor
          </Link>
          <Link href="/TECHNICAL_DOCUMENTATION.md" className="text-muted-foreground hover:text-primary" download>
            Technical Docs
          </Link>
        </div>
        <div className="grid gap-2 text-sm text-center">
          <h3 className="font-semibold">Company</h3>
          <Link href="/about-us" className="text-muted-foreground hover:text-primary">
            About Us
          </Link>
          <Link href="/services" className="text-muted-foreground hover:text-primary">
            Services
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="grid gap-2 text-sm text-center">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="container flex items-center justify-center py-4 border-t">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} CareHub. All rights reserved. Created by Warrior & Nixon.
        </p>
      </div>
    </footer>
  );
}
