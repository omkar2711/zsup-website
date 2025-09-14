import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Crown, ChevronRight, BookOpen, Code, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

const CohortsSection = () => {
  const [activeTab, setActiveTab] = useState("management");

  const cohorts = [
    {
      id: "management",
      title: "Management Readiness Program",
      description: "Preparing BBA/MBA students with aptitude, communication, and domain expertise for roles in consulting, sales, marketing, operations, and more.",
      icon: BookOpen,
      badge: "Management",
      color: "hsl(215, 70%, 50%)", // Blue
      highlights: [
        "Aptitude & communication training",
        "Management modules in Sales, Marketing, Finance & Operations",
        "Case study analysis & problem-solving practice",
        "AI-powered mock interviews + detailed reports",
        "ATS-optimized resumes tailored for recruiters",
        "Mentorship + placement readiness workshops"
      ],
      features: [
        { name: "Duration", value: "Flexible semester-based (5th or 7th)" },
        { name: "Resources", value: "ZSkillHub access" },
        { name: "Certification", value: "ZSkillHub + Virtual Internship" },
        { name: "Placement Support", value: "Mock interviews + mentorship" }
      ]
    },
    {
      id: "technology",
      title: "Technology Readiness Program",
      description: "Equipping engineering and BCA students with modern tech stacks, coding practice, and corporate skills for developer and data-driven careers.",
      icon: Code,
      badge: "Technology",
      color: "hsl(330, 70%, 40%)", // Purple
      highlights: [
        "Full Stack Development & Data Science modules",
        "Coding, system design & problem-solving practice",
        "Hands-on project portfolio aligned to industry needs",
        "Unlimited AI-powered coding interviews",
        "ATS-optimized tech resumes",
        "Exposure to real-world tools & hiring workflows"
      ],
      features: [
        { name: "Duration", value: "Flexible semester-based (5th or 7th)" },
        { name: "Resources", value: "ZSkillHub access" },
        { name: "Certification", value: "ZSkillHub + Virtual Internship" },
        { name: "Placement Support", value: "Portfolio-building + mentorship" }
      ]
    },
    {
      id: "generalist",
      title: "Smart Generalist Program",
      description: "Helping B.A., B.Com, and B.Sc graduates build aptitude, communication, and career readiness for versatile cross-functional roles across industries.",
      icon: Users,
      badge: "Generalist",
      color: "hsl(45, 90%, 50%)", // Gold
      highlights: [
        "Aptitude & communication foundation",
        "Exposure to multiple career pathways",
        "Transferable skill-building for cross-functional roles",
        "Adaptive AI-powered mock interviews",
        "ATS-friendly resume builder",
        "Mentorship + structured placement support"
      ],
      features: [
        { name: "Duration", value: "Flexible semester-based (5th or 7th)" },
        { name: "Resources", value: "ZSkillHub access" },
        { name: "Certification", value: "ZSkillHub + Virtual Internship" },
        { name: "Placement Support", value: "Resume workshops + job drives" }
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
    <section className="py-24 bg-primary relative overflow-hidden bg-gradient-to-br from-background to-secondary/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(125,10,50,0.03),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(30,98,176,0.03),transparent_30%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Choose The Right Program For Your Institution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Customized employability solutions designed for your campus and the unique needs of your students.
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
                    style={{
                      ...(activeTab === cohort.id ? { 
                        borderBottom: `3px solid ${cohort.color}`,
                        color: cohort.color 
                      } : {})
                    }}
                  >
                    {cohort.title.split('–')[0].trim()}
                  </TabsTrigger>
                ))}
              </TabsList>
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
                  <div className="bg-primary h-2 w-full" style={{ backgroundColor: cohort.color }}></div>
                  
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-10">
                      {/* Left column - Overview */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                               style={{ backgroundColor: `${cohort.color}10` }}>
                            <cohort.icon className="w-6 h-6" style={{ color: cohort.color }} />
                          </div>
                          <div>
                            <Badge className="text-white mb-1" style={{ backgroundColor: cohort.color }}>
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
                            <div key={idx} className="p-4 rounded-lg" 
                                 style={{ backgroundColor: `${cohort.color}10` }}>
                              <div className="text-sm text-muted-foreground">{feature.name}</div>
                              <div className="text-foreground font-medium" style={{ color: cohort.color }}>{feature.value}</div>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          size="lg" 
                          className="font-medium px-8 text-white hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: cohort.color, borderColor: cohort.color }}
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
                              <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                   style={{ backgroundColor: `${cohort.color}20` }}>
                                <CheckCircle className="w-4 h-4" style={{ color: cohort.color }} />
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full group"
              onClick={() => window.location.href = '/offerings'}
            >
              Explore All Program Details
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CohortsSection;