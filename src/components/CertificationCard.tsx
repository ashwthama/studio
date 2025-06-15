import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
}

export default function CertificationCard({ title }: CertificationCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
      <CardContent className="p-6 flex items-center gap-4">
        <Award className="h-8 w-8 text-accent flex-shrink-0" />
        <p className="text-lg font-medium text-foreground">{title}</p>
      </CardContent>
    </Card>
  );
}
