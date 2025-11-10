import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PlannerSection from "../components/PlannerSection";
import DestinationGrid from "../components/DestinationGrid";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";

export default function Home() {
  return (
    <main className="relative pb-20">
      <Navbar />
      <Hero />
      <PlannerSection />
      <DestinationGrid />
      <ExperienceSection />
      <Footer />
      <FloatingChat />
    </main>
  );
}
