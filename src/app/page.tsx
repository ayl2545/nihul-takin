import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.4]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent"
        aria-hidden="true"
      />

      <div className="container-custom relative min-h-[calc(100vh-5rem)] flex items-center py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/5 text-gold-300 text-xs font-semibold tracking-[0.2em] uppercase mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            בסיעתא דשמיא
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-8 animate-slide-up">
            <span className="text-white">ניהול תקין</span>
            <span className="block text-gradient-gold mt-2">
              מעטפת ניהולית בע״מ
            </span>
          </h1>

          <div className="gold-divider mb-10" />

          <div className="space-y-5 text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl animate-slide-up">
            <p>
              ניהול תקין - מעטפת ניהולית פועלת כגוף ליווי וניהול על לעמותות
              וארגונים.
            </p>
            <p>
              החברה מספקת תשתית ניהולית משלימה למנהלי עמותות וארגונים ציבוריים.
            </p>
            <p>
              פעילות החברה מתמקדת בהחזקת התשתית הניהולית, הרגולטורית והמערכתית
              של הארגון, בליווי הנהלה ובממשק שוטף מול רשויות, יועצים וגורמי
              פיקוח.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
