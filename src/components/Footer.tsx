import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, FileText } from "lucide-react";

const navColumns = [
  {
    title: "מסלולי תוכן",
    links: [
      { href: "/glossary", label: "א' ב' בניהול תקין" },
      { href: "/faq", label: "יש לי שאלה" },
      { href: "/topics", label: "יש לי מושג" },
      { href: "/laws", label: "חוקים והנחיות" },
    ],
  },
  {
    title: "מאגרי מידע רשמיים",
    external: true,
    links: [
      {
        href: "https://www.guidestar.org.il/",
        label: "גיידסטאר ישראל",
      },
      {
        href: "https://www.gov.il/he/departments/corporations/about",
        label: "רשם העמותות",
      },
      {
        href: "https://www.nevo.co.il/",
        label: "מאגר חקיקה - נבו",
      },
    ],
  },
  {
    title: "החברה",
    links: [
      { href: "/", label: "בית" },
      { href: "/contact", label: "צור קשר" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-navy-700/60 bg-navy-950/80">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-l from-transparent via-gold-400/40 to-transparent" />
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link
              href="/"
              aria-label="ניהול תקין - מעטפת ניהולית בע״מ"
              className="inline-flex items-center mb-5"
            >
              <Image
                src="/images/logo.png"
                alt="ניהול תקין - מעטפת ניהולית בע״מ"
                width={260}
                height={192}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              גוף ליווי וניהול-על לעמותות וארגונים ציבוריים. תשתית ניהולית,
              רגולטורית ומערכתית מקיפה.
            </p>
          </div>

          {navColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-gold-400 text-xs font-bold tracking-[0.25em] uppercase mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {col.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm text-slate-300 hover:text-gold-300 transition"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 hover:text-gold-300 transition"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-navy-800/80 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
            <FileText className="w-3 h-3 inline-block ml-1 align-text-top" />
            המידע באתר אינו מהווה ייעוץ משפטי. מומלץ להתייעץ עם עורך דין
            המתמחה בדיני עמותות לפני קבלת החלטות.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a
              href="mailto:info@nihul-takin.co.il"
              className="inline-flex items-center gap-1.5 hover:text-gold-300 transition"
            >
              <Mail className="w-3.5 h-3.5" />
              info@nihul-takin.co.il
            </a>
            <span>© {new Date().getFullYear()} ניהול תקין בע"מ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
