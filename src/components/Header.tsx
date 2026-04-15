"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, UserCircle2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/glossary", label: "א' ב' בניהול תקין" },
  { href: "/faq", label: "יש לי שאלה" },
  { href: "/topics", label: "יש לי מושג" },
  { href: "/laws", label: "חוקים והנחיות" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-950/85 backdrop-blur-xl border-b border-navy-700/60 shadow-navy"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            aria-label="ניהול תקין - מעטפת ניהולית בע״מ"
            className="relative flex items-center group"
          >
            <Image
              src="/images/logo.png"
              alt="ניהול תקין - מעטפת ניהולית בע״מ"
              width={240}
              height={177}
              priority
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-gold-300"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-l from-gold-400 to-gold-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            disabled
            aria-disabled="true"
            className="hidden lg:inline-flex btn-primary !py-2 !px-5 text-sm opacity-70 cursor-not-allowed"
          >
            <UserCircle2 className="w-4 h-4" />
            איזור אישי
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-200 hover:bg-navy-800/60 transition"
            aria-label="תפריט"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-navy-700/60 mt-2 animate-fade-in">
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-gold-400/10 text-gold-300 border border-gold-400/30"
                        : "text-slate-300 hover:bg-navy-800/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="btn-primary mt-3 mx-4 !py-2.5 opacity-70 cursor-not-allowed"
              >
                <UserCircle2 className="w-4 h-4" />
                איזור אישי
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
