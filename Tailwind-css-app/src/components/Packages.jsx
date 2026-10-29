
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CalendarDays,
  Mountain,
  Compass,
} from "lucide-react";

const packages = [
  {
    title: "Everest Base Camp Trek",
    duration: "12 Days",
    activity: "Trekking",
    price: "₹89,999",
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
    image: "./src/images/package-1.jpg",
    description: "Experience breathtaking Himalayan peaks and unforgettable mountain trails.",
  },
  {
    title: "Bali Island Escape",
    duration: "6 Days",
    activity: "Beach & Culture",
    price: "₹49,999",
    badge: "New",
    badgeColor: "bg-green-600",
    image: "./src/images/package-2.jpg",
    description: "Discover tropical beaches, ancient temples and beautiful island sunsets.",
  },
  {
    title: "Swiss Alps Adventure",
    duration: "7 Days",
    activity: "Hiking & Sightseeing",
    price: "₹99,999",
    badge: "Popular",
    badgeColor: "bg-orange-500",
    image: "./src/images/package-3.jpg",
    description: "Explore alpine lakes, mountain villages and spectacular scenic trails.",
  },
  {
    title: "New Zealand Road Trip",
    duration: "10 Days",
    activity: "Road Trip",
    price: "₹1,29,999",
    badge: "Limited",
    badgeColor: "bg-orange-500",
    image: "./src/images/package-4.jpg",
    description: "Journey through dramatic coastlines, emerald valleys and turquoise lakes.",
  },
  {
    title: "Canadian Rockies",
    duration: "8 Days",
    activity: "Nature & Hiking",
    price: "₹1,09,999",
    badge: "Adventure",
    badgeColor: "bg-blue-600",
    image: "./src/images/package-5.jpg",
    description: "Find crystal-clear lakes, pine forests and incredible mountain scenery.",
  },
];

export default function Packages() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < packages.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(packages.length - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => {
        if (current < packages.length - 1) {
          return current + 1;
        }
        return 0;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visiblePackages = [];

  for (let i = 0; i < 4; i++) {
    visiblePackages.push(
      packages[(currentSlide + i) % packages.length]
    );
  }

  return (
    <section
      id="packages"
      className="overflow-hidden bg-[#FFFCF7] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-500">
              Featured Packages
            </p>

            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Handpicked Trips for Every Explorer
            </h2>
          </div>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
          >
            View All Packages
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous packages"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-orange-500 hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {visiblePackages.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden sm:h-44">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <span
                    className={`absolute left-4 top-4 rounded-md ${item.badgeColor} px-3 py-1.5 text-xs font-bold text-white shadow`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-extrabold leading-snug text-slate-900">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={15} />
                      {item.duration}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      {item.activity.includes("Trek") ||
                      item.activity.includes("Hiking") ? (
                        <Mountain size={15} />
                      ) : (
                        <Compass size={15} />
                      )}
                      {item.activity}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-5 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-2">
                    <p className="text-xl font-extrabold text-slate-950 sm:text-2xl">
                      {item.price}
                    </p>

                    <a
                      href="#booking"
                      aria-label={`Explore ${item.title}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition hover:bg-orange-600"
                    >
                      <ArrowRight size={21} />
                    </a>
                  </div>
                </div>
              </article>
            ))}

          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next packages"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-orange-500 hover:text-white"
          >
            <ArrowRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}
