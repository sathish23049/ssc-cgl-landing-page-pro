import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";
import instructorImg from "@/assets/instructor.jpg";

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-saffron/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Success Stories & Expert Guidance
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our successful students and experienced faculty
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Instructor Section */}
          <Card className="hover:shadow-xl transition-shadow animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <img
                    src={instructorImg}
                    alt="Dr. Rajesh Shankar - Lead Faculty"
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                  <Badge className="absolute -bottom-2 -right-2 bg-saffron text-white">
                    Faculty
                  </Badge>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-primary">Dr. Rajesh Shankar</h3>
                    <Badge variant="outline">UPSC Qualified</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    Lead Faculty - Quantitative Aptitude & Reasoning
                  </p>
                  
                  <Quote className="w-6 h-6 text-saffron mb-3" />
                  
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "Success in SSC CGL requires not just knowledge but strategic preparation. At Shankar Banking Academy, we focus on building both conceptual clarity and exam temperament. Our systematic approach has helped thousands achieve their government job dreams."
                  </blockquote>
                  
                  <div className="mt-4 text-sm text-muted-foreground">
                    15+ years teaching experience • 2000+ successful students
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Student Testimonial */}
          <Card className="hover:shadow-xl transition-shadow animate-slide-up">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary">Priya Sharma</h3>
                    <p className="text-sm text-muted-foreground">Selected as Income Tax Inspector</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Success Story</Badge>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-6 h-6 text-saffron" />
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "The structured approach at Shankar Banking Academy made all the difference. The mock tests were exactly like the real exam, and the faculty's guidance helped me crack SSC CGL in my first attempt. The weekly performance analysis helped me identify and improve my weak areas."
                </blockquote>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-green-800">Tier-I Score:</span>
                      <span className="ml-2">164/200</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Tier-II Score:</span>
                      <span className="ml-2">342/400</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Preparation Time:</span>
                      <span className="ml-2">8 months</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Final Rank:</span>
                      <span className="ml-2">142 (General)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Additional testimonials in a smaller format */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in">
          <Card className="text-center p-6">
            <CardContent>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm italic mb-3">
                "Excellent faculty and comprehensive study material. Cleared SSC CGL on first attempt!"
              </p>
              <p className="font-semibold text-primary">Amit Kumar</p>
              <p className="text-xs text-muted-foreground">Assistant Section Officer</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm italic mb-3">
                "The mock tests and analysis sessions were game-changers. Highly recommend!"
              </p>
              <p className="font-semibold text-primary">Sneha Patel</p>
              <p className="text-xs text-muted-foreground">Central Excise Inspector</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm italic mb-3">
                "Great teaching methodology and personal attention to each student's progress."
              </p>
              <p className="font-semibold text-primary">Rahul Singh</p>
              <p className="text-xs text-muted-foreground">Junior Statistical Officer</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;