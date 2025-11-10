import { testimonials } from "../lib/data";
import { BoltIcon, GlobeAltIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Adaptive Itineraries",
    description: "Real-time adjustments for weather, events, and your changing mood.",
    icon: BoltIcon,
  },
  {
    title: "Global Insights",
    description: "Trusted local experts and data-backed recommendations for each region.",
    icon: GlobeAltIcon,
  },
  {
    title: "Guided Co-planning",
    description: "Collaborate with Planora's AI concierge to refine every detail.",
    icon: CursorArrowRaysIcon,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-[min(1100px,90%)] pb-24">
      <div className="grid gap-12 rounded-4xl bg-white/70 p-10 shadow-floating backdrop-blur-xl md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35rem] text-planora-ocean">Designed to delight</p>
          <h2 className="text-3xl font-semibold text-planora-twilight">Experience travel planning that feels magical</h2>
          <div className="space-y-5">
            {features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex gap-4 rounded-3xl bg-planora-ocean/5 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-planora-ocean/20 text-planora-ocean">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-planora-twilight">{title}</h3>
                  <p className="text-sm text-planora-twilight/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-3xl bg-card-gradient p-6 text-planora-twilight shadow-lg shadow-planora-twilight/10"
            >
              <p className="text-sm text-planora-twilight/70">“{testimonial.quote}”</p>
              <footer className="mt-4 text-sm font-semibold text-planora-twilight">
                {testimonial.name}
                <span className="ml-2 font-normal text-planora-twilight/60">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
