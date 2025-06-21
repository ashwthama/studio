import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div className="flex justify-center mb-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/ashwani-kumar-2a33651b3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/ashwthama" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Github className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Ashwani Kumar. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
