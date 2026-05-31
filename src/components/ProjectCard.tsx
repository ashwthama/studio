import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  highlights?: string[];
  techStack?: string[];
  Icon?: LucideIcon; // Optional icon
}

export default function ProjectCard({ title, description, highlights = [], techStack = [], Icon }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-8 w-8 text-primary" />}
          <CardTitle className="text-xl font-semibold font-headline text-primary">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-5">
        <CardDescription className="text-foreground/80 text-base">{description}</CardDescription>
        {highlights.length > 0 && (
          <ul className="space-y-2 text-sm text-foreground/80">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {tech}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
