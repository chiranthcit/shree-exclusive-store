import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
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
         {collection.items.length > 0 && (
  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
    Explore the sections below — each one a curated range of premium branded innerwear
    available at our store.
  </p>
)}

          <div className="mt-14 space-y-16">
            {collection.items.map((item, index) => {
              const shots = item.images ?? (item.image ? [item.image] : [""]);
              const isWide = shots.length >= 4;
              const gridCols =
                shots.length >= 4
                  ? "grid grid-cols-2 gap-4"
                  : shots.length === 2
                    ? "grid grid-cols-2 gap-3"
                    : shots.length === 3
                      ? "grid grid-cols-3 gap-3"
                      : "";
              return (
              <section
                key={item.title}
                className={`grid items-center gap-8 rounded-3xl border border-border bg-card/70 p-5 shadow-sm md:p-8 ${
                  isWide ? "" : "md:grid-cols-2"
                }`}
              >
                <div className={!isWide && index % 2 === 1 ? "md:order-2" : ""}>
                  <div className={gridCols}>
                    {shots.map((src, i) =>
                      src ? (
                        <img
                          key={i}
                          src={src}
                          alt={`${item.title} at Shree Exclusive Store`}
                          loading="lazy"
                          className="aspect-[4/3] h-full w-full rounded-2xl object-cover"
                        />
                      ) : (
                        <div
                          key={i}
                          className="grid aspect-[4/3] w-full place-items-center rounded-2xl border border-dashed border-border bg-secondary/40 text-center font-display text-[0.6rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase"
                        >
                          Photo coming soon
                        </div>
                      ),
                    )}
                  </div>
                </div>


                <div>
                  <span className="inline-block rounded-full bg-secondary px-4 py-1.5 font-display text-[0.6rem] font-semibold tracking-[0.2em] text-secondary-foreground uppercase">
                    {collection.eyebrow}
                  </span>
                  <h2 className="section-title mt-5 text-3xl md:text-5xl">{item.title}</h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {item.brands?.length ? (
                    <>
                      <p className="mt-7 font-display text-[0.7rem] font-semibold tracking-[0.2em] text-primary uppercase">
                        Brands Available
                      </p>
                      <ul className="mt-3 grid max-w-md gap-3 sm:grid-cols-2">
                        {item.brands.map((brand) => (
                          <li key={brand} className="flex items-center gap-3">
                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-foreground">{brand}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
              </section>
              );
            })}

          </div>
        </div>
      </main>

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
