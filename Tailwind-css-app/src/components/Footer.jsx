import { useState } from "react";
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Heart,
  Camera,
  Users,
  PlayCircle,
  MessageCircle,
  Send,
} from "lucide-react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    alert("Thank you for subscribing to RoamQuest!");
    setEmail("");
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Categories", href: "#categories" },
    { name: "Destinations", href: "#destinations" },
    { name: "About Us", href: "#about" },
    { name: "Packages", href: "#packages" },
    { name: "Travel Guides", href: "#guides" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: Camera,
      href: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      icon: Users,
      href: "https://www.facebook.com/",
    },
    {
      name: "YouTube",
      icon: PlayCircle,
      href: "https://www.youtube.com/",
    },
    {
      name: "X",
      icon: MessageCircle,
      href: "https://x.com/",
    },
  ];

  return (
    <footer className="bg-[#10251f] text-gray-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="mb-5 inline-flex items-center gap-2 text-2xl font-bold text-white"
            >
              <Compass size={30} className="text-orange-500" />
              <span>
                Roam<span className="text-orange-500">Quest</span>
              </span>
            </a>

            <p className="mb-6 max-w-sm text-sm leading-7 text-gray-400">
              Discover amazing destinations, explore beautiful places, and
              create unforgettable memories with RoamQuest.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm transition-colors duration-300 hover:text-orange-500"
                  >
                    <ArrowRight
                      size={15}
                      className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-orange-500"
                />
                <span className="text-sm leading-6 text-gray-400">
                  Surat, Gujarat, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={19} className="shrink-0 text-orange-500" />
                <a
                  href="tel:+910000000000"
                  className="text-sm transition-colors hover:text-orange-500"
                >
                  +91 00000 00000
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-orange-500"
                />
                <a
                  href="mailto:hello@roamquest.com"
                  className="break-all text-sm transition-colors hover:text-orange-500"
                >
                  hello@roamquest.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Newsletter
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-400">
              Get travel inspiration, destination guides, and the latest offers
              delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex items-center rounded-lg border border-gray-600 bg-[#1b332b] transition-colors focus-within:border-orange-500">
                <Mail
                  size={18}
                  className="ml-3 shrink-0 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                  className="w-full min-w-0 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-600"
              >
                Subscribe
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-700 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} RoamQuest. All rights reserved.
            </p>

            <p className="flex items-center gap-1 text-sm text-gray-400">
              Made for travelers with
              <Heart
                size={15}
                className="fill-orange-500 text-orange-500"
              />
              <span className="font-medium text-white">RoamQuest</span>
            </p>

            <div className="flex gap-5 text-sm">
              <a
                href="#privacy"
                className="transition-colors hover:text-orange-500"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="transition-colors hover:text-orange-500"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
