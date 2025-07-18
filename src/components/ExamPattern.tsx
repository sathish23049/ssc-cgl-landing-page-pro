import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, FileText, PenTool, Keyboard } from "lucide-react";

const ExamPattern = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            SSC CGL Exam Pattern
          </h2>
          <p className="text-lg text-muted-foreground">
            Understanding the four-tier examination structure
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="tier-1" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <Keyboard className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Tier I - Preliminary Exam</h3>
                    <p className="text-sm text-muted-foreground">Computer Based Test (CBT)</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">Online</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Subjects</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span>General Intelligence & Reasoning</span>
                        <span className="font-semibold">25 Questions</span>
                      </div>
                      <div className="flex justify-between">
                        <span>General Awareness</span>
                        <span className="font-semibold">25 Questions</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quantitative Aptitude</span>
                        <span className="font-semibold">25 Questions</span>
                      </div>
                      <div className="flex justify-between">
                        <span>English Comprehension</span>
                        <span className="font-semibold">25 Questions</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Exam Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Duration: 60 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>Total Questions: 100</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                        <span>Negative Marking: -0.50</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                        <span>Each Question: 2 marks</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="tier-2" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <FileText className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Tier II - Main Exam</h3>
                    <p className="text-sm text-muted-foreground">Computer Based Test (CBT)</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">Online</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-4 text-center">
                        <h4 className="font-semibold mb-2">Paper-I</h4>
                        <p className="text-sm">Quantitative Abilities</p>
                        <p className="text-xs text-muted-foreground">100 Questions | 2 Hours</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4 text-center">
                        <h4 className="font-semibold mb-2">Paper-II</h4>
                        <p className="text-sm">English Language</p>
                        <p className="text-xs text-muted-foreground">200 Questions | 2 Hours</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4 text-center">
                        <h4 className="font-semibold mb-2">Paper-III</h4>
                        <p className="text-sm">Statistics (if applicable)</p>
                        <p className="text-xs text-muted-foreground">100 Questions | 2 Hours</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="tier-3" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <PenTool className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Tier III - Descriptive Exam</h3>
                    <p className="text-sm text-muted-foreground">Pen & Paper Mode</p>
                  </div>
                  <Badge variant="outline" className="ml-auto">Offline</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Essay/Letter/Application writing to test language skills in English/Hindi
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Duration</h4>
                      <p className="text-sm">60 minutes</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Maximum Marks</h4>
                      <p className="text-sm">100 marks</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="tier-4" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <Keyboard className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Tier IV - Skill Test</h3>
                    <p className="text-sm text-muted-foreground">Computer/Data Entry Speed Test</p>
                  </div>
                  <Badge variant="outline" className="ml-auto">As Required</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Computer Proficiency Test (CPT) / Data Entry Speed Test (DEST) for specific posts
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">CPT</h4>
                      <p className="text-sm">Word Processing, Spreadsheets, Generation of Slides</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">DEST</h4>
                      <p className="text-sm">8000 key depressions per hour (English) / 7000 (Hindi)</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ExamPattern;