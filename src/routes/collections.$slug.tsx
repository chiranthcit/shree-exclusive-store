import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, MessageCircle, X } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { collections, store } from "@/lib/site";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = collections.find((c) => c.slug === params.slug);
    if (!collection) throw notFound();
    return collection;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.heading} | Shree Exclusive Store`
      : "Collections | Shree Exclusive Store";
    const description = loaderData
      ? `${loaderData.subheading} — ${loaderData.tags.join(", ")} available in-store at Shree Exclusive Store, Basaveshwar Nagar, Bengaluru.`
      : "Browse the collections at Shree Exclusive Store.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CollectionPage,
});

function CollectionPage() {
  const collection = Route.useLoaderData();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + collection.items.length) % collection.items.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % collection.items.length,
        );
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, collection.items.length]);

  const activeItem = activeIndex === null ? undefined : collection.items[activeIndex];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="soft-bg pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <Link
            to="/"
            hash="collections"
            className="inline-flex items-center gap-2 font-display text-[0.7rem] font-semibold tracking-[0.18em] text-primary uppercase"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Collections
          </Link>

          <h1 className="section-title mt-6 text-4xl md:text-6xl">{collection.heading}</h1>
          <p className="mt-3 font-display text-xs font-semibold tracking-[0.24em] text-primary uppercase">
            {collection.subheading}
          </p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Explore the sections below — each one a curated range of premium branded innerwear
            available at our store.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {collection.items.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} at Shree Exclusive Store`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-card/90 px-3 py-1.5 font-display text-[0.6rem] font-semibold tracking-[0.2em] text-foreground uppercase">
                    {collection.eyebrow}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-5">
                    <h2 className="font-display text-2xl font-bold text-primary-foreground">
                      {item.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  <Button
                    type="button"
                    onClick={() => setActiveIndex(collection.items.indexOf(item))}
                    className="mt-5 w-full rounded-full font-display text-xs tracking-[0.16em] uppercase"
                  >
                    <Camera /> View Pictures
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {activeItem && activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} picture viewer`}
          className="fixed inset-0 z-[70] grid place-items-center bg-foreground/90 p-4 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-card shadow-2xl md:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative flex min-h-[20rem] flex-1 items-center justify-center bg-foreground/5 md:min-h-[38rem]">
              <img
                src={activeItem.image}
                alt={`${activeItem.title} at Shree Exclusive Store`}
                className="max-h-[70vh] w-full object-contain"
              />
              {collection.items.length > 1 ? (
                <>
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    aria-label="Previous picture"
                    onClick={() =>
                      setActiveIndex((activeIndex - 1 + collection.items.length) % collection.items.length)
                    }
                    className="absolute left-3 rounded-full shadow-lg"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="secondary"
                    aria-label="Next picture"
                    onClick={() => setActiveIndex((activeIndex + 1) % collection.items.length)}
                    className="absolute right-3 rounded-full shadow-lg"
                  >
                    <ChevronRight />
                  </Button>
                </>
              ) : null}
            </div>
            <div className="w-full p-6 md:w-72 md:p-8">
              <p className="font-display text-[0.65rem] font-semibold tracking-[0.2em] text-primary uppercase">
                {collection.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground">{activeItem.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{activeItem.description}</p>
              <p className="mt-6 text-xs text-muted-foreground">
                {activeIndex + 1} / {collection.items.length}
              </p>
            </div>
            <Button
              type="button"
              size="icon"
              variant="secondary"
              aria-label="Close picture viewer"
              onClick={() => setActiveIndex(null)}
              className="absolute top-3 right-3 rounded-full shadow-lg"
            >
              <X />
            </Button>
          </div>
        </div>
      ) : null}

      <SiteFooter />

      <a
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
