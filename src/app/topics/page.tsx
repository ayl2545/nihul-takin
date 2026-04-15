import Link from "next/link";
import { Lightbulb, ArrowLeft } from "lucide-react";
import { topics } from "@/data/topics";
import { resolveTopicIcon } from "@/lib/topic-icons";

export default function TopicsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-700/40">
        <div className="absolute inset-0 bg-hero-glow opacity-60" aria-hidden />
        <div className="container-custom relative py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-gold-300 text-sm mb-5">
              <Lightbulb className="w-4 h-4" />
              מדריכים מעמיקים
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">יש לי </span>
              <span className="text-gradient-gold">מושג</span>
            </h1>
            <div className="gold-divider mb-6" />
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              הנושאים הקריטיים בעולם העמותות — מוסברים לעומק, עם דוגמאות מהחיים
              ועם התראות מפני הטעויות השכיחות שגורמות לשלילת אישור ניהול תקין.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((topic, idx) => {
              const Icon = resolveTopicIcon(topic.icon);
              return (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="card-glass p-7 group flex flex-col h-full hover:shadow-gold"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/5 border border-gold-400/30 flex items-center justify-center group-hover:scale-110 transition">
                      <Icon className="w-6 h-6 text-gold-300" />
                    </div>
                    <span className="text-xs font-mono text-slate-600">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-gold-300/80 font-medium mb-3">
                    {topic.tagline}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1 line-clamp-3">
                    {topic.intro}
                  </p>
                  <div className="mt-5 pt-5 border-t border-navy-700/60 flex items-center justify-between text-sm">
                    <span className="text-slate-500">
                      {topic.sections.length} פרקים
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-gold-300 font-medium group-hover:gap-3 transition-all">
                      למאמר
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
