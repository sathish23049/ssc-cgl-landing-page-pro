import HeroSection from "@/components/HeroSection";
import SSCGLInfo from "@/components/SSCGLInfo";
import EligibilitySection from "@/components/EligibilitySection";
import ExamPattern from "@/components/ExamPattern";
import CutoffTable from "@/components/CutoffTable";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialSection from "@/components/TestimonialSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SSCGLInfo />
      <EligibilitySection />
      <ExamPattern />
      <CutoffTable />
      <WhyChooseUs />
      <TestimonialSection />
      <CallToAction />
    </div>
  );
};

export default Index;
