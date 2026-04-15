import Link from "next/link";
import {
  ShieldCheck,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Scale,
  ArrowLeft,
  Sparkles,
  FileText,
  ExternalLink,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import { topics } from "@/data/topics";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Coins: TrendingUp,
  FileText,
  AlertTriangle: Scale,
  Users,
  ClipboardList: FileText,
  Receipt: FileText,
  Search: FileText,
};

const services = [
  {
    icon: ShieldCheck,
    title: "ליווי רגולטורי מלא",
    description:
      "ליווי שוטף מול רשם העמותות, רשות המסים והרגולטורים — הגשת דו\"חות, אישור ניהול תקין, וניהול התכתבויות מול הרשם.",
  },
  {
    icon: FileText,
    title: "תשתית ניהולית",
    description:
      "ניהול פרוטוקולים, אסיפות כלליות, החלטות ועד — והבטחת עמידה בכל דרישות ממשל תאגידי של עמותות וארגונים ציבוריים.",
  },
  {
    icon: TrendingUp,
    title: "דיווח כספי ומילולי",
    description:
      "בניית דו\"חות כספיים ומילוליים, ליווי רואי חשבון, ומערכת חשבונאית עומדת בתקנים של רשם העמותות.",
  },
  {
    icon: Users,
    title: "ייעוץ ממשל תאגידי",
    description:
      "מניעת ניגוד עניינים, ניהול קרבה משפחתית, תגמול חברי ועד — הגנה מהליקויים השכיחים שגורמים לשלילת אישור ניהול תקין.",
  },
];

const contentChannels = [
  {
    href: "/glossary",
    icon: BookOpen,
    title: "א' ב' בניהול תקין",
    description:
      "מילון מונחים מלא של ניהול עמותות — מאישור ניהול תקין ועד תיקון 14, עם מקור חוקי לכל מונח.",
    cta: "לצפייה במילון",
  },
  {
    href: "/faq",
    icon: HelpCircle,
    title: "יש לי שאלה",
    description:
      "השאלות הנפוצות ביותר מבעלי עמותות, מחולקות לפי נושאים — יסודות, ועד, כספים, ניגוד עניינים ועוד.",
    cta: "לקבלת תשובות",
  },
  {
    href: "/topics",
    icon: Lightbulb,
    title: "יש לי מושג",
    description:
      "מדריכים מעמיקים בנושאים הקריטיים: ניהול תקין, תגמול ועד, פרוטוקולים, ניגוד עניינים, סעיף 46 ועוד.",
    cta: "למדריכים",
  },
  {
    href: "/laws",
    icon: Scale,
    title: "חוקים והנחיות",
    description:
      'חוק העמותות, הנחיות הרשם, חוק הגמ"חים, צו הלבנת הון — עם קישורים ישירים למקורות הרשמיים.',
    cta: "למאגר החקיקה",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.4]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" aria-hidden="true" />

        <div className="container-custom relative pt-20 pb-32 lg:pt-28 lg:pb-40">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/5 text-gold-300 text-xs font-semibold tracking-[0.2em] uppercase mb-8 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              בסיעתא דשמיא
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] mb-8 animate-slide-up">
              <span className="text-white">ניהול תקין</span>
              <span className="block text-gradient-gold">מעטפת ניהולית</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10 animate-slide-up">
              גוף ליווי וניהול-על לעמותות וארגונים ציבוריים.
              <br className="hidden sm:block" />
              מספקים תשתית ניהולית, רגולטורית ומערכתית משלימה — בליווי הנהלה ובממשק
              שוטף מול רשויות, יועצים וגורמי פיקוח.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Link href="/contact" className="btn-primary">
                פנייה לייעוץ ראשוני
                <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link href="/topics" className="btn-secondary">
                למידע מעמיק
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl pt-8 border-t border-navy-700/60">
              {[
                { value: "39א", label: "סעיף ניהול תקין" },
                { value: "14", label: "תיקון לחוק" },
                { value: "35%", label: "זיכוי סעיף 46" },
                { value: "30.6", label: "יעד הגשת דו\"חות" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <div className="section-sub">שירותי החברה</div>
            <h2 className="section-heading">
              תשתית ניהולית <span className="text-gradient-gold">מלאה</span>
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-slate-300 leading-relaxed">
              פעילות החברה מתמקדת בהחזקת התשתית הניהולית, הרגולטורית והמערכתית
              של הארגון. אנו נמצאים מאחורי הקלעים — דואגים שהעמותה תעמוד בכל
              הדרישות, ואתם מתפנים למטרה שלשמה הקמתם אותה.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-glass p-8 group"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-400/30 flex items-center justify-center group-hover:from-gold-400/40 group-hover:to-gold-500/20 transition">
                    <service.icon className="w-7 h-7 text-gold-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content channels */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold-400/30 to-transparent" />
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <div className="section-sub">הניהול התקין שלי</div>
            <h2 className="section-heading">
              ארבעה מסלולי <span className="text-gradient-gold">ידע</span>
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-slate-300 leading-relaxed">
              מאגר מקצועי ומעמיק על כל מה שצריך לדעת בניהול עמותה —
              מהמונחים הבסיסיים ועד לתיקון 14 והחוקים העדכניים.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentChannels.map((channel) => (
              <Link
                key={channel.href}
                href={channel.href}
                className="card-glass p-8 group hover:shadow-gold"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-800/60 border border-navy-700 flex items-center justify-center group-hover:border-gold-400/50 group-hover:bg-gold-400/5 transition">
                    <channel.icon className="w-6 h-6 text-gold-300" />
                  </div>
                  <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-gold-300 group-hover:-translate-x-1 transition" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {channel.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-5">
                  {channel.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm text-gold-300 font-medium">
                  {channel.cta}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured topics */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="container-custom">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="section-sub">נושאים מרכזיים</div>
              <h2 className="section-heading">
                הנושאים ש<span className="text-gradient-gold">חייבים</span> להכיר
              </h2>
              <div className="gold-divider" />
            </div>
            <Link href="/topics" className="btn-secondary">
              לכל הנושאים
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {topics.slice(0, 8).map((topic) => {
              const Icon = iconMap[topic.icon] || FileText;
              return (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="card-glass p-6 group h-full flex flex-col"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition">
                    {topic.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">
                    {topic.tagline}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-gold-300/80 opacity-0 group-hover:opacity-100 transition">
                    קרא עוד
                    <ArrowLeft className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* External resources */}
      <section className="py-20">
        <div className="container-custom">
          <div className="card-glass p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="section-sub">מקורות מידע</div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  מאגרי המידע הרשמיים — בהישג יד
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  שקיפות היא עקרון-על בניהול עמותות. הנה הקישורים הישירים למאגרי
                  המידע שכל בעל עמותה, תורם ועיתונאי צריך להכיר.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: "גיידסטאר ישראל",
                    desc: "מאגר ציבורי של כל העמותות",
                    url: "https://www.guidestar.org.il/",
                  },
                  {
                    title: "רשם העמותות",
                    desc: "משרד המשפטים — פיקוח ורישום",
                    url: "https://www.gov.il/he/departments/corporations/about",
                  },
                ].map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 p-5 rounded-xl bg-navy-900/60 border border-navy-700 hover:border-gold-400/50 hover:bg-navy-900/80 transition group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-accent/10 border border-emerald-accent/30 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-emerald-accent" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {link.title}
                        </div>
                        <div className="text-xs text-slate-400">{link.desc}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-gold-300 transition" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              מעוניינים ב<span className="text-gradient-gold">ליווי מקצועי</span>?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-10">
              צוות המומחים שלנו מלווה עשרות עמותות בישראל — מההקמה ועד לעמידה
              בכל דרישות רשם העמותות, רשות המסים והרגולטורים.
            </p>
            <Link href="/contact" className="btn-primary">
              פנייה לייעוץ ראשוני
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
