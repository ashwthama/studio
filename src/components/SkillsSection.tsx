import SkillItem from './SkillItem';
import AnimatedSection from './AnimatedSection';
import { ServerCog, FileCode2, Atom, Type, LayoutPanelLeft, Database, DatabaseZap, Cloud, Construction, MessageSquare, DatabaseBackup } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    skills: [
      { name: '.NET Core', Icon: ServerCog },
      { name: 'C#', Icon: FileCode2 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular 12-19', Icon: Atom },
      { name: 'TypeScript', Icon: Type },
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
    title: 'Others',
    skills: [
      { name: 'Azure', Icon: Cloud },
      { name: 'Jenkins', Icon: Construction },
      { name: 'RabbitMQ', Icon: MessageSquare },
      { name: 'Entity Framework', Icon: DatabaseBackup },
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
            A snapshot of the technologies and tools I leverage to build robust and efficient applications.
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
