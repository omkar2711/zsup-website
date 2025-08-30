import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Crown } from "lucide-react";

const CohortsSection = () => {
  const cohorts = [
    {
      title: "Placement Readiness – Non-Tech",
      description: "Master aptitude, communication, and employability skills with AI-driven practice and real placement support.",
      icon: CheckCircle,
      badge: "Popular",
      badgeColor: "bg-blue-500",
      highlights: [
        "Aptitude + Communication Training",
        "AI-Powered Mock Interviews", 
        "ATS-Optimized Resumes",
        "360° Platform Access",
        "Guaranteed Job Opportunities"
      ]
    },
    {
      title: "Placement Readiness – Tech + Non-Tech",
      description: "Blended program combining coding, aptitude, and communication for diverse career pathways.",
      icon: Star,
      badge: "Comprehensive",
      badgeColor: "bg-green-500",
      highlights: [
        "All Non-Tech Features Included",
        "Coding & Domain Skills",
        "Competitive Programming + Projects",
        "Company-Specific Prep",
        "Guaranteed Job Opportunities"
      ]
    },
    {
      title: "Elite Batch– Poster Boys/Girls",
      description: "Exclusive track for high-potential students aiming for premium recruiter access and top CTCs.",
      icon: Crown,
      badge: "Elite",
      badgeColor: "bg-gradient-primary",
      highlights: [
        "Handpicked, High-Potential Students",
        "Personalized Mentorship from Experts",
        "Leadership & CXO Access",
        "Exclusive Fast-Track Drives", 
        "High-Package Outcomes"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose the Right Program for Your Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every student learns differently. Our programs ensure every career story finds its path.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cohorts.map((cohort, index) => (
            <div key={index} className="relative bg-gradient-to-br from-[#722e63] via-[#8b3a78] to-[#5f2652] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 shadow-xl group">
              {/* Elite Badge */}
              {cohort.title.includes('Elite') && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  PREMIUM
                </div>
              )}

              {/* Card Header */}
              <div className="text-center mb-8 relative">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/20">
                  <cohort.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{cohort.title}</h3>
                <p className="text-gray-200 leading-relaxed">{cohort.description}</p>
              </div>
              
              {/* Highlights */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-white text-lg mb-6">Key Highlights:</h4>
                {cohort.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-white/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-200 leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Button className="w-full bg-white hover:bg-gray-100 text-[#722e63] font-semibold py-3 rounded-xl transition-all duration-300">
                Explore More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CohortsSection;