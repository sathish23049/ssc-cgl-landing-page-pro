import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Users, Award } from "lucide-react";

const SSCGLInfo = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            What is SSC CGL?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              The <strong>Staff Selection Commission Combined Graduate Level (SSC CGL)</strong> is one of India's most prestigious government job examinations. It opens doors to various Group B and Group C posts in different ministries and departments of the Government of India.
            </p>
            <p>
              This comprehensive examination consists of four tiers - from computer-based tests to descriptive papers and skill tests. With thousands of vacancies announced annually across posts like Assistant Section Officer, Income Tax Inspector, Central Excise Inspector, and more, SSC CGL offers excellent career opportunities with job security, attractive salary packages, and growth prospects.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-4">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">4 Tier Structure</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive examination covering all aspects
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-4">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Multiple Posts</h3>
              <p className="text-sm text-muted-foreground">
                Various Group B & C positions available
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-4">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Lakhs Apply</h3>
              <p className="text-sm text-muted-foreground">
                Highly competitive with massive participation
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-4">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Prestigious Career</h3>
              <p className="text-sm text-muted-foreground">
                Government job with excellent benefits
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SSCGLInfo;