import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Crown, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

const CohortsSection = () => {
  const [activeTab, setActiveTab] = useState("non-tech");

  const cohorts = [
    {
      id: "non-tech",
      title: "Placement Readiness – Non-Tech",
      description: "Master aptitude, communication, and employability skills with AI-driven practice and real placement support.",
      icon: CheckCircle,
      badge: "Popular",
      highlights: [
        "Aptitude + Communication Training",
        "AI-Powered Mock Interviews", 
        "ATS-Optimized Resumes",
        "360° Platform Access",
        "Guaranteed Job Opportunities"
      ],
      features: [
        { name: "Duration", value: "3 Months" },
        { name: "Placement Support", value: "Yes, Guaranteed" },
        { name: "Resources", value: "150+ hours of content" },
        { name: "Certification", value: "Industry Recognized" }
      ]
    },
    {
      id: "tech-non-tech",
      title: "Placement Readiness – Tech + Non-Tech",
      description: "Blended program combining coding, aptitude, and communication for diverse career pathways.",
      icon: Star,
      badge: "Comprehensive",
      highlights: [
        "All Non-Tech Features Included",
        "Coding & Domain Skills",
        "Competitive Programming + Projects",
        "Company-Specific Prep",
        "Guaranteed Job Opportunities"
      ],
      features: [
        { name: "Duration", value: "4 Months" },
        { name: "Placement Support", value: "Yes, Guaranteed" },
        { name: "Resources", value: "200+ hours of content" },
        { name: "Certification", value: "Industry Recognized" }
      ]
    },
    {
      id: "elite",
      title: "Elite Batch– Poster Boys/Girls",
      description: "Exclusive track for high-potential students aiming for premium recruiter access and top CTCs.",
      icon: Crown,
      badge: "Elite",
      highlights: [
        "Handpicked, High-Potential Students",
        "Personalized Mentorship from Experts",
        "Leadership & CXO Access",
        "Exclusive Fast-Track Drives", 
        "High-Package Outcomes"
      ],
      features: [
        { name: "Duration", value: "5 Months" },
        { name: "Placement Support", value: "Premium Access" },
        { name: "Resources", value: "250+ hours of content" },
        { name: "Certification", value: "Elite Recognition" }
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background to-secondary/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(125,10,50,0.03),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(30,98,176,0.03),transparent_30%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Choose the Right Program for Your Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every student learns differently. Our programs ensure every career story finds its path.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs 
            defaultValue="non-tech" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex flex-col items-center mb-12">
              <TabsList className="h-14 p-1 bg-muted/80 backdrop-blur-sm rounded-full mb-2 w-auto">
                {cohorts.map((cohort) => (
                  <TabsTrigger 
                    key={cohort.id} 
                    value={cohort.id}
                    className={`px-6 py-3 rounded-full text-base transition-all duration-300 font-medium ${
                      activeTab === cohort.id 
                        ? "bg-white text-foreground shadow-lg" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cohort.title.split('–')[0].trim()}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="flex gap-2 items-center text-muted-foreground">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-sm">Swipe or click to explore programs</span>
                <span className="w-2 h-2 bg-accent rounded-full"></span>
              </div>
            </div>

            {cohorts.map((cohort) => (
              <TabsContent 
                key={cohort.id} 
                value={cohort.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  key={cohort.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl border border-muted"
                >
                  <div className="bg-primary h-2 w-full"></div>
                  
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-10">
                      {/* Left column - Overview */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center">
                            <cohort.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <Badge className="bg-primary text-white mb-1">
                              {cohort.badge}
                            </Badge>
                            <h3 className="text-2xl font-bold text-foreground">{cohort.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-8 text-lg">
                          {cohort.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {cohort.features.map((feature, idx) => (
                            <div key={idx} className="bg-secondary/50 p-4 rounded-lg">
                              <div className="text-sm text-muted-foreground">{feature.name}</div>
                              <div className="text-foreground font-medium">{feature.value}</div>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          size="lg" 
                          className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8"
                        >
                          Request Demo
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                      
                      {/* Right column - Highlights */}
                      <div className="flex-1 bg-secondary/30 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground text-lg mb-6">Key Highlights:</h4>
                        <div className="space-y-5">
                          {cohort.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3 group/item">
                              <div className="w-6 h-6 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CohortsSection;