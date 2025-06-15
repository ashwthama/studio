import ContactForm from './ContactForm';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold font-headline text-primary mb-4">Contact Information</h3>
            <a href="mailto:ashwanikumarnt@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <Mail className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              <span className="text-lg">ashwanikumarnt@gmail.com</span>
            </a>
            <a href="tel:+918081652700" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <Phone className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              <span className="text-lg">+91 8081652700</span>
            </a>
            <a href="https://www.linkedin.com/in/ashwani-kumar-a19395137/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <Linkedin className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              <span className="text-lg">LinkedIn Profile</span>
            </a>
            <p className="text-foreground/70 mt-4">
              Feel free to reach out via email, phone, or connect with me on LinkedIn. I look forward to hearing from you!
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold font-headline text-primary mb-6 text-center md:text-left">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
