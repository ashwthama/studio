import Image from 'next/image';
import profile from '@/assets/images/ashu-profile.jpg';
import AnimatedSection from './AnimatedSection';

export default function AboutMeSection() {
  return (
    <AnimatedSection id="about" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">
            About Me
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/3 flex-shrink-0">
            <div className="relative aspect-square w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-primary">
              <Image
                src={profile}
                alt="Ashwani Kumar Profile Photo"
                layout="fill"
                objectFit="cover"
                data-ai-hint="profile photo professional"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-lg text-foreground/90 space-y-4 text-center md:text-left">
            <p>
              Hello! I&apos;m Ashwani Kumar, a Full-Stack .NET Developer at smartData Enterprises Inc., focused on building scalable enterprise applications for the insurance domain.
            </p>
            <p>
              My hands-on experience includes ASP.NET Core, C#, Angular, SQL Server, MongoDB, Microservices architecture, REST APIs, RabbitMQ, Azure Cloud, and Jenkins-based CI/CD pipelines. I have designed and maintained 20+ microservices, migrated services to Microsoft Azure, and optimized application workflows for better performance.
            </p>
            <p>
              I also work with AI-enabled applications, including OpenAI APIs, LLM-based data extraction, prompt engineering, and AI-driven matching and verification. Alongside development, I collaborate directly with clients on requirements, solution design, project delivery, and offshore development coordination.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
