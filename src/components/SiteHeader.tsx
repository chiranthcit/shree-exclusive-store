import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { navLogoUrl, navLinks, store } from "@/lib/site";

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (hash: string) => (home ? hash : `/${hash}`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-background/90 shadow-sm backdrop-blur-md" : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={navLogoUrl}
            alt="Shree Exclusive Store logo"
            className="h-14 w-auto rounded-xl object-contain ring-1 ring-border shadow-sm"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-[0.22em] text-foreground">
              SHREE
            </span>
            <span className="block text-[0.6rem] font-medium tracking-[0.3em] text-muted-foreground">
              EXCLUSIVE STORE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={href(l.hash)}
              className="font-display text-xs font-semibold tracking-[0.18em] text-foreground/80 uppercase transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={store.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-tr from-gold via-rose to-primary text-primary-foreground shadow-sm transition-transform hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={store.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.72_0.18_150)] text-primary-foreground shadow-sm transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-5 pb-5 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={href(l.hash)}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 font-display text-xs font-semibold tracking-[0.18em] uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
