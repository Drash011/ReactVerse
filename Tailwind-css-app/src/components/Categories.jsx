import {
  Mountain,
  Palmtree,
  Trees,
  Sun,
  PawPrint,
  Footprints,
  TentTree,
  CarFront,
} from "lucide-react";

const categories = [
  {
    name: "Mountains",
    icon: Mountain,
    color: "bg-green-100 text-green-700",
    destination: "Mountains",
  },
  {
    name: "Beaches",
    icon: Palmtree,
    color: "bg-sky-100 text-sky-600",
    destination: "Beaches",
  },
  {
    name: "Forests",
    icon: Trees,
    color: "bg-emerald-100 text-emerald-700",
    destination: "Forests",
  },
  {
  name: "Deserts",
  icon: Sun,
  color: "bg-orange-100 text-orange-600",
  destination: "Deserts",
},
  {
    name: "Wildlife",
    icon: PawPrint,
    color: "bg-red-100 text-red-600",
    destination: "Wildlife",
  },
  {
    name: "Trekking",
    icon: Footprints,
    color: "bg-violet-100 text-violet-700",
    destination: "Trekking",
  },
  {
    name: "Camping",
    icon: TentTree,
    color: "bg-amber-100 text-amber-600",
    destination: "Camping",
  },
  {
    name: "Road Trips",
    icon: CarFront,
    color: "bg-rose-100 text-rose-600",
    destination: "Road Trips",
  },
];

export default function Categories() {
  return (
    <section id="experiences" className="bg-[#FFFCF7] py-8 sm:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-3 gap-y-7 px-4 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-8 lg:px-8">
        {categories.map(({ name, icon: Icon, color, destination }) => (
          <a
            key={name}
            href={`#destinations`}
            aria-label={`Explore ${destination}`}
            className="group flex flex-col items-center text-center"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full ${color} transition duration-300 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-lg sm:h-16 sm:w-16`}
            >
              <Icon size={27} strokeWidth={2.3} />
            </span>

            <span className="mt-3 text-xs font-bold text-slate-800 transition group-hover:text-orange-600 sm:text-sm">
              {name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
