
import { useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, Heart, Star } from "lucide-react";

const destinations = [
  {
    name: "Bali, Indonesia",
    category: "Beaches · Culture · Island Life",
    rating: "4.8",
    reviews: "2.4k",
    image: "./src/images/destination-1.jpg",
  },
  {
    name: "Swiss Alps, Switzerland",
    category: "Mountains · Snow · Adventure",
    rating: "4.9",
    reviews: "1.9k",
    image: "./src/images/destination-2.jpg",
  },
  {
    name: "Banff, Canada",
    category: "Lakes · Wildlife · Nature",
    rating: "4.8",
    reviews: "1.5k",
    image: "./src/images/destination-3.jpg",
  },
  {
    name: "Santorini, Greece",
    category: "Sunsets · Islands · Romance",
    rating: "4.7",
    reviews: "2.1k",
    image: "./src/images/destination-4.jpg",
  },
  {
    name: "New Zealand",
    category: "Road Trips · Mountains · Lakes",
    rating: "4.9",
    reviews: "1.8k",
    image: "./src/images/destination-5.jpg",
  },
  {
    name: "Patagonia, Argentina",
    category: "Hiking · Glaciers · Wilderness",
    rating: "4.8",
    reviews: "980",
    image: "./src/images/destination-5.jpg",
  },
];

export default function Destinations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const nextSlide = () => {
    if (currentSlide < destinations.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(destinations.length - 1);
    }
  };

  const toggleFavorite = (name) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter((item) => item !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  return (
    <section
      id="destinations"
      className="bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-orange-500">
              Popular Destinations
            </p>

            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Top Destinations to Explore
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-500">
            From towering mountains to serene beaches, find the perfect
            destination for your next adventure.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous destination"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 transition hover:bg-orange-500 hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations
              .slice(currentSlide, currentSlide + 4)
              .concat(
                destinations.slice(
                  0,
                  Math.max(0, currentSlide + 4 - destinations.length)
                )
              )
              .map((destination) => {
                const isFavorite = favorites.includes(destination.name);

                return (
                  <article
                    key={destination.name}
                    className="group relative h-80 overflow-hidden rounded-xl bg-slate-900 shadow-sm"
                  >
                    <img
                      src={destination.image}
                      alt={destination.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/20 to-black/5" />

                    <button
                      type="button"
                      onClick={() => toggleFavorite(destination.name)}
                      aria-label="Toggle favorite"
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700"
                    >
                      <Heart
                        size={20}
                        fill={isFavorite ? "#F97316" : "none"}
                        className={isFavorite ? "text-orange-500" : ""}
                      />
                    </button>

                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <h3 className="text-lg font-extrabold">
                        {destination.name}
                      </h3>

                      <p className="mt-2 flex items-start gap-1.5 text-xs text-white/90">
                        <MapPin size={14} className="shrink-0" />
                        {destination.category}
                      </p>

                      <div className="mt-3 flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            size={13}
                            fill="currentColor"
                          />
                        ))}

                        <span className="ml-1 text-xs font-bold text-white">
                          {destination.rating}
                        </span>

                        <span className="ml-auto text-xs text-white/75">
                          ({destination.reviews})
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next destination"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 transition hover:bg-orange-500 hover:text-white"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
