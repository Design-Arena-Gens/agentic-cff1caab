export default function Navbar() {
  return (
    <header className="sticky top-6 z-50 mx-auto flex w-[min(1100px,90%)] items-center justify-between rounded-3xl bg-white/70 px-6 py-4 shadow-floating backdrop-blur-xl">
      <span className="text-xl font-semibold tracking-tight text-planora-twilight">Planora</span>
      <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
        <a href="#planner" className="transition hover:text-planora-ocean">AI Planner</a>
        <a href="#recommendations" className="transition hover:text-planora-ocean">Destinations</a>
        <a href="#experience" className="transition hover:text-planora-ocean">Experience</a>
      </nav>
      <a
        href="#planner"
        className="rounded-full bg-planora-ocean px-5 py-2 text-sm font-semibold text-white shadow-md shadow-planora-ocean/30 transition hover:bg-planora-ocean/90"
      >
        Start Planning
      </a>
    </header>
  );
}
