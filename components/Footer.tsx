export default function Footer() {
  return (
    <footer className="mx-auto mt-16 w-[min(1100px,90%)] border-t border-white/40 py-10 text-center text-sm text-planora-twilight/60">
      © {new Date().getFullYear()} Planora. Crafted for explorers with AI intelligence.
    </footer>
  );
}
