'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Home, Stethoscope, Calendar, FileText, MessageSquare, Settings, LifeBuoy, LayoutGrid, LogOut } from 'lucide-react';
import { Icons } from './ui/icons';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth-context';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const navItems = [
  { href: '/patient/dashboard', icon: LayoutGrid, label: 'Dashboard' },
  { href: '/patient/find-doctor', icon: Stethoscope, label: 'Find a Doctor' },
  { href: '/patient/appointments', icon: Calendar, label: 'Appointments' },
  { href: '/patient/records', icon: FileText, label: 'Medical Records' },
  { href: '/patient/chat', icon: MessageSquare, label: 'Messages' },
];

const bottomNavItems = [
    { href: '/patient/settings', icon: Settings, label: 'Settings' },
    { href: '/patient/help', icon: LifeBuoy, label: 'Help & Support' },
]

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
        await signOut(auth);
        toast({
            title: 'Logged Out',
            description: 'You have been successfully logged out.',
        });
        router.push('/login');
    } catch (error) {
        toast({
            title: 'Logout Failed',
            description: 'An error occurred while logging out.',
            variant: 'destructive',
        });
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <aside className="h-screen sticky top-0 left-0 flex flex-col items-center w-20 bg-secondary/30 border-r border-border/50 py-4">
        <Link href="/patient/dashboard" className="mb-8">
           <Icons.logo className="h-8 w-8 text-primary" />
        </Link>
        <nav className="flex flex-col items-center gap-4 flex-grow">
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-lg transition-colors',
                     pathname.startsWith(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted/50'
                  )}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-secondary border-border/60">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
         <div className="flex flex-col items-center gap-4">
            {bottomNavItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-lg transition-colors',
                     pathname.startsWith(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted/50'
                  )}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-secondary border-border/60">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
            <Tooltip>
              <TooltipTrigger asChild>
                 <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLogout}
                    className="flex h-12 w-12 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted/50"
                  >
                  <LogOut className="h-6 w-6" />
                  <span className="sr-only">Logout</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-secondary border-border/60">
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
        </div>
      </aside>
    </TooltipProvider>
  );
}
