import { interests, itineraries } from "../lib/data";
import { ChatBubbleLeftRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function PlannerSection() {
  return (
    <section id="planner" className="mx-auto flex w-[min(1100px,90%)] flex-col gap-12 py-24">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold text-planora-twilight">AI Trip Planner</h2>
          <p className="text-planora-twilight/70">
            Share your dream destination, ideal pace, and budget. Planora blends real-time data, trend analysis, and your personal style to orchestrate itineraries that feel hand-crafted.
          </p>
          <div className="rounded-3xl bg-white/80 p-6 shadow-floating backdrop-blur-xl">
            <form className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-planora-twilight/70">Destination</label>
                <input className="rounded-2xl border border-white/0 bg-white/70 px-4 py-3 text-sm shadow-inner shadow-planora-twilight/5 outline-none focus:border-planora-ocean/60" placeholder="e.g. Amalfi Coast" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-planora-twilight/70">Duration</label>
                <input className="rounded-2xl border border-white/0 bg-white/70 px-4 py-3 text-sm shadow-inner shadow-planora-twilight/5 outline-none focus:border-planora-ocean/60" placeholder="7 days" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-planora-twilight/70">Budget</label>
                <input className="rounded-2xl border border-white/0 bg-white/70 px-4 py-3 text-sm shadow-inner shadow-planora-twilight/5 outline-none focus:border-planora-ocean/60" placeholder="$2500" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-planora-twilight/70">Interests</label>
                <select className="rounded-2xl border border-white/0 bg-white/70 px-4 py-3 text-sm shadow-inner shadow-planora-twilight/5 outline-none focus:border-planora-ocean/60">
                  {interests.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-planora-twilight px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-planora-twilight/30 transition hover:bg-planora-twilight/90"
                >
                  <SparklesIcon className="h-5 w-5" /> Generate Itinerary
                </button>
              </div>
            </form>
            <p className="mt-4 flex items-center gap-2 text-xs text-planora-twilight/50">
              <ChatBubbleLeftRightIcon className="h-4 w-4" /> Planora learns from your preferences instantly. Adjust and iterate in seconds.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          {itineraries.map((day) => (
            <article
              key={day.day}
              className="rounded-3xl bg-card-gradient p-6 shadow-md shadow-planora-twilight/10 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-planora-ocean">{day.day}</p>
              <h3 className="mt-1 text-lg font-semibold text-planora-twilight">{day.title}</h3>
              <p className="mt-2 text-sm text-planora-twilight/70">{day.description}</p>
              <div className="mt-4 space-y-4">
                {day.timeSlots.map((slot) => (
                  <div key={slot.time} className="rounded-2xl bg-white/60 px-4 py-3 text-sm text-planora-twilight/80 shadow-inner shadow-planora-twilight/5">
                    <p className="font-semibold text-planora-twilight">{slot.time}</p>
                    <p>{slot.activity}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="relative mt-4 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-planora-twilight/95 px-6 py-6 text-white shadow-floating">
        <div>
          <p className="text-sm uppercase tracking-[0.35rem] text-white/70">Live AI Assistant</p>
          <h3 className="mt-1 text-lg font-semibold">Planora Pulse monitors changes & adapts instantly</h3>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-planora-twilight shadow-lg shadow-white/30 transition hover:bg-white/90">
          Open Chat Assistant
        </button>
        <span className="pointer-events-none absolute -right-4 top-1/2 hidden h-14 w-14 -translate-y-1/2 rounded-full bg-white/20 blur-xl md:block" />
      </div>
    </section>
  );
}
