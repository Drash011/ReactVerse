
import {
  Users,
  MapPin,
  BriefcaseBusiness,
  Star,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "10K+",
    label: "Happy Travelers",
  },
  {
    icon: MapPin,
    number: "50+",
    label: "Destinations",
  },
  {
    icon: BriefcaseBusiness,
    number: "100+",
    label: "Curated Experiences",
  },
  {
    icon: Star,
    number: "4.9",
    label: "Average Rating",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-white py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-12 lg:gap-8 lg:px-8">

        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="./src/images/about.jpg"
              alt="Traveler enjoying a breathtaking mountain landscape"
              className="h-70 w-full object-cover sm:h-90 lg:h-80"
            />

            <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
              <p className="font-serif text-2xl font-bold sm:text-3xl">
                Collect Moments,
              </p>
              <p className="font-serif text-2xl font-bold text-orange-400 sm:text-3xl">
                Not Things.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
            Why Travel with RoamQuest
          </p>

          <h2 className="font-serif text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Turn Your Travel Dreams Into Reality
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            We craft meaningful travel experiences that connect you with
            nature, culture and incredible people around the world.
            Discover extraordinary destinations and create stories worth
            sharing.
          </p>

          <a
            href="#guides"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Our Story
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-7 border-t border-slate-200 pt-7 sm:grid-cols-4 lg:col-span-3 lg:grid-cols-1 lg:gap-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          {stats.map(({ icon: Icon, number, label }) => (
            <div
              key={label}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Icon size={25} strokeWidth={2.2} />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-950">
                  {number}
                </h3>

                <p className="mt-0.5 text-xs leading-5 text-slate-500 sm:text-sm">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
