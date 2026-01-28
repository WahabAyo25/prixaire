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
      <div id="technology-briefs">
        <TechnologyBriefsHero />
      </div>
      
      <TechnologyBriefContent /> 

      <div id="field-perspectives">
        <FieldPerspectiveHero />
      </div>
      <FieldPerspectiveContent />

      <div id="global-trends">
        <GlobalTrendHero />
      </div>
      <GlobalTrendsContent />

      <div id="esg-policy">
        <EsgHero />
      </div>
      <EsgContent />

      <div id="investment-risk">
        <InvestmentHero />
      </div>
      <InvestmentContent />

      <Footer />
    </main>
  );
}