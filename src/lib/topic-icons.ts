import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Users,
  ClipboardList,
  Receipt,
  Search,
  TrendingUp,
} from "lucide-react";

export type LucideIcon = React.ComponentType<{ className?: string }>;

export const topicIconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Coins: TrendingUp,
  FileText,
  AlertTriangle,
  Users,
  ClipboardList,
  Receipt,
  Search,
};

export const resolveTopicIcon = (name: string): LucideIcon =>
  topicIconMap[name] ?? FileText;
