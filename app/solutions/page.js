// app/solutions/page.jsx
import Navbar from "@/components/Navbar";
import SolutionsHero from "@/components/SolutionsHero";
import SolutionsDetail from "@/components/SolutionsDetail";
import HowItWorks from "@/components/HowItWorks";
import KeyBenefits from "@/components/KeyBenefits";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import OurProcess from "@/components/OurProcess";
import OurValues from "@/components/OurValues";
import ContactCTA from "@/components/ContactCTA"; // <-- Import it
import Footer from "@/components/Footer"; // <-- Import your footer

export default function SolutionsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <SolutionsHero />
      <SolutionsDetail />
      <HowItWorks />
      <KeyBenefits />
      <SolutionsShowcase />
      <OurProcess />
      <OurValues />
      <ContactCTA /> {/* <-- Add it here */}
      <Footer />     {/* <-- End with Footer */}
    </main>
  );
}