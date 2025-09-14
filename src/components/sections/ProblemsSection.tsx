import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, FileText, Network, GraduationCap, CheckCircle, PlayCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const ProblemsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const problems = [
    {
      icon: BookOpen,
      title: "Outdated Curriculum",
      problem: "Curriculum often lags behind industry shifts",
      solution: "Industry-updated modules with guaranteed virtual internships with 450+ recruiters including Practo, Uber, and more",
      details: "Our curriculum is updated every quarter based on industry trends and recruiter feedback"
    },
    {
      icon: Users,
      title: "Interview Preparation",
      problem: "Students aren't prepared for real-world interviews",
      solution: "Unlimited AI-powered mock interviews that adapt to answers and simulate real interview scenarios",
      details: "AI adapts difficulty and questions based on student performance and target companies"
    },
    {
      icon: FileText,
      title: "Resume Quality",
      problem: "Resumes fail to meet recruiter expectations",
      solution: "Placement readiness through ATS-optimized resumes designed to clear hiring filters",
      details: "Our resumes pass through 90% of ATS systems and get 3x more recruiter callbacks"
    },
    {
      icon: Network,
      title: "Limited Networks",
      problem: "Limited access to recruiters and corporate networks",
      solution: "450+ hiring partners, 400+ CXO connects, conclaves, and white-labeled placement drives",
      details: "Direct access to hiring managers and fast-track placement processes"
    },
    {
      icon: GraduationCap,
      title: "Skill Gaps",
      problem: "Students need more than academics to be placement-ready",
      solution: "Guided by educators from IIT, NMIMS, and industry experts from Uber, Microsoft, and more",
      details: "Comprehensive soft skills, communication, and industry readiness training"
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % problems.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + problems.length) % problems.length);
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(125,10,50,0.05),transparent_40%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block px-3 py-1 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            The Missing Link in Higher Education
            </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
             Identifying the barriers that limit employability, and the solutions that unlock success.
          </p>
          <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-highlight to-transparent mx-auto w-40" />
        </div>
        
        {/* Problem/Solution carousel */}
        <div className="max-w-5xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* Left side: Problem */}
              <div className="bg-white rounded-xl shadow-elegant border border-gray-100 p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    {React.createElement(problems[activeIndex].icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-xl">{problems[activeIndex].title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">{problems[activeIndex].problem}</p>
              </div>
              
              {/* Right side: Solution */}
              <div className="bg-white rounded-xl shadow-elegant border border-gray-100 overflow-hidden h-full">
                {/* Solution Header */}
                <div className="bg-primary p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold text-lg">Our Solution</div>
                    </div>
                  </div>
                </div>

                {/* Solution Content */}
                <div className="p-6">
                  <p className="text-foreground font-medium text-lg mb-4">
                    {problems[activeIndex].solution}
                  </p>
                  <p className="text-muted-foreground mt-3 border-t border-gray-100 pt-3">
                    {problems[activeIndex].details}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="rounded-full h-12 w-12 border-gray-200 hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            {/* Pagination indicators */}
            <div className="flex gap-2">
              {problems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-primary scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="rounded-full h-12 w-12 border-gray-200 hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ProblemsSection;