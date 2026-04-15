"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    amuta: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to an API route.
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-700/40">
        <div className="absolute inset-0 bg-hero-glow opacity-60" aria-hidden />
        <div className="container-custom relative py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-gold-300 text-sm mb-5">
              <Mail className="w-4 h-4" />
              יצירת קשר
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">צור </span>
              <span className="text-gradient-gold">קשר</span>
            </h1>
            <div className="gold-divider mb-6" />
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              מעוניינים בליווי מקצועי לעמותה שלכם? יש לכם שאלה ספציפית בנושא
              ניהול תקין, דיווח או ממשל תאגידי? מלאו את הטופס ונשוב אליכם בהקדם.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="space-y-5 lg:col-span-1">
              <div className="card-glass p-6">
                <div className="w-11 h-11 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-gold-300" />
                </div>
                <div className="text-xs text-slate-500 mb-1 tracking-[0.15em] uppercase">
                  דוא"ל
                </div>
                <a
                  href="mailto:info@nihul-takin.co.il"
                  className="text-white font-medium hover:text-gold-300 transition break-all"
                >
                  info@nihul-takin.co.il
                </a>
              </div>

              <div className="card-glass p-6">
                <div className="w-11 h-11 rounded-lg bg-emerald-accent/10 border border-emerald-accent/30 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-emerald-accent" />
                </div>
                <div className="text-xs text-slate-500 mb-1 tracking-[0.15em] uppercase">
                  טלפון
                </div>
                <a
                  href="tel:+97225555555"
                  className="text-white font-medium hover:text-gold-300 transition"
                  dir="ltr"
                >
                  02-555-5555
                </a>
              </div>

              <div className="card-glass p-6">
                <div className="w-11 h-11 rounded-lg bg-navy-700/60 border border-navy-600 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-slate-300" />
                </div>
                <div className="text-xs text-slate-500 mb-2 tracking-[0.15em] uppercase">
                  שעות פעילות
                </div>
                <div className="text-sm text-slate-300 space-y-1">
                  <div>א'–ה': 09:00–18:00</div>
                  <div>ו': 09:00–13:00</div>
                </div>
              </div>

              <div className="card-glass p-6">
                <div className="w-11 h-11 rounded-lg bg-navy-700/60 border border-navy-600 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-slate-300" />
                </div>
                <div className="text-xs text-slate-500 mb-2 tracking-[0.15em] uppercase">
                  כתובת
                </div>
                <div className="text-sm text-slate-300 leading-relaxed">
                  <Building2 className="w-4 h-4 inline-block ml-1 align-text-top text-slate-500" />
                  רחוב הלל 10, ירושלים
                </div>
              </div>
            </aside>

            <div className="lg:col-span-2">
              <div className="card-glass p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-20 h-20 mx-auto rounded-full bg-emerald-accent/10 border border-emerald-accent/40 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      הפנייה נשלחה בהצלחה
                    </h2>
                    <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
                      תודה שפנית אלינו. צוות החברה יחזור אליך בהקדם האפשרי —
                      בדרך כלל בתוך יום עסקים.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        מלאו את פרטיכם
                      </h2>
                      <p className="text-sm text-slate-400">
                        נשוב אליכם בהקדם עם מענה מקצועי.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field
                        label="שם מלא"
                        name="name"
                        required
                        value={form.name}
                        onChange={(v) => setForm({ ...form, name: v })}
                      />
                      <Field
                        label="שם העמותה"
                        name="amuta"
                        value={form.amuta}
                        onChange={(v) => setForm({ ...form, amuta: v })}
                      />
                      <Field
                        label='דוא"ל'
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                      />
                      <Field
                        label="טלפון"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(v) => setForm({ ...form, phone: v })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        נושא הפנייה
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        className="w-full bg-navy-900/60 border border-navy-700 rounded-lg px-4 py-3 text-white focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition"
                      >
                        <option value="">בחר נושא...</option>
                        <option value="management">אישור ניהול תקין</option>
                        <option value="reports">הגשת דו"חות שנתיים</option>
                        <option value="governance">ממשל תאגידי</option>
                        <option value="section46">אישור סעיף 46</option>
                        <option value="audit">ביקורת רשם</option>
                        <option value="other">אחר</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        תוכן הפנייה <span className="text-gold-400">*</span>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        required
                        rows={6}
                        className="w-full bg-navy-900/60 border border-navy-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition resize-none"
                        placeholder="כתבו לנו במה נוכל לסייע..."
                      />
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="btn-primary w-full sm:w-auto">
                        <Send className="w-4 h-4" />
                        שליחת פנייה
                      </button>
                      <p className="text-xs text-slate-500 mt-4">
                        בלחיצה על "שליחת פנייה" אתם מאשרים קבלת מענה באמצעות פרטי
                        הקשר שמילאתם.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-300 mb-2">
        {label}
        {required && <span className="text-gold-400 mr-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-navy-900/60 border border-navy-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-gold-400/50 focus:outline-none focus:ring-2 focus:ring-gold-400/20 transition"
      />
    </div>
  );
}
