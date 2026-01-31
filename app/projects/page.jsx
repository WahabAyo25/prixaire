// app/projects/page.jsx (or your specific brief page)
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechnologyBriefsHero from "@/components/TechnologyBriefsHero";
import TechnologyBriefContent from "@/components/TechnologyBriefContent"; // <-- Import
import FieldPerspectiveHero from "@/components/FieldPerspectiveHero";
import FieldPerspectiveContent from "@/components/FieldPerspectiveContent";
import GlobalTrendHero from "@/components/GlobalTrendHero";
import GlobalTrendsContent from "@/components/GlobalTrendsContent";
import EsgHero from "@/components/EsgHero";
import EsgContent from "@/components/EsgContent";
import InvestmentHero from "@/components/InvestmentHero";
import InvestmentContent from "@/components/InvestmentContent";

export default function TechnologyBriefsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <div id="sec-technology-briefs" className="scroll-mt-28">
        <TechnologyBriefsHero />
      </div>

      <TechnologyBriefContent />

      <div id="sec-field-perspectives" className="scroll-mt-28">
        <FieldPerspectiveHero />
      </div>
      <FieldPerspectiveContent />

      <div id="sec-global-trends" className="scroll-mt-28">
        <GlobalTrendHero />
      </div>
      <GlobalTrendsContent />

      <div id="sec-esg" className="scroll-mt-28">
        <EsgHero />
      </div>
      <EsgContent />

      <div id="sec-investment-risk" className="scroll-mt-28">
        <InvestmentHero />
      </div>
      <InvestmentContent />

      <Footer />
    </main>
  );
}