import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Target, 
  BarChart3, 
  Monitor, 
  Users, 
  Clock,
  CheckCircle,
  BookOpen
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "UPSC Qualified Faculty",
      description: "Learn from experienced instructors who have cleared prestigious government examinations themselves",
      highlight: "Expert Guidance"
    },
    {
      icon: Target,
      title: "Tier-wise Coaching & Practice",
      description: "Structured preparation covering all four tiers with dedicated practice sessions for each level",
      highlight: "Comprehensive Coverage"
    },
    {
      icon: BarChart3,
      title: "Mock Tests & Weekly Analysis",
      description: "Regular mock tests with detailed performance analysis to track your progress and improve weak areas",
      highlight: "Performance Tracking"
    },
    {
      icon: Monitor,
      title: "Online + Offline Modes",
      description: "Flexible learning options with both classroom sessions and online resources for convenience",
      highlight: "Flexible Learning"
    },
    {
      icon: BookOpen,
      title: "Updated Study Material",
      description: "Latest curriculum-based study materials and question banks updated according to recent exam patterns",
      highlight: "Current Content"
    },
    {
      icon: Users,
      title: "Doubt Clearing Sessions",
      description: "Regular doubt clearing sessions and one-on-one mentoring to ensure no question goes unanswered",
      highlight: "Personal Attention"
    },
    {
      icon: Clock,
      title: "Time Management Training",
      description: "Special focus on speed and accuracy with time-bound practice sessions and exam strategies",
      highlight: "Strategic Preparation"
    },
    {
      icon: CheckCircle,
      title: "Proven Success Record",
      description: "Thousands of successful candidates who secured government jobs through our coaching programs",
      highlight: "Track Record"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Shankar Banking Academy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful candidates who achieved their dream government jobs with our expert coaching and comprehensive preparation strategy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-saffron text-white text-xs px-2 py-1 rounded-full font-medium">
                        {feature.highlight}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-saffron/5 rounded-2xl p-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Students Successfully Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate in Selections</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;