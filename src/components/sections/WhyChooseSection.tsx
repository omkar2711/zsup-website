import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Award, Network, HeartHandshake, TrendingUp } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Target,
      title: "Outcome-driven employability model",
      description: "Results-focused approach with measurable placement success",
      highlight: "250+ Successful Placements"
    },
    {
      icon: Award,
      title: "White-labeled events for your campus",
      description: "Customized placement drives that enhance your institution's brand",
      highlight: "Tailored for Your Institution"
    },
    {
      icon: Network,
      title: "Strong corporate network & CXO access",
      description: "Direct connections with 450+ hiring partners and industry leaders",
      highlight: "450+ Hiring Partners"
    },
    {
      icon: HeartHandshake,
      title: "Extended support beyond graduation",
      description: "Continued career assistance and mentorship for alumni success",
      highlight: "Lifetime Career Support"
    },
    {
      icon: TrendingUp,
      title: "Proven placement outcomes",
      description: "Track record of 250+ placements with highest CTC of ₹19 LPA",
      highlight: "Up to ₹19 LPA"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              Why choose ZSkillUp?
            </span>
          </h2>
          <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto w-40" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="shadow-card transition-all duration-300 hover:shadow-elegant overflow-hidden border border-gray-100 h-full"
            >              
              <CardHeader className="pb-2 relative">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-sm">
                    <reason.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-primary">
                      {reason.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-3">
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;