import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Trophy } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            SSC CGL Coaching @<br />
            <span className="text-saffron">Shankar Banking Academy</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Tier I to IV Full Coverage | 100% Job-Focused Coaching
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Join Now <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Users className="w-8 h-8 text-saffron" />
              <div>
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm">Students Trained</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Trophy className="w-8 h-8 text-saffron" />
              <div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Star className="w-8 h-8 text-saffron" />
              <div>
                <div className="text-2xl font-bold">UPSC</div>
                <div className="text-sm">Qualified Faculty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;