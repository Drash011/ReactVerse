import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "10 Essential Tips for First-Time Trekkers",
    date: "Aug 15, 2024",
    image: "./src/images/travelguides-1.png",
  },
  {
    title: "A Guide to Exploring Bali's Hidden Gems",
    date: "Jul 28, 2024",
    image: "./src/images/travelguides-2.png",
  },
  {
    title: "The Ultimate Road Trip Guide to New Zealand",
    date: "Jul 10, 2024",
    image: "./src/images/travelguides-3.png",
  },
];

export default function TravelGuides() {
  return (
    <section id="guides" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
              Travel Guide
            </p>

            <h2 className="font-serif text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Tips, Stories & Inspiration
            </h2>
          </div>

          <a
            href="#guides"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
          >
            Explore All Articles
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                className="h-44 w-full rounded-lg object-cover sm:h-32 sm:w-1/2"
              />

              <div className="flex flex-1 flex-col items-start">
                <h3 className="text-base font-extrabold leading-snug text-slate-900">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">{article.date}</p>

                <a
                  href="#guides"
                  className="flex w-full items-center justify-end gap-2 pt-4 text-sm font-bold text-orange-500 transition hover:text-orange-700"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
