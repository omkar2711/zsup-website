import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AdvisorySection = () => {
  const advisors = [
    {
      name: "Prof. Shrikanth Ambekar",
      title: "Ex-Director Placements, VTU",
      experience: "35+ years of experience",
      initials: "SA"
    },
    {
      name: "Ankur Vashishtha",
      title: "Product Leader, Author",
      subtitle: "Ex – Microsoft, Uber, Salesforce, Oracle",
      experience: "18+ years of experience",
      initials: "AV"
    },
    {
      name: "Dr. Nikhil Gala",
      title: "Ex-Chairperson, Corporate Relations, NMIMS", 
      experience: "16+ years of experience",
      initials: "NG"
    },
    {
      name: "Sumit Shukla",
      title: "IIT – Kanpur, Python & ML Expert",
      experience: "12+ years of experience",
      initials: "SS"
    }
  ];

  return (
    <section className="py-12 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Meet Our Advisory Committee
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry veterans and academic leaders guiding our mission
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor, index) => (
            <Card 
              key={index}
              className="shadow-card transition-smooth hover:shadow-elegant hover:-translate-y-2 text-center"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-20 h-20 bg-gradient-primary text-white text-xl font-bold">
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {advisor.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {advisor.name}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm font-semibold text-secondary mb-2">
                  {advisor.title}
                </p>
                {advisor.subtitle && (
                  <p className="text-sm text-muted-foreground mb-3">
                    {advisor.subtitle}
                  </p>
                )}
                <p className="text-sm text-muted-foreground font-medium">
                  {advisor.experience}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;