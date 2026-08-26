import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { aboutImage, brands, collections, gallery, logoUrl, store } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Exclusive Store | Premium Innerwear in Basaveshwar Nagar" },
      {
        name: "description",
        content:
          "Shree Exclusive Store, Basaveshwar Nagar Bengaluru — premium branded innerwear, nightwear and activewear for men, women and kids. Enamor, Amante, Jockey, Nykd & more.",
      },
      { property: "og:title", content: "Shree Exclusive Store | Premium Branded Innerwear" },
      {
        property: "og:description",
        content:
          "Trendy fashion, quality clothing and exclusive styles — all under one roof in Basaveshwar Nagar, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  useEffect(() => {
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader home />

      {/* HERO */}
      <section id="home" className="soft-bg relative overflow-hidden pt-32 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-display text-[0.65rem] font-semibold tracking-[0.22em] text-foreground/80 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-rose" />
              Premium Branded Clothing
            </span>
            <h1 className="mt-7 font-display text-5xl leading-[1.05] font-bold text-foreground md:text-6xl">
              Discover Your
              <br />
              <span className="text-primary">Perfect Style</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Trendy fashion, quality clothing, and exclusive styles — all under one roof.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              
                href="#collections"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
              >
                Explore Collections <ArrowRight className="h-4 w-4" />
              </a>
              
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card px-7 py-4 font-display text-xs font-semibold tracking-[0.18em] text-primary uppercase transition-colors hover:bg-accent"
              >
                <MapPin className="h-4 w-4" /> Visit Our Store
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                ["500+", "Designs"],
                ["14+", "Brands"],
                ["50,000+", "Products"],
              ].map(([n, l]) => (
                <div key={l} className="border-l border-border pl-4 first:border-0 first:pl-0">
                  <span className="font-display text-2xl font-bold text-foreground">{n}</span>{" "}
                  <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-rose/20">
              <img
                src={logoUrl}
                alt="Shree Exclusive Store brand emblem"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-xl sm:left-8">
              <p className="font-display text-[0.6rem] font-semibold tracking-[0.22em] text-rose uppercase">
                Now Open
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">Mon–Sun · 10 AM – 9 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="section-title text-center text-3xl md:text-5xl">Our Collections</h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((c) => (
              <article
                key={c.slug}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={c.card}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-card/90 px-3 py-1.5 font-display text-[0.6rem] font-semibold tracking-[0.2em] text-foreground uppercase">
                    {c.eyebrow}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-5">
                    <h3 className="font-display text-2xl font-bold text-primary-foreground">
                      {c.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent px-3 py-1.5 text-xs text-accent-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/collections/$slug"
                    params={{ slug: c.slug }}
                    className="mt-5 inline-flex items-center gap-1.5 font-display text-[0.7rem] font-semibold tracking-[0.18em] text-primary uppercase"
                  >
                    Visit to Explore <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-blush py-6">
        <div className="marquee-track flex w-max items-center gap-10">
          {[...brands, ...brands, ...brands, ...brands].map((b, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-xl font-semibold tracking-[0.25em] text-foreground/70 uppercase">
                {b}
              </span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="bg-blush/40 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img src={aboutImage} alt="Shree Exclusive Store shopfront" className="w-full object-cover" />
          </div>
          <div>
            <h2 className="section-title text-3xl md:text-4xl">About Us</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Shree Exclusive Store is a trusted retail destination for premium innerwear and
              lifestyle essentials. Located in the heart of the city, our store offers a carefully
              curated selection of branded innerwear for men and women, along with comfortable
              nightwear, activewear, and everyday basics.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Handpicked premium brands you trust",
                "Personalised fitting assistance in-store",
                "Fresh, trendy collections every season",
                "Quality you can feel, prices you'll love",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <blockquote className="mt-9 border-l-2 border-primary pl-5">
              <p className="text-lg italic text-foreground">"Quality comes first."</p>
              <cite className="mt-2 block font-display text-[0.65rem] font-semibold tracking-[0.22em] text-primary uppercase not-italic">
                — Shree Exclusive Store
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="section-title text-center text-3xl md:text-5xl">The Gallery</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {gallery.map((g) => (
              <figure
                key={g.label}
                className={`group relative overflow-hidden rounded-3xl ${
                  g.span ? "md:row-span-2" : ""
                }`}
              >
                <img
                  src={g.image}
                  alt={g.label}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    g.span ? "h-full min-h-[22rem]" : "h-64"
                  }`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-5 font-display text-xs font-semibold tracking-[0.22em] text-primary-foreground uppercase">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="section-title text-center text-3xl md:text-5xl">What Our Customers Say</h2>
          <p className="mt-4 text-center text-muted-foreground">
            Real reviews from our happy shoppers.
          </p>
          <div className="mt-14">
            <div
              className="elfsight-app-266e7294-776b-4cb8-9506-8b3ed97a6a19"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-blush py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-5xl">
            Come Visit Shree Exclusive
          </h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
                <iframe
                  title="Shree Exclusive Store location on Google Maps"
                  src={store.mapsEmbed}
                  className="h-[24rem] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {store.address}
                </p>
                
                  href={store.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Call Us" value={store.phone} href={store.phoneHref} />
              <ContactRow icon={<Clock className="h-5 w-5" />} label="Store Hours" value={store.hours} />
              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                label="Email Us"
                value={store.email}
                href={`mailto:${store.email}`}
              />
              <div className="flex items-center gap-4 pt-2">
                <span className="font-display text-[0.65rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  Follow Us
                </span>
                
                  href={store.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-tr from-gold via-rose to-primary text-primary-foreground"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                
                  href={store.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-full bg-[oklch(0.72_0.18_150)] text-primary-foreground"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter home />

      
        href={store.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.72_0.18_150)] text-primary-foreground shadow-xl transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm transition-shadow hover:shadow-md">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-primary">
        {icon}
      </span>
      <div>
        <p className="font-display text-[0.6rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
          {label}
        </p>
        <p className="mt-1 font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
