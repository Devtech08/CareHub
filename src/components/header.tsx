import Link from 'next/link';
import { Button } from './ui/button';
import { Icons } from './ui/icons';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/find-a-doctor', label: 'Book Appointment' },
    { href: '/services', label: 'Services' },
    { href: '/about-us', label: 'About Us' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="font-bold">CareHub</span>
          </Link>
          <nav className='hidden md:flex items-center space-x-6 text-sm font-medium'>
            {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
