import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Crack SSC CGL 2024 with Us
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the next batch and transform your career with government job security. 
            Limited seats available for personalized attention.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Enroll Now <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Download Syllabus
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-saffron mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm opacity-90">+91 98765 43210</p>
                <p className="text-sm opacity-90">+91 87654 32109</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-saffron mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm opacity-90">info@shankarbanking.com</p>
                <p className="text-sm opacity-90">admissions@shankarbanking.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-saffron mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-sm opacity-90">123 Education Hub</p>
                <p className="text-sm opacity-90">Delhi, India - 110001</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-saffron mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Timing</h3>
                <p className="text-sm opacity-90">Mon - Sat: 9 AM - 7 PM</p>
                <p className="text-sm opacity-90">Sunday: 10 AM - 4 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-saffron/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;