import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Users,
  ClipboardList,
  Receipt,
  Search,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { topics, topicsBySlug } from "@/data/topics";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Coins: TrendingUp,
  FileText,
  AlertTriangle,
  Users,
  ClipboardList,
  Receipt,
  Search,
};

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const topic = topicsBySlug[params.slug];
  if (!topic) return {};
  return {
    title: `${topic.title} | ניהול תקין`,
    description: topic.tagline,
  };
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = topicsBySlug[params.slug];
  if (!topic) notFound();

  const Icon = iconMap[topic.icon] || FileText;
  const currentIdx = topics.findIndex((t) => t.slug === topic.slug);
  const prev = currentIdx > 0 ? topics[currentIdx - 1] : null;
  const next =
    currentIdx < topics.length - 1 ? topics[currentIdx + 1] : null;

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-700/40">
        <div className="absolute inset-0 bg-hero-glow opacity-60" aria-hidden />
        <div className="container-custom relative py-16 lg:py-24">
          <Link
            href="/topics"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-gold-300 transition mb-8"
          >
            <ArrowLeft className="w-4 h-4 rotate-180" />
            חזרה לכל הנושאים
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-gold">
                <Icon className="w-8 h-8 text-navy-950" />
              </div>
              <div>
                <div className="text-xs text-gold-300/80 tracking-[0.2em] uppercase mb-1">
                  יש לי מושג
                </div>
                <div className="text-sm text-slate-400">{topic.tagline}</div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {topic.title}
            </h1>
            <div className="gold-divider mb-6" />
            <p className="text-lg text-slate-300 leading-relaxed">
              {topic.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-custom max-w-4xl">
          <div className="space-y-10">
            {topic.sections.map((section, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-300 flex items-center justify-center font-bold text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white flex-1">
                    {section.heading}
                  </h2>
                </div>
                <div className="pr-14">
                  <p className="text-slate-300 leading-loose whitespace-pre-line text-[1.05rem]">
                    {section.body}
                  </p>
                </div>
              </div>
            ))}

            {topic.example && (
              <div className="card-glass p-8 border-gold-400/30">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-gold-400/15 border border-gold-400/40 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-gold-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gold-300 mb-3">
                      {topic.example.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed italic">
                      {topic.example.body}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {topic.warning && (
              <div className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-[0.2em] uppercase text-red-300 mb-2">
                      שים לב
                    </div>
                    <p className="text-slate-200 leading-relaxed">
                      {topic.warning}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-navy-700/60">
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <span className="text-gold-400 text-base">📌</span>
                <span>
                  <strong className="text-slate-300">מקור:</strong> {topic.source}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to next/prev topic */}
      <section className="py-12 border-t border-navy-700/40">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/topics/${prev.slug}`}
                className="card-glass p-6 group"
              >
                <div className="text-xs text-slate-500 mb-2">הנושא הקודם</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white group-hover:text-gold-300 transition">
                      {prev.title}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      {prev.tagline}
                    </div>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-gold-300 transition rotate-180" />
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/topics/${next.slug}`}
                className="card-glass p-6 group md:text-left"
              >
                <div className="text-xs text-slate-500 mb-2">הנושא הבא</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white group-hover:text-gold-300 transition">
                      {next.title}
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      {next.tagline}
                    </div>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-gold-300 transition" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
