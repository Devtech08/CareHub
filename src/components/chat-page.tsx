'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { mockDoctors, mockMessages } from '@/lib/mock-data';
import type { ChatMessage, Doctor } from '@/lib/types';
import { cn } from '@/lib/utils';
import { SendHorizonal, Video } from 'lucide-react';
import { format } from 'date-fns';

export function ChatPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(mockDoctors[0]);
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message: ChatMessage = {
      id: `msg${messages.length + 1}`,
      senderId: 'user1', // Logged-in patient
      receiverId: selectedDoctor.uid,
      text: newMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const filteredMessages = messages.filter(
    (msg) =>
      (msg.senderId === 'user1' && msg.receiverId === selectedDoctor.uid) ||
      (msg.senderId === selectedDoctor.uid && msg.receiverId === 'user1')
  );

  return (
    <div className="flex h-[calc(100vh-0rem)]">
      <aside className="w-80 border-r border-border/50 flex flex-col">
        <div className="p-4 border-b border-border/50">
          <h2 className="text-xl font-bold font-headline">Conversations</h2>
        </div>
        <ScrollArea className="flex-1">
          <div className="flex flex-col">
            {mockDoctors.map((doctor) => (
              <button
                key={doctor.uid}
                className={cn(
                  'flex items-center gap-3 p-4 text-left hover:bg-muted/50 transition-colors',
                  selectedDoctor.uid === doctor.uid && 'bg-muted/50'
                )}
                onClick={() => setSelectedDoctor(doctor)}
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`https://placehold.co/128x128.png`} alt={doctor.name} data-ai-hint="doctor portrait" />
                  <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{doctor.name}</p>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </aside>

      <section className="flex flex-col flex-1">
        {selectedDoctor ? (
          <>
            <header className="flex items-center justify-between p-4 border-b border-border/50">
              <div className="flex items-center gap-3">
                 <Avatar className="h-10 w-10">
                    <AvatarImage src={`https://placehold.co/128x128.png`} alt={selectedDoctor.name} data-ai-hint="doctor portrait" />
                    <AvatarFallback>{selectedDoctor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{selectedDoctor.name}</h3>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
               <Button variant="outline" size="icon">
                  <Video className="h-5 w-5" />
                  <span className="sr-only">Start Video Call</span>
                </Button>
            </header>

            <ScrollArea className="flex-1 p-6 bg-secondary/30">
              <div className="space-y-6">
                {filteredMessages.map((msg, index) => (
                  <div key={msg.id} className="space-y-2">
                     {index === 0 || format(filteredMessages[index-1].timestamp, 'yyyy-MM-dd') !== format(msg.timestamp, 'yyyy-MM-dd') ? (
                        <div className="text-center text-xs text-muted-foreground py-2">
                          <span>{format(msg.timestamp, 'MMMM d, yyyy')}</span>
                        </div>
                      ) : null}
                    <div
                      className={cn(
                        'flex items-end gap-2 max-w-md',
                        msg.senderId === 'user1' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                      )}
                    >
                       <Avatar className="h-8 w-8">
                         <AvatarImage src={msg.senderId === 'user1' ? `https://placehold.co/128x128.png` : `https://placehold.co/128x128.png`} alt="User" data-ai-hint="patient portrait" />
                        <AvatarFallback>{msg.senderId === 'user1' ? 'P' : 'D'}</AvatarFallback>
                      </Avatar>
                      <div
                        className={cn(
                          'rounded-lg px-4 py-2 text-white',
                          msg.senderId === 'user1'
                            ? 'bg-primary rounded-br-none'
                            : 'bg-muted-foreground/50 rounded-bl-none'
                        )}
                      >
                        <p>{msg.text}</p>
                        <p className={cn("text-xs mt-1", msg.senderId === 'user1' ? 'text-primary-foreground/70' : 'text-muted-foreground/70')}>{format(msg.timestamp, 'p')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <footer className="p-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type your message..."
                  className="flex-1 h-12 text-base"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} size="lg">
                  Send
                  <SendHorizonal className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </footer>
          </>
        ) : (
          <div className="flex items-center justify-center flex-1">
            <p className="text-muted-foreground">Select a conversation to start chatting.</p>
          </div>
        )}
      </section>
    </div>
  );
}
