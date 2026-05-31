import SkillItem from './SkillItem';
import AnimatedSection from './AnimatedSection';
import {
  ServerCog,
  FileCode2,
  Atom,
  Type,
  LayoutPanelLeft,
  Database,
  DatabaseZap,
  Cloud,
  Construction,
  MessageSquare,
  DatabaseBackup,
  Braces,
  GitBranch,
  Send,
  Bot,
  BrainCircuit,
  Workflow,
  Network,
  ShieldCheck,
  Settings,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    skills: [
      { name: 'ASP.NET Core', Icon: ServerCog },
      { name: '.NET Core', Icon: ServerCog },
      { name: 'C#', Icon: FileCode2 },
      { name: 'REST APIs', Icon: Braces },
      { name: 'Microservices', Icon: Network },
      { name: 'Clean Architecture', Icon: Workflow },
      { name: 'Entity Framework Core', Icon: DatabaseBackup },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular 12-19', Icon: Atom },
      { name: 'TypeScript', Icon: Type },
      { name: 'JavaScript', Icon: Braces },
      { name: 'Bootstrap', Icon: LayoutPanelLeft },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'SQL Server', Icon: Database },
      { name: 'MongoDB', Icon: DatabaseZap },
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    skills: [
      { name: 'Azure', Icon: Cloud },
      { name: 'Jenkins', Icon: Construction },
      { name: 'CI/CD', Icon: Workflow },
      { name: 'RabbitMQ', Icon: MessageSquare },
      { name: 'Git', Icon: GitBranch },
      { name: 'Postman', Icon: Send },
      { name: 'Swagger', Icon: Braces },
      { name: 'Consul', Icon: Settings },
      { name: 'HashiCorp Vault', Icon: ShieldCheck },
      { name: 'Agile Scrum', Icon: Workflow },
    ],
  },
  {
    title: 'AI & OpenAI',
    skills: [
      { name: 'OpenAI API', Icon: Bot },
      { name: 'LLMs', Icon: BrainCircuit },
      { name: 'Prompt Engineering', Icon: MessageSquare },
      { name: 'AI Data Extraction', Icon: DatabaseZap },
    ],
  },
];

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            ATS-friendly overview of the technologies, tools, and AI capabilities listed in my resume.
          </p>
        </div>
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold font-headline text-center text-foreground mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} Icon={skill.Icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
