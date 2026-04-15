"use client";

import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  BookOpen,
  Users,
  TrendingUp,
  AlertTriangle,
  Search,
  Hand,
} from "lucide-react";
import { faqCategories } from "@/data/faq";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Users,
  TrendingUp,
  AlertTriangle,
  Search,
  Hand,
};

export default function FaqPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visible = activeCategory
    ? faqCategories.filter((c) => c.id === activeCategory)
    : faqCategories;

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-700/40">
        <div className="absolute inset-0 bg-hero-glow opacity-60" aria-hidden />
        <div className="container-custom relative py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-gold-300 text-sm mb-5">
              <HelpCircle className="w-4 h-4" />
              שאלות ותשובות
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">יש לי </span>
              <span className="text-gradient-gold">שאלה</span>
            </h1>
            <div className="gold-divider mb-6" />
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-4">
              המדריך המעשי למי שיש לו עמותה — ולמי שחושב לפתוח אחת. בהתבסס על
              חוק העמותות תש"ם-1980, תיקוניו והנחיות רשם העמותות.
            </p>
            <p className="text-xs text-slate-500">
              * המידע אינו מהווה ייעוץ משפטי. יש להתייעץ עם עורך דין המתמחה בדיני
              עמותות.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sticky top-20 z-30 bg-navy-950/90 backdrop-blur-xl border-b border-navy-700/40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeCategory === null
                  ? "bg-gold-400 text-navy-950"
                  : "bg-navy-800/60 text-slate-300 hover:bg-navy-800 hover:text-white"
              }`}
            >
              כל הקטגוריות
            </button>
            {faqCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || HelpCircle;
              return (
                <button
                  key={cat.id}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat.id ? null : cat.id)
                  }
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeCategory === cat.id
                      ? "bg-gold-400 text-navy-950"
                      : "bg-navy-800/60 text-slate-300 hover:bg-navy-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-custom max-w-5xl space-y-12">
          {visible.map((cat) => {
            const Icon = iconMap[cat.icon] || HelpCircle;
            return (
              <div key={cat.id} id={cat.id}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/5 border border-gold-400/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {cat.title}
                    </h2>
                    <div className="text-sm text-slate-500">
                      {cat.items.length} שאלות
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {cat.items.map((item, idx) => {
                    const key = `${cat.id}-${idx}`;
                    const isOpen = openKey === key;
                    return (
                      <div
                        key={key}
                        className={`card-glass transition ${
                          isOpen ? "border-gold-400/40" : ""
                        }`}
                      >
                        <button
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="w-full text-right flex items-center justify-between gap-4 p-6"
                        >
                          <span className="font-semibold text-white leading-relaxed">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`shrink-0 w-5 h-5 text-gold-400 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 -mt-2 animate-fade-in">
                            <div className="pt-4 border-t border-navy-700/60">
                              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                                {item.answer}
                              </p>
                              {item.source && (
                                <div className="mt-4 flex items-start gap-2 text-xs text-slate-500">
                                  <span className="text-gold-400">📌</span>
                                  <span>מקור: {item.source}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
