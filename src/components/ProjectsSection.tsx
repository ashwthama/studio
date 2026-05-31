import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';
import { Briefcase, ShieldCheck, CloudCog, Bot } from 'lucide-react';

const projects = [
  {
    title: 'Insurance Portal',
    description: "Insurance portal for General Liability, Cyber, Excess, Workers' Compensation, and Inland Marine policies.",
    highlights: [
      'Developed and maintained enterprise insurance applications using ASP.NET Core, C#, Angular, SQL Server, and MongoDB.',
      'Designed and implemented microservices-based solutions for insurance domain applications.',
    ],
    techStack: ['ASP.NET Core', 'Angular', 'REST APIs', 'SQL Server', 'MongoDB'],
    Icon: Briefcase,
  },
  {
    title: 'Multi-Carrier Excess Insurance Platform',
    description: 'Platform for comparing and purchasing Excess insurance policies across multiple carriers.',
    highlights: [
      'Supported policy comparison and purchase workflows in a microservices-based insurance ecosystem.',
      'Collaborated directly with clients for requirement gathering, solution design, and project delivery.',
    ],
    techStack: ['ASP.NET Core', 'Angular', 'Microservices', 'REST APIs'],
    Icon: ShieldCheck,
  },
  {
    title: 'Azure Migration Project',
    description: 'Microservices modernization and performance enhancement initiative using Microsoft Azure.',
    highlights: [
      'Migrated existing microservices to Microsoft Azure, improving system scalability and performance by 40%.',
      'Implemented Jenkins CI/CD pipelines for automated deployments.',
    ],
    techStack: ['Azure', 'Microservices', 'Jenkins', 'CI/CD'],
    Icon: CloudCog,
  },
  {
    title: 'AI-Powered Business Intelligence Platform',
    description: 'AI-powered application for extracting and enriching business information from company name and address.',
    highlights: [
      'Retrieved website URLs, social media profiles, contact details, and business descriptions from public sources.',
      'Integrated LLMs for intelligent data extraction and validation.',
      'Leveraged OpenAI APIs and prompt engineering techniques for business data enrichment.',
      'Improved data accuracy through AI-driven matching and verification.',
    ],
    techStack: ['ASP.NET Core', 'Angular', 'OpenAI API', 'MongoDB', 'Prompt Engineering'],
    Icon: Bot,
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
            Resume-backed projects across insurance platforms, microservices modernization, Azure migration, and AI/OpenAI-enabled business intelligence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              highlights={project.highlights}
              techStack={project.techStack}
              Icon={project.Icon}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
