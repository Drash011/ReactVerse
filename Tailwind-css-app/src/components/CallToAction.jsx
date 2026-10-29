import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('./src/images/call-to-action-bg.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:px-10 md:flex-row md:text-left">
        <div>
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white">
            Ready for Your Next Adventure?
          </p>

          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Let's Make It Happen
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
            Explore new places, meet amazing people and create stories you'll
            tell forever.
          </p>
        </div>

        <a
          href="#booking"
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-orange-500 px-7 py-4 font-bold text-slate-950 shadow-lg transition hover:bg-orange-400"
        >
          Plan Your Trip Now
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
