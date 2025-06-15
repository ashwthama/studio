import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  Icon?: LucideIcon; // Optional icon
}

export default function ProjectCard({ title, description, Icon }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-8 w-8 text-primary" />}
          <CardTitle className="text-xl font-semibold font-headline text-primary">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
