import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { logoUrl, navLinks, store } from "@/lib/site";

export function SiteFooter({ home = false }: { home?: boolean }) {
  const href = (hash: string) => (home ? hash : `/${hash}`);

  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="Shree Exclusive Store logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-[0.22em]">SHREE</span>
              <span className="block text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                EXCLUSIVE STORE
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Premium branded innerwear for men, women &amp; kids. Trendy fashion, quality clothing,
            and exclusive styles — all under one roof.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={store.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-tr from-gold via-rose to-primary text-primary-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={store.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full bg-[oklch(0.72_0.18_150)] text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold tracking-[0.24em] text-foreground uppercase">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={href(l.hash)} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold tracking-[0.24em] text-foreground uppercase">
            Reach Us
          </h4>
          <a
            href={store.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex gap-3 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
            {store.address}
          </a>
          <a
            href={store.phoneHref}
            className="mt-4 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 text-rose" />
            {store.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shree Exclusive Store. All rights reserved.</p>
          <p className="tracking-[0.24em] uppercase">Crafted with elegance</p>
        </div>
      </div>
    </footer>
  );
}
