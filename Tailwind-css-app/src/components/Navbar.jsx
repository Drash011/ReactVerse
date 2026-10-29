
import { useState } from "react";
import { Mountain, Search, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Packages", href: "#packages" },
  { label: "Travel Guide", href: "#guides" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15 bg-slate-950/25 text-white backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <Mountain size={35} strokeWidth={2.3} className="text-orange-500" />
          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            RoamQuest
          </span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/85 transition hover:text-orange-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button
            aria-label="Search"
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <Search size={21} />
          </button>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            Plan Your Trip <ArrowRight size={17} />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/30 p-2 xl:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 xl:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-3 text-sm text-white/90 transition hover:text-orange-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-bold"
          >
            Plan Your Trip <ArrowRight size={17} />
          </a>
        </div>
      )}
    </header>
  );
}
