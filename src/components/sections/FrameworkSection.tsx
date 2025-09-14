import React, { useState } from "react";
import { Brain, Target, Trophy, HeartHandshake, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./framework-section.css";
import { useNavigate } from "react-router-dom";

const slideInFromTop: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", duration: 0.8 } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const fadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", duration: 0.6 } 
  }
};

type FrameworkPillar = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  stats: string;
  color: string;
  details: string[];
};

const FrameworkSection = () => {
  const [activeSegment, setActiveSegment] = useState<number>(0); // Set first framework (index 0) as default
  const navigate = useNavigate();

  const frameworks: FrameworkPillar[] = [
    {
      id: "foundation",
      icon: Brain,
      title: "Skill Foundation",
      description: "Partner institutions benefit from an industry-aligned curriculum in aptitude, coding, and communication, ensuring students build a strong foundation from day one.",
      stats: "Foundation Building",
      color: "hsl(330, 80%, 25%)", // primary (Deep Burgundy)
      details: [
        "Industry-aligned curriculum", 
        "Aptitude, coding & communication skills",
        "Strong foundation from day one"
      ]
    },
    {
      id: "readiness",
      icon: Target,
      title: "Placement Readiness",
      description: "Through unlimited AI-powered mock interviews, ATS-optimized resumes, and personalized mentorship, students graduate with the tools to clear hiring filters and perform in real interviews.",
      stats: "85% success rate",
      color: "hsl(210, 70%, 40%)", // accent (Royal Blue)
      details: [
        "AI-powered mock interviews",
        "ATS-optimized resumes",
        "Personalized mentorship"
      ]
    },
    {
      id: "outcomes",
      icon: Trophy,
      title: "Career Outcomes",
      description: "With 250+ successful placements, we help institutions deliver measurable results that strengthen their placement records.",
      stats: "250+ placements",
      color: "hsl(45, 95%, 55%)", // highlight (Rich Gold)
      details: [
        "Measurable placement results",
        "Institution record strengthening",
        "High-value career outcomes"
      ]
    },
    {
      id: "support",
      icon: HeartHandshake,
      title: "Extended Support",
      description: "We go beyond graduation with last-mile assistance and ongoing career guidance, helping institutions sustain alumni success and strengthen their employer networks.",
      stats: "1 year support post-graudation ",
      color: "hsl(330, 70%, 35%)", // primary-light (Medium Burgundy)
      details: [
        "Last-mile assistance",
        "Ongoing career guidance",
        "Alumni success & employer networks"
      ]
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      className="py-20 md:py-24 relative overflow-hidden bg-background dark:bg-gray-900"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(125,10,50,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(30,98,176,0.1),transparent_30%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl -z-10" />
      <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-highlight/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={slideInFromTop}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-highlight"
            style={{ lineHeight: "1.15", paddingBottom: "0.2em" }}
          >
            The ZSkillup Employability Framework
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive framework delivers end-to-end career support, helping institutions bridge the gap between education and employability.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
            {/* Interactive Circle */}
            <div className="md:w-1/2 relative flex justify-center">
              <div className="relative p-8 max-w-full" style={{ width: '520px', height: '520px' }}>
                <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-xl filter-drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15))"
                     style={{ overflow: 'visible' }}>
                  {/* Center circle */}
                  <circle cx="200" cy="200" r="75" fill="white" className="drop-shadow-md" />
                  <text x="200" y="190" textAnchor="middle" className="fill-slate-900 font-bold" fontSize="20">
                    Employability
                  </text>
                  <text x="200" y="215" textAnchor="middle" className="fill-slate-900 font-medium" fontSize="16">
                    Framework
                  </text>
                  
                  {/* Framework segments */}
                  {frameworks.map((framework, index) => {
                    const startAngle = index * 90;
                    const endAngle = (index + 1) * 90;
                    const isActive = activeSegment === index;
                    
                    // Calculate path for segment
                    const innerRadius = 90;
                    const outerRadius = 190;
                    const startRadians = (startAngle - 90) * Math.PI / 180;
                    const endRadians = (endAngle - 90) * Math.PI / 180;
                    
                    const startOuterX = 200 + outerRadius * Math.cos(startRadians);
                    const startOuterY = 200 + outerRadius * Math.sin(startRadians);
                    const endOuterX = 200 + outerRadius * Math.cos(endRadians);
                    const endOuterY = 200 + outerRadius * Math.sin(endRadians);
                    
                    const startInnerX = 200 + innerRadius * Math.cos(startRadians);
                    const startInnerY = 200 + innerRadius * Math.sin(startRadians);
                    const endInnerX = 200 + innerRadius * Math.cos(endRadians);
                    const endInnerY = 200 + innerRadius * Math.sin(endRadians);
                    
                    // SVG path
                    const path = [
                      `M ${startOuterX} ${startOuterY}`,
                      `A ${outerRadius} ${outerRadius} 0 0 1 ${endOuterX} ${endOuterY}`,
                      `L ${endInnerX} ${endInnerY}`,
                      `A ${innerRadius} ${innerRadius} 0 0 0 ${startInnerX} ${startInnerY}`,
                      'Z'
                    ].join(' ');
                    
                    // Calculate icon position
                    const iconAngle = startAngle + 45; // middle of segment
                    const iconRadius = innerRadius + (outerRadius - innerRadius) / 2 + (isActive ? 5 : 0);
                    const iconX = 200 + iconRadius * Math.cos((iconAngle - 90) * Math.PI / 180);
                    const iconY = 200 + iconRadius * Math.sin((iconAngle - 90) * Math.PI / 180);
                    
                    // Calculate label position
                    const labelRadius = outerRadius + 25;
                    const labelX = 200 + labelRadius * Math.cos((iconAngle - 90) * Math.PI / 180);
                    const labelY = 200 + labelRadius * Math.sin((iconAngle - 90) * Math.PI / 180);
                    
                    return (
                        <g key={framework.id} className="cursor-pointer transition-all duration-300">
                        {/* Segment path */}
                        <path 
                          d={path} 
                          fill={framework.color}
                          fillOpacity={isActive ? 1 : 0.7}
                          stroke="white"
                          strokeWidth="2"
                          className="transition-all duration-300 hover:opacity-90"
                          style={{
                          transform: isActive ? `scale(1.05)` : 'scale(1)',
                          transformOrigin: '200px 200px',
                          filter: isActive ? 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.2))' : '',
                          }}
                          onClick={() => setActiveSegment(index)}
                        />
                        
                        {/* Icon */}
                        <foreignObject 
                          x={iconX - 22} 
                          y={iconY - 22} 
                          width="44" 
                          height="44"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center bg-white rounded-full border-2 border-white shadow-md">
                          {React.createElement(framework.icon, {
                            size: 26,
                            className: 'text-slate-900',
                          })}
                          </div>
                        </foreignObject>
                        
                        {/* Label */}
                        <foreignObject
                          x={labelX - 90}
                          y={labelY - 15}
                          width="180"
                          height="40"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                          <span className={`text-sm font-semibold ${isActive ? 'text-slate-900' : 'text-slate-600'} bg-white/80 rounded-full px-4 py-1 shadow-sm whitespace-nowrap`} style={{
                            display: 'inline-block',
                            minWidth: '140px',
                            maxWidth: '200px',
                            height: 'auto',
                            overflow: 'visible',
                            textOverflow: 'ellipsis'
                          }}>
                            {framework.title}
                          </span>
                          </div>
                        </foreignObject>
                        </g>
                    );
                  })}
                </svg>
              </div>
            </div>
            
            {/* Details panel */}
            <div className="md:w-1/2 mt-10 md:mt-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={frameworks[activeSegment].id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6"
                >
                    <div className="flex items-start gap-3 mb-5">
                      <div 
                        className="w-12 h-12 rounded-full grid place-items-center flex-shrink-0 mt-1" 
                        style={{ backgroundColor: frameworks[activeSegment].color }}
                      >
                        {React.createElement(frameworks[activeSegment].icon, {
                          size: 24,
                          className: 'text-white',
                        })}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {frameworks[activeSegment].title}
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {frameworks[activeSegment].description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-5 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Key Features:</div>
                      </div>
                      <ul className="space-y-2">
                        {frameworks[activeSegment].details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full grid place-items-center flex-shrink-0 mt-0.5" 
                                style={{ backgroundColor: frameworks[activeSegment].color }}>
                              <ChevronRight size={12} className="text-white" />
                            </div>
                            <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Key Metric:</div>
                        <div className="text-lg font-bold" style={{ color: frameworks[activeSegment].color }}>
                          {frameworks[activeSegment].stats}
                        </div>
                      </div>
                    </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl px-8 py-6 border border-primary/10 shadow-lg">
              <span className="text-lg text-gray-700 dark:text-gray-300 font-medium">Ready to future-proof your institution?</span>
              <Button 
                variant="default" 
                size="lg" 
                className="rounded-full px-8 shadow-md hover:shadow-lg transition-shadow bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => navigate('/contact-us')}
              >
                Let's get started<ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FrameworkSection;
