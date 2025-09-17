import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BarChart, MessageSquare, Building, Presentation, Users, Target, TrendingUp, LineChart, Network, Brain, GraduationCap, Sparkles, Star } from 'lucide-react';

const CurriculumSection = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const curriculumData = [
    {
      id: 1,
      title: "Foundations of Corporate Readiness",
      courseNumber: "Course 1",
      duration: "30 Hours",
      rating: "4.5 (2780 ratings)",
      modules: [
        {
          icon: BarChart,
          title: "Aptitude & Analytical Skills",
          description: "Percentages, Ratios, Profit & Loss, Speed/Distance, Data Interpretation (graphs, charts, case-based)"
        },
        {
          icon: MessageSquare,
          title: "Business Communication",
          description: "Email etiquette, presentation skills, professional writing, LinkedIn optimization & personal branding"
        },
        {
          icon: Building,
          title: "Corporate Exposure",
          description: "Industry orientation, workplace culture, professional conduct"
        }
      ]
    },
    {
      id: 2,
      title: "Soft Skills & Corporate Etiquette",
      courseNumber: "Course 2",
      duration: "30 Hours",
      rating: "4.5 (2780 ratings)",
      modules: [
        {
          icon: Presentation,
          title: "Advanced Communication",
          description: "Storytelling in business, impactful PPTs & reports"
        },
        {
          icon: Users,
          title: "Team Readiness",
          description: "Group discussions with live evaluation, simulations, conflict resolution"
        },
        {
          icon: Target,
          title: "Interview Readiness",
          description: "STAR method, role-play interviews (recorded & reviewed), body language, networking skills"
        }
      ]
    },
    {
      id: 3,
      title: "Domain & Functional Readiness",
      courseNumber: "Course 3",
      duration: "30 Hours",
      rating: "4.5 (2780 ratings)",
      modules: [
        {
          icon: TrendingUp,
          title: "Marketing & Sales",
          description: "Digital marketing, brand pitches, market research"
        },
        {
          icon: LineChart,
          title: "Finance & Analytics",
          description: "Financial statements, ROI/NPV, Excel-based analytics"
        },
        {
          icon: Network,
          title: "Operations & Supply Chain",
          description: "Lean principles, process optimization, case studies"
        },
        {
          icon: Brain,
          title: "Strategy & Consulting",
          description: "SWOT, BCG, Porter's frameworks + mini consulting project"
        }
      ]
    },
    {
      id: 4,
      title: "Career Launch & Future Skills",
      courseNumber: "Course 4",
      duration: "30 Hours",
      rating: "4.5 (2780 ratings)",
      modules: [
        {
          icon: GraduationCap,
          title: "Placement Readiness",
          description: "Unlimited expert mock interviews, AI-powered ATS-compliant resumes"
        },
        {
          icon: Sparkles,
          title: "Emerging Tech Skills",
          description: "AI in business, generative AI applications, basics of full-stack development & data science (bridge modules)"
        },
        {
          icon: Building,
          title: "Industry Integration",
          description: "Masterclasses from leaders at Microsoft, Google, LinkedIn, Amazon; real consulting case discussions"
        }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="max-w-8xl mx-auto p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      {/* Header */}

      {/* Curriculum Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        {curriculumData.map((section, index) => (
          <div key={section.id} className="relative mb-6">
            {/* Timeline dot */}
            <div className="absolute left-2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-md"></div>
            
            {/* Content */}
            <div className="ml-12">
              <div 
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                onClick={() => toggleSection(section.id)}
              >
                {/* Header */}
                <div className="p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{section.courseNumber}</span>
                      <span>•</span>
                      <span>{section.duration}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{section.rating}</span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className={`grid ${section.modules.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6 mt-6`}>
                          {section.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="space-y-3">
                              <div className="flex items-start gap-3">
                                <module.icon className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">{module.title}</h4>
                                  <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumSection;