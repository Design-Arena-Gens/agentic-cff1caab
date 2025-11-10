import Image from "next/image";
import { destinations } from "../lib/data";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default function DestinationGrid() {
  return (
    <section id="recommendations" className="mx-auto w-[min(1100px,90%)] py-24">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35rem] text-planora-ocean">Curated for you</p>
          <h2 className="mt-2 text-3xl font-semibold text-planora-twilight">Destination Recommendations</h2>
        </div>
        <p className="max-w-xl text-sm text-planora-twilight/70">
          Discover destinations matched to your travel style. Planora blends trending insights with your preferences to suggest cityscapes, coastlines, and hidden gems ready for exploration.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <article key={destination.name} className="group flex flex-col overflow-hidden rounded-3xl bg-white/80 shadow-floating backdrop-blur-xl transition hover:-translate-y-1">
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-planora-twilight">
                <MapPinIcon className="h-4 w-4 text-planora-ocean" />
                {destination.tags[0]}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-lg font-semibold text-planora-twilight">{destination.name}</h3>
              <p className="text-sm text-planora-twilight/70">{destination.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {destination.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-planora-ocean/10 px-3 py-1 text-xs font-semibold text-planora-ocean">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
