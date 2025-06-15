import Image from 'next/image';
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
                src="https://placehold.co/300x300.png"
                alt="Ashwani Kumar Profile Photo"
                layout="fill"
                objectFit="cover"
                data-ai-hint="profile photo professional"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-lg text-foreground/90 space-y-4 text-center md:text-left">
            <p>
              Hello! I&apos;m Ashwani Kumar, a results-driven Full-Stack Developer currently contributing my skills at smartData Enterprises. My journey in tech has been fueled by a passion for crafting efficient, scalable, and user-centric software solutions.
            </p>
            <p>
              With hands-on experience in Microservices architecture, I thrive on designing and implementing complex systems that are both robust and maintainable. I have a strong background in leveraging Azure cloud services to build and deploy applications, ensuring high availability and performance.
            </p>
            <p>
              I&apos;m adept at the full software development lifecycle, from conceptualization and design through to development, testing, and deployment. I enjoy tackling challenging problems and continuously learning new technologies to stay at the forefront of enterprise-level software delivery.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
