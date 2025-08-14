import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/mock-data';

export default function ArticlesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Health Articles</h1>
        <p className="text-muted-foreground text-lg mt-2 max-w-2xl mx-auto">
          Stay informed with our latest health articles, tips, and advice from our experts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
            <Card key={article.title} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col">
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
                <CardContent className="flex-grow">
                    <CardDescription>{article.description}</CardDescription>
                </CardContent>
                <CardContent>
                    <Button variant="link" className="p-0">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
