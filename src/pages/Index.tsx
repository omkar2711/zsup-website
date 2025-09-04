import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import TrustedSection from "@/components/sections/TrustedSection";
import CohortsSection from "@/components/sections/CohortsSection";
import PosterSection from "@/components/sections/PosterSection";
import AdvisorySection from "@/components/sections/AdvisorySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ContactSection from "@/components/sections/ContactSection";
import HiringPartnersSection from "@/components/sections/HiringPartnersSection";
import VirtualInternshipSection from "@/components/sections/VirtualInternshipSection";
import UniversityCertificatesSection from "@/components/sections/UniversityCertificatesSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <AchievementsSection />
      <ProblemsSection />
      <FrameworkSection />
      <div id="partners">
        <TrustedSection />
      </div>
      <div id="programs">
        <CohortsSection />
      </div>
      <HiringPartnersSection />
      <VirtualInternshipSection />
      {/* <UniversityCertificatesSection /> */}
      {/* <CertificatesSection /> */}
      <div id="success">
        <PosterSection />
      </div>
      <div id="about">
        <AdvisorySection />
      </div>
      <TestimonialsSection />
      <WhyChooseSection />
      <FAQSection />
      {/* <CTASection /> */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
