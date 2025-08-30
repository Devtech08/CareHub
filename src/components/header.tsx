
'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Icons } from './ui/icons';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from './ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LogOut, LayoutGrid, User, Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/find-a-doctor', label: 'Book Appointment' },
  { href: '/services', label: 'Services' },
  { href: '/about-us', label: 'About Us' },
];

export default function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast({
        title: 'Logged Out',
        description: 'You have been successfully signed out.',
      });
      router.push('/login');
    } catch (error) {
      console.error('Sign out error:', error);
      toast({
        title: 'Error',
        description: 'Failed to sign out. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleDashboardRedirect = () => {
    if (user?.role === 'Doctor') {
      router.push('/doctor/dashboard');
    } else {
      router.push('/patient/dashboard');
    }
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="font-bold">CareHub</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center justify-end space-x-2">
          {loading ? (
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-20 rounded-md" />
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleDashboardRedirect}>
                  <LayoutGrid className="mr-2" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push(user.role === 'Doctor' ? '/doctor/settings' : '/patient/settings')}>
                  <User className="mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
           <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="p-4">
                     <Link href="/" className="mb-8 flex items-center space-x-2" onClick={handleSheetClose}>
                        <Icons.logo className="h-6 w-6 text-primary" />
                        <span className="font-bold">CareHub</span>
                      </Link>
                      <nav className="flex flex-col gap-4 mt-8">
                          {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={handleSheetClose} className="text-lg font-medium transition-colors hover:text-primary">
                                {link.label}
                            </Link>
                          ))}
                      </nav>
                      {!user && (
                         <div className="mt-8 flex flex-col gap-2">
                           <SheetClose asChild>
                            <Button asChild variant="outline">
                                <Link href="/login">Login</Link>
                            </Button>
                            </SheetClose>
                            <SheetClose asChild>
                            <Button asChild>
                                <Link href="/register">Register</Link>
                            </Button>
                            </SheetClose>
                        </div>
                      )}
                  </div>
              </SheetContent>
            </Sheet>
           </div>
        </div>
      </div>
    </header>
  );
}
