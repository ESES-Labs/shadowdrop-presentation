import { useState, useRef, useEffect } from "react";
import SlideWrapper from "@/components/presentation/SlideWrapper";
import TitleSlide from "@/components/presentation/TitleSlide";
import ProblemSlide from "@/components/presentation/ProblemSlide";
import SolutionSlide from "@/components/presentation/SolutionSlide";
import HowItWorksSlide from "@/components/presentation/HowItWorksSlide";
import TechStackSlide from "@/components/presentation/TechStackSlide";
import FeaturesSlide from "@/components/presentation/FeaturesSlide";
import CTASlide from "@/components/presentation/CTASlide";
import SlideIndicator from "@/components/presentation/SlideIndicator";
import PresentationNav from "@/components/presentation/PresentationNav";

const slides = [
  { id: "title", component: TitleSlide },
  { id: "problem", component: ProblemSlide },
  { id: "solution", component: SolutionSlide },
  { id: "how-it-works", component: HowItWorksSlide },
  { id: "tech-stack", component: TechStackSlide },
  { id: "features", component: FeaturesSlide },
  { id: "cta", component: CTASlide },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const slideHeight = window.innerHeight;
      const newSlide = Math.round(scrollPosition / slideHeight);
      setCurrentSlide(Math.min(newSlide, slides.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background">
      <PresentationNav currentSlide={currentSlide} totalSlides={slides.length} />
      <SlideIndicator 
        total={slides.length} 
        current={currentSlide} 
        onSlideClick={scrollToSlide}
      />
      
      <div 
        ref={containerRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            ref={(el) => (slideRefs.current[index] = el)}
          >
            <SlideWrapper>
              <slide.component />
            </SlideWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
