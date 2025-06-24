import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div className="space-y-20">
        <div className="animate-fadeIn">
          <HeroSection />
        </div>
        
        <div className="animate-slideUp delay-100">
          <AboutSection />
        </div>
        
        <div className="animate-slideUp delay-200">
          <ProjectsSection />
        </div>
        
        {/* <div className="animate-slideUp delay-300">
          <TestimonialsSection />
        </div> */}
        
        <div className="animate-slideUp delay-400">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}