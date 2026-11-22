import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClientLogos } from './components/ClientLogos';
import { StatementSection } from './components/StatementSection';
import { ServicesSection } from './components/ServicesSection';
import { ApproachSection } from './components/ApproachSection';
import { WellnessPlatformSection } from './components/WellnessPlatformSection';
import { ProcessSection } from './components/ProcessSection';
import { ExpertsSection } from './components/ExpertsSection';
import { MoodTagsMarquee } from './components/MoodTagsMarquee';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { DailyMoodMeterSection } from './components/DailyMoodMeterSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function NavbarWrapper() {
  return (
    <div className="bg-[#0C2E1B]">
      <Navbar />
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-[#0C2E1B]">
      <NavbarWrapper />
      <main className="flex-1">
        {/* Dark Forest Hero Wrapper with Subtle Concentric Rings */}
        <div className="relative bg-[#0C2E1B] overflow-hidden min-h-[calc(100svh-56px)] flex flex-col justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[720px] h-[720px] rounded-full border border-white/[0.04]" />
            <div className="absolute w-[1040px] h-[1040px] rounded-full border border-white/[0.03]" />
          </div>
          <HeroSection />
        </div>

        <ClientLogos />
        <StatementSection />
        <ServicesSection />
        <ApproachSection />
        <WellnessPlatformSection />
        <ProcessSection />
        <ExpertsSection />
        <MoodTagsMarquee />
        <TestimonialsSection />
        <FAQSection />
        <DailyMoodMeterSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
