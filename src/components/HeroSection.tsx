import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SmoothScrollLink from './SmoothScrollLink';
import { Download, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  return (
    <AnimatedSection as="div" id="hero" className="relative bg-background text-center overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-primary sm:text-5xl md:text-6xl">
            Hi, I&apos;m Ashwani Kumar
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80">
            A passionate Full-Stack Developer with experience in building scalable microservices and cloud-based applications using .NET Core, Angular, and Azure.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/resume.pdf" download="Ashwani_Kumar_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <SmoothScrollLink href="#contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                <Send className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </SmoothScrollLink>
          </div>
        </div>
        <div className="mt-12 relative aspect-[16/6] max-w-5xl mx-auto">
          <Image
            src="https://placehold.co/1200x400.png"
            alt="Professional Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
            data-ai-hint="professional tech banner"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50"></div>
        </div>
      </div>
    </AnimatedSection>
  );
}
