import CertificationCard from './CertificationCard';
import AnimatedSection from './AnimatedSection';

const certifications = [
  { title: 'Oracle Cloud Infrastructure Foundations' },
  { title: 'Machine Learning with Python' },
  { title: 'Python for Data Science' },
];

export default function CertificationsSection() {
  return (
    <AnimatedSection id="certifications" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight text-primary sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            My commitment to continuous learning and professional development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} title={cert.title} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
