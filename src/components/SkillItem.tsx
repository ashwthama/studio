import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillItemProps {
  name: string;
  Icon: LucideIcon;
}

export default function SkillItem({ name, Icon }: SkillItemProps) {
  return (
    <Card className="text-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
      <CardContent className="flex flex-col items-center justify-center gap-2 p-2">
        <Icon className="h-10 w-10 text-primary mb-2" />
        <p className="font-medium text-foreground">{name}</p>
      </CardContent>
    </Card>
  );
}
