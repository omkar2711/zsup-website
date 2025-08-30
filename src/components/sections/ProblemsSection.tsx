import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, FileText, Network, GraduationCap, CheckCircle, PlayCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ProblemsSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const problems = [
    {
      icon: BookOpen,
      title: "Outdated Curriculum",
      problem: "Curriculum often lags behind industry shifts",
      solution: "Industry-updated modules with guaranteed virtual internships with 450+ recruiters including Practo, Uber, and more",
      details: "Our curriculum is updated every quarter based on industry trends and recruiter feedback",
      stats: "95% industry relevance score"
    },
    {
      icon: Users,
      title: "Interview Preparation",
      problem: "Students aren't prepared for real-world interviews",
      solution: "Unlimited AI-powered mock interviews that adapt to answers and simulate real interview scenarios",
      details: "AI adapts difficulty and questions based on student performance and target companies",
      stats: "85% interview success rate"
    },
    {
      icon: FileText,
      title: "Resume Quality",
      problem: "Resumes fail to meet recruiter expectations",
      solution: "Placement readiness through ATS-optimized resumes designed to clear hiring filters",
      details: "Our resumes pass through 90% of ATS systems and get 3x more recruiter callbacks",
      stats: "3x more callbacks"
    },
    {
      icon: Network,
      title: "Limited Networks",
      problem: "Limited access to recruiters and corporate networks",
      solution: "450+ hiring partners, 400+ CXO connects, conclaves, and white-labeled placement drives",
      details: "Direct access to hiring managers and fast-track placement processes",
      stats: "450+ hiring partners"
    },
    {
      icon: GraduationCap,
      title: "Skill Gaps",
      problem: "Students need more than academics to be placement-ready",
      solution: "Guided by educators from IIT, NMIMS, and industry experts from Uber, Microsoft, and more",
      details: "Comprehensive soft skills, communication, and industry readiness training",
      stats: "100% placement readiness"
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br  dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(2,132,199,0.08),transparent_30%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.05)_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Problems We Solve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Click on any challenge to discover how ZSkillup transforms it into an opportunity.
          </p>
          <div className="flex justify-center">
            <div className="bg-primary/10 rounded-full px-4 py-2 flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Click to Expand Solutions</span>
            </div>
          </div>
        </div>
        
        {/* Horizontal Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-md border border-gray-200 p-6 cursor-pointer transition-all duration-300 group ${
                expandedCard === index 
                  ? 'ring-2 ring-primary shadow-lg scale-105' 
                  : 'hover:shadow-lg hover:-translate-y-1'
              } ${hoveredCard === index ? 'border-primary/50' : ''}`}
              onClick={() => toggleCard(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Challenge Icon & Title */}
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                  expandedCard === index 
                    ? 'bg-red-500 text-white scale-110' 
                    : hoveredCard === index 
                      ? 'bg-red-100 text-red-600 scale-105' 
                      : 'bg-red-50 text-red-500'
                }`}>
                  <item.icon className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-800 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.problem}</p>
                </div>
                
                {/* Expand Indicator */}
                <div className="flex justify-center">
                  <div className={`transition-all duration-300 ${
                    expandedCard === index ? 'text-primary' : 'text-gray-400'
                  }`}>
                    {expandedCard === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Active Indicator */}
              {expandedCard === index && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Expanded Solution */}
        {expandedCard !== null && (
          <div className="max-w-3xl mx-auto mt-4">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Solution Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="text-sm font-medium opacity-90">ZSkillup Solution for</div>
                      <div className="font-bold">{problems[expandedCard].title}</div>
                    </div>
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium text-white">
                    {problems[expandedCard].stats}
                  </span>
                </div>
              </div>

              {/* Solution Content */}
              <div className="p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Main Solution */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-700">
                      <ArrowRight className="w-4 h-4" />
                      <h4 className="font-semibold text-sm">Our Approach</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {problems[expandedCard].solution}
                    </p>
                  </div>

                  {/* Implementation */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <CheckCircle className="w-4 h-4" />
                      <h4 className="font-semibold text-sm">How It Works</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {problems[expandedCard].details}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-full">
                    Proven Results
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-7 text-xs border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">
              Ready to Transform Your Institution?
            </h3>
            <p className="text-gray-600 mb-6">
              See how ZSkillup can solve your specific challenges with a personalized demo.
            </p>
            <Button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-xl">
              Schedule a Demo →
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProblemsSection;