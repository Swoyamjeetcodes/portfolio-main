import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import ContentsMenu from "@/components/ContentsMenu";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-28">
      <Navbar />
      <ContentsMenu />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <OpenSourceSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
