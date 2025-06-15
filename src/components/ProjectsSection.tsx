import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';
import { Briefcase, ShieldCheck, CloudCog } from 'lucide-react';

const projects = [
  {
    title: 'Excess Platform',
    description: 'A microservice-based insurance platform enabling users to compare carriers and purchase policies efficiently. Focused on backend robustness and scalability.',
    Icon: Briefcase,
  },
  {
    title: 'Cyber IT Platform',
    description: 'Developed a specialized platform to help users understand and purchase cybersecurity policies, simplifying a complex insurance domain.',
    Icon: ShieldCheck,
  },
  {
    title: 'Azure Migration Project',
    description: 'Successfully led and executed the migration of all existing services to Azure cloud infrastructure, resulting in a 40% improvement in scalability and operational efficiency.',
    Icon: CloudCog,
  },
];

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">
            Key Projects
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Here are some of the significant projects I&apos;ve worked on, demonstrating my capabilities in building impactful solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              Icon={project.Icon}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
