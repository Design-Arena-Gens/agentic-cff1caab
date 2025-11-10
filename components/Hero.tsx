import { SparklesIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const heroDestinations = [
  {
    title: "Coastal Escapes",
    description: "Sun-soaked itineraries with curated stays and immersive local flavors.",
  },
  {
    title: "Cultural Cities",
    description: "AI-guided walks, museums, and private experiences matched to you.",
  },
  {
    title: "Adventure Trails",
    description: "High-energy journeys with balanced rest and mindful recovery.",
  },
];

export default function Hero() {
  return (
    <section className="relative mx-auto mt-12 flex w-[min(1100px,90%)] flex-col gap-10 overflow-hidden rounded-4xl bg-hero-gradient px-8 pb-16 pt-14 text-slate-900 shadow-floating">
      <div className="flex flex-col items-start gap-6 md:max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-planora-twilight">
          <SparklesIcon className="h-4 w-4" /> Smart Travel, Effortless
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-planora-twilight md:text-5xl">
          Plan your dream trip with AI ✈️
        </h1>
        <p className="text-base text-planora-twilight/80 md:text-lg">
          Meet Planora — an intelligent travel co-pilot that learns your style, orchestrates your itinerary, and keeps every moment seamless.
        </p>
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <label className="flex flex-1 items-center gap-3 rounded-full bg-white/80 px-5 py-3 text-sm text-planora-twilight shadow-lg shadow-planora-twilight/10">
            <PaperAirplaneIcon className="h-5 w-5 text-planora-ocean" />
            <input
              className="w-full border-none bg-transparent text-sm outline-none placeholder:text-planora-twilight/50"
              placeholder="Where do you want to go?"
              aria-label="Search destination"
            />
          </label>
          <Link
            href="#planner"
            className="inline-flex items-center justify-center rounded-full bg-planora-ocean px-6 py-3 text-sm font-semibold text-white shadow-md shadow-planora-ocean/30 transition hover:bg-planora-ocean/90"
          >
            Start Planning
          </Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {heroDestinations.map((item) => (
          <div
            key={item.title}
            className="group rounded-3xl bg-white/65 p-5 shadow-md shadow-planora-twilight/10 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/90"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-planora-ocean">Top pick</p>
            <h3 className="mt-2 text-lg font-semibold text-planora-twilight">{item.title}</h3>
            <p className="mt-2 text-sm text-planora-twilight/70">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/35 blur-3xl" />
      <div className="pointer-events-none absolute -left-14 bottom-10 h-64 w-64 animate-float rounded-full bg-white/20 blur-3xl" />
    </section>
  );
}
