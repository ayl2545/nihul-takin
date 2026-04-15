"use client";

import { useState, useMemo } from "react";
import { Search, BookOpen, X } from "lucide-react";
import { glossary } from "@/data/glossary";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim();
    return glossary
      .map((group) => {
        if (activeLetter && group.letter !== activeLetter) return null;
        const terms = q
          ? group.terms.filter(
              (t) => t.term.includes(q) || t.definition.includes(q)
            )
          : group.terms;
        if (!terms.length) return null;
        return { ...group, terms };
      })
      .filter(Boolean) as typeof glossary;
  }, [query, activeLetter]);

  const totalTerms = filtered.reduce((sum, g) => sum + g.terms.length, 0);

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-700/40">
        <div className="absolute inset-0 bg-hero-glow opacity-60" aria-hidden />
        <div className="container-custom relative py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-gold-300 text-sm mb-5">
              <BookOpen className="w-4 h-4" />
              מילון מונחים
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">א' ב' </span>
              <span className="text-gradient-gold">בניהול תקין</span>
            </h1>
            <div className="gold-divider mb-6" />
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              המילון הממוקד של עולם העמותות — מושגים, סעיפי חוק ומונחים
              רגולטוריים, מוגדרים בבהירות ועם מקור חוקי לכל מונח.
            </p>
            <p className="mt-5 text-xs text-slate-500">
              * המסמך אינו מהווה ייעוץ משפטי. מומלץ להתייעץ עם עורך דין
              המתמחה בדיני עמותות.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sticky top-20 z-30 bg-navy-950/90 backdrop-blur-xl border-b border-navy-700/40">
        <div className="container-custom space-y-5">
          <div className="relative max-w-2xl">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="חיפוש מונח..."
              className="w-full bg-navy-900/60 border border-navy-700 rounded-xl pr-12 pl-12 py-3.5 text-white placeholder-slate-500 focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveLetter(null)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                activeLetter === null
                  ? "bg-gold-400 text-navy-950"
                  : "bg-navy-800/60 text-slate-300 hover:bg-navy-800 hover:text-white"
              }`}
            >
              הכל
            </button>
            {glossary.map((g) => (
              <button
                key={g.letter}
                onClick={() =>
                  setActiveLetter(activeLetter === g.letter ? null : g.letter)
                }
                className={`w-9 h-9 rounded-lg text-sm font-bold transition ${
                  activeLetter === g.letter
                    ? "bg-gold-400 text-navy-950"
                    : "bg-navy-800/60 text-slate-300 hover:bg-navy-800 hover:text-white"
                }`}
              >
                {g.letter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-custom">
          <div className="text-sm text-slate-400 mb-8">
            {totalTerms} מונחים{query && ` תואמים ל"${query}"`}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              לא נמצאו תוצאות לחיפוש זה.
            </div>
          ) : (
            <div className="space-y-14">
              {filtered.map((group) => (
                <div key={group.letter} id={`letter-${group.letter}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-gold">
                      <span className="text-2xl font-bold text-navy-950">
                        {group.letter}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-l from-gold-400/50 to-transparent" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {group.terms.map((term) => (
                      <div
                        key={term.term}
                        className="card-glass p-6 group"
                      >
                        <h3 className="text-lg font-bold text-gold-300 mb-2">
                          {term.term}
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-sm mb-3">
                          {term.definition}
                        </p>
                        {term.source && (
                          <div className="pt-3 border-t border-navy-700/60 flex items-start gap-2 text-xs text-slate-500">
                            <span className="text-gold-400">📌</span>
                            <span>{term.source}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
