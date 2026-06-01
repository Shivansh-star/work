import { Code2, Palette, Server, BrainCircuit, LucideIcon, BookOpen } from 'lucide-react';

export const iconRegistry: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Server,
  BrainCircuit,
};

export function getIcon(iconName: string): LucideIcon {
  return iconRegistry[iconName] || BookOpen; // Fallback to BookOpen if not found
}
