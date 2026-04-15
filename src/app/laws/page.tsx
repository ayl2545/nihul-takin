import { Scale, Gavel, BookMarked, Globe, ExternalLink } from "lucide-react";
import { laws } from "@/data/laws";

const categoryConfig = {
  law: {
    label: "חקיקה ראשית",
    icon: Gavel,
    color: "text-gold-300",
    bgColor: "bg-gold-400/10 border-gold-400/30",
  },
  guideline: {
    label: "הנחיות הרשם",
    icon: BookMarked,
    color: "text-emerald-accent",
    bgColor: "bg-emerald-accent/10 border-emerald-accent/30",
  },
  tool: {
    label: "מאגר מידע רשמי",
    icon: Globe,
    color: "text-navy-200",
    bgColor: "bg-navy-700/40 border-navy-600/60",
  },
};

export default function LawsPage() {
  const grouped = {
    law: laws.filter((l) => l.category === "law"),
    guideline: laws.filter((l) => l.category === "guideline"),
    tool: laws.filter((l) => l.category === "tool"),
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-700/40">
        <div className="absolute inset-0 bg-hero-glow opacity-60" aria-hidden />
        <div className="container-custom relative py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-gold-300 text-sm mb-5">
              <Scale className="w-4 h-4" />
              מסגרת חוקית
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">חוקים </span>
              <span className="text-gradient-gold">והנחיות</span>
            </h1>
            <div className="gold-divider mb-6" />
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              המקורות החוקיים המרכזיים שכל בעל עמותה, חבר ועד או יועץ מקצועי
              חייב להכיר. קישורים ישירים למאגרי המידע הרשמיים.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 space-y-16">
        {(Object.keys(grouped) as Array<keyof typeof grouped>).map((key) => {
          const config = categoryConfig[key];
          const Icon = config.icon;
          const items = grouped[key];
          if (items.length === 0) return null;

          return (
            <div key={key} className="container-custom">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center ${config.bgColor}`}
                >
                  <Icon className={`w-6 h-6 ${config.color}`} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {config.label}
                  </h2>
                  <div className="text-sm text-slate-500">{items.length} מקורות</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {items.map((law) => (
                  <a
                    key={law.title}
                    href={law.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-glass p-7 group hover:shadow-gold"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-lg font-bold text-white leading-tight group-hover:text-gold-300 transition flex-1">
                        {law.title}
                      </h3>
                      <ExternalLink className="shrink-0 w-5 h-5 text-slate-500 group-hover:text-gold-300 transition" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {law.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="py-12 border-t border-navy-700/40">
        <div className="container-custom">
          <div className="card-glass p-8 text-center">
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto">
              <strong className="text-slate-300">הסתייגות משפטית:</strong>{" "}
              המידע המוצג באתר זה הוא לידיעה כללית בלבד ואינו מהווה ייעוץ משפטי.
              לפני קבלת החלטות המבוססות על חוקים או הנחיות הרשם — מומלץ להתייעץ
              עם עורך דין המתמחה בדיני עמותות.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
