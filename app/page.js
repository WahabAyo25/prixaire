// app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CompanyMarquee from "@/components/CompanyMarquee";
import NigeriaMap from "@/components/NigeriaMap";
import PurposeSection from "@/components/PurposeSection";
import StatsSection from "@/components/StatsSection";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import IndustriesSection from "@/components/IndustriesSection"; // <-- Import the new component
import ApplicationsCarousel from "@/components/ApplicationsCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <CompanyMarquee />
      <NigeriaMap />
      <PurposeSection />
      <StatsSection />
      <PerformanceMetrics />
      <IndustriesSection /> 
       <ApplicationsCarousel />
       <TestimonialsCarousel />
       <Footer />
    </main>
  );
}