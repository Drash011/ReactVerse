import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CalendarDays,
  Users,
} from "lucide-react";

const slides = [
  {
    image: "./src/images/hero-1.jpg",
    eyebrow: "EXPLORE · DISCOVER · BELONG",
    title: "ADVENTURE AWAITS,",
    highlight: "GO FIND IT",
    description:
      "Discover breathtaking destinations, unforgettable experiences and journeys that stay with you forever.",
  },
  {
    image: "./src/images/hero-2.jpg",
    eyebrow: "ESCAPE · EXPLORE · EXPERIENCE",
    title: "FIND YOUR WILD,",
    highlight: "FEEL ALIVE",
    description:
      "From hidden forest trails to incredible landscapes, your next great adventure starts here.",
  },
  {
    image: "./src/images/hero-3.jpg",
    eyebrow: "WANDER · WONDER · REPEAT",
    title: "THE WORLD IS",
    highlight: "YOUR PLAYGROUND",
    description:
      "Discover new cultures, breathtaking views and the freedom of travelling beyond the ordinary.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2 Adults");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const changeSlide = (direction) => {
    setActive(
      (current) => (current + direction + slides.length) % slides.length,
    );
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!destination.trim()) {
      setMessage("Please enter a destination to explore.");
      return;
    }

    setMessage(
      `Ready to explore ${destination}! Choose your dates and discover your next adventure.`,
    );
  };

  return (
    <section id="home" className="relative pb-20">
      <div className="relative min-h-155 overflow-hidden bg-slate-950 sm:min-h-172.5 lg:min-h-185">
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={`Adventure landscape ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              active === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/45 to-slate-950/10" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-slate-950/20" />

        <div className="relative mx-auto flex min-h-155 max-w-7xl items-center px-6 pb-16 pt-32 sm:min-h-172.5 sm:px-10 lg:min-h-185 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-5 text-xs font-bold tracking-[0.25em] text-orange-400 sm:text-sm">
              {slides[active].eyebrow}
            </p>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {slides[active].title}
              <span className="mt-1 block text-orange-500">
                {slides[active].highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              {slides[active].description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#destinations"
                className="inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Explore Destinations <ArrowRight size={18} />
              </a>

              <button
                type="button"
                onClick={() =>
                  setMessage("Add your adventure video link here.")
                }
                className="inline-flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60">
                  ▶
                </span>
                Watch Video
              </button>
            </div>

            {message && (
              <p
                role="status"
                className="mt-4 max-w-lg text-sm text-orange-200"
              >
                {message}
              </p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white transition hover:bg-orange-500 sm:left-7"
        >
          <ChevronLeft size={25} />
        </button>

        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white transition hover:bg-orange-500 sm:right-7"
        >
          <ChevronRight size={25} />
        </button>

        <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === index ? "w-9 bg-orange-500" : "w-5 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div
        id="booking"
        className="relative z-20 mx-auto -mt-10 max-w-6xl px-4 sm:-mt-12 sm:px-6"
      >
        <form
          onSubmit={handleSearch}
          className="grid gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:grid-cols-2 sm:p-5 lg:grid-cols-[1.2fr_1fr_0.9fr_auto] lg:items-center"
        >
          <label className="flex min-w-0 items-center gap-3 border-b border-slate-100 p-2 sm:border-r sm:border-b-0">
            <MapPin className="shrink-0 text-orange-500" size={23} />
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-bold text-slate-900">
                Where to?
              </span>
              <input
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                placeholder="Search destinations"
                className="mt-1 w-full min-w-0 bg-transparent text-sm text-slate-600 outline-none placeholder:text-slate-400"
              />
            </span>
          </label>

          <label className="flex min-w-0 items-center gap-3 border-b border-slate-100 p-2 sm:border-b-0 lg:border-r">
            <CalendarDays className="shrink-0 text-orange-500" size={23} />
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-bold text-slate-900">
                When?
              </span>
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="mt-1 w-full min-w-0 bg-transparent text-sm text-slate-500 outline-none"
              />
            </span>
          </label>

          <label className="flex items-center gap-3 p-2">
            <Users className="shrink-0 text-orange-500" size={23} />
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-bold text-slate-900">
                Travelers
              </span>
              <select
                value={travelers}
                onChange={(event) => setTravelers(event.target.value)}
                className="mt-1 w-full bg-transparent text-sm text-slate-600 outline-none"
              >
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
                <option>5+ Adults</option>
              </select>
            </span>
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Search Trips <ArrowRight size={18} />
          </button>
        </form>

        {message && (
          <p role="status" className="mt-3 text-center text-sm text-slate-600">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
