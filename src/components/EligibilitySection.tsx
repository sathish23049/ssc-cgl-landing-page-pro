import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, GraduationCap, Users } from "lucide-react";

const EligibilitySection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Eligibility Criteria
          </h2>
          <p className="text-lg text-muted-foreground">
            Check if you meet the requirements for SSC CGL 2024
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-slide-up">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calendar className="w-12 h-12 text-saffron mx-auto mb-2" />
              <CardTitle className="text-xl">Age Limit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">18 - 30 years</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  General category candidates (varies by post)
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <GraduationCap className="w-12 h-12 text-saffron mx-auto mb-2" />
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Graduate Degree</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Bachelor's degree from recognized university
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-saffron mx-auto mb-2" />
              <CardTitle className="text-xl">Relaxation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 justify-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>OBC: +3 years</span>
                </div>
                <div className="flex items-center gap-2 justify-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>SC/ST: +5 years</span>
                </div>
                <div className="flex items-center gap-2 justify-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>PWD: +10 years</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;