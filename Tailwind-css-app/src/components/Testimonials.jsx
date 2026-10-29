import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Aditi Sharma",
    location: "New Delhi, India",
    avatar: "./src/images/testimonial-1.jpg",
    review:
      "An absolutely life-changing experience! The team planned everything perfectly and made our trip to Bali unforgettable.",
  },
  {
    name: "Michael Brown",
    location: "London, UK",
    avatar: "./src/images/testimonial-2.jpg",
    review:
      "Professional, friendly and incredibly organized. The Swiss Alps trip was the highlight of my year!",
  },
  {
    name: "Sarah Lee",
    location: "Sydney, Australia",
    avatar: "./src/images/testimonial-3.jpg",
    review:
      "The attention to detail and local insights made all the difference. I can't wait to travel with RoamQuest again!",
  },
  {
    name: "Daniel Wilson",
    location: "Toronto, Canada",
    avatar: "./src/images/testimonial-4.jpg",
    review:
      "Every detail was thoughtfully planned. We discovered hidden places we would never have found on our own.",
  },
  {
    name: "Emma Johnson",
    location: "Melbourne, Australia",
    avatar: "./src/images/testimonial-5.jpg",
    review:
      "Our adventure was exciting from beginning to end. The guides were amazing and the memories will last forever.",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(testimonials.length - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => {
        if (current < testimonials.length - 1) {
          return current + 1;
        }
        return 0;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [];

  for (let i = 0; i < 3; i++) {
    visibleTestimonials.push(
      testimonials[(currentSlide + i) % testimonials.length]
    );
  }

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-12 sm:py-14"
      style={{
        backgroundImage:
          "linear-gradient(rgba(1, 15, 11, 0.3), rgba(1, 15, 11, 0.8)), url('./src/images/testimonial-bg.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10">

        <div className="mb-8 text-center">
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-orange-400">
            Traveler Stories
          </p>

          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            What Our Explorers Say
          </h2>
        </div>

        <div className="flex items-center gap-3">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-orange-500"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {visibleTestimonials.map((person) => (
              <article
                key={person.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl transition hover:-translate-y-1 sm:p-6"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="h-14 w-14 rounded-full border-2 border-orange-100 object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
                      {person.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {person.location}
                    </p>

                    <div className="mt-2 flex gap-1 text-orange-500">
                      <Star size={17} fill="currentColor" />
                      <Star size={17} fill="currentColor" />
                      <Star size={17} fill="currentColor" />
                      <Star size={17} fill="currentColor" />
                      <Star size={17} fill="currentColor" />
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-600">
                  "{person.review}"
                </p>
              </article>
            ))}

          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-orange-500"
          >
            <ArrowRight size={20} />
          </button>

        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((person, index) => (
            <button
              key={person.name}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show testimonials starting with ${person.name}`}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-7 bg-orange-500"
                  : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
