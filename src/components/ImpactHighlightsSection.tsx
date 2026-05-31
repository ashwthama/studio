import AnimatedSection from './AnimatedSection';
import { Gauge, Network, Rocket, Workflow } from 'lucide-react';

const highlights = [
  {
    metric: '20+',
    label: 'Microservices Designed & Maintained',
    description: 'Built and supported microservices-based solutions for insurance domain applications.',
    Icon: Network,
  },
  {
    metric: '40%',
    label: 'Scalability & Performance Improvement',
    description: 'Migrated existing microservices to Microsoft Azure to improve system scalability and performance.',
    Icon: Rocket,
  },
  {
    metric: '30%',
    label: 'Deployment Time Reduction',
    description: 'Improved scalability and reduced deployment time while maintaining 20+ microservices.',
    Icon: Workflow,
  },
  {
    metric: '25%',
    label: 'Latency Reduction',
    description: 'Optimized database queries and application workflows to reduce latency.',
    Icon: Gauge,
  },
];

export default function ImpactHighlightsSection() {
  return (
    <AnimatedSection id="impact" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">
            Impact Highlights
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Resume-backed outcomes from enterprise application, microservices, cloud migration, and performance optimization work.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ metric, label, description, Icon }) => (
            <div key={label} className="bg-card rounded-lg shadow-lg p-6 border border-border h-full">
              <Icon className="h-9 w-9 text-primary mb-4" />
              <p className="text-4xl font-bold font-headline text-primary">{metric}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{label}</h3>
              <p className="mt-2 text-sm text-foreground/75">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
