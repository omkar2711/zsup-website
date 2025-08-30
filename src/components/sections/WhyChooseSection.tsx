import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Award, Network, HeartHandshake, TrendingUp } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Target,
      title: "Outcome-driven employability model",
      description: "Results-focused approach with measurable placement success"
    },
    {
      icon: Award,
      title: "White-labeled events for your campus",
      description: "Customized placement drives that enhance your institution's brand"
    },
    {
      icon: Network,
      title: "Strong corporate network & CXO access",
      description: "Direct connections with 450+ hiring partners and industry leaders"
    },
    {
      icon: HeartHandshake,
      title: "Extended support beyond graduation",
      description: "Continued career assistance and mentorship for alumni success"
    },
    {
      icon: TrendingUp,
      title: "Proven placement outcomes",
      description: "Track record of 250+ placements with highest CTC of ₹19 LPA"
    }
  ];

  return (
    <section className="py-12 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Why Institutions Choose ZSkillup
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us for comprehensive employability solutions that deliver results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="shadow-card transition-smooth hover:shadow-elegant hover:-translate-y-2 text-center"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-primary">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 text-lg font-semibold shadow-glow transition-bounce"
          >
            Connect With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;