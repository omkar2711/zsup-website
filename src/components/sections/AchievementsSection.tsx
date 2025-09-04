import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const AchievementsSection = () => {
  const achievements = [
    {
      number: "25+",
      label: "Universities & Colleges Onboarded"
    },
    {
      number: "450+",
      label: "Hiring Partners Engaged"
    },
    {
      number: "250+",
      label: "Student Placements"
    },
    {
      number: "₹19 LPA",
      label: "Highest CTC"
    },
    {
      number: "₹5.6 LPA",
      label: "Average CTC"
    },
    {
      number: "150+",
      label: "Faculty Members"
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 18 } },
  };

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Metrics"
          title="Our Numbers Tell the Story"
          subtitle="Real Impact. Real Outcomes"
          align="center"
        />

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -6 }}>
              <Card className="border border-border/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 h-36 w-full flex items-center justify-center">
                <CardContent className="text-center p-6 flex flex-col items-center justify-center h-full">
                  <div className="text-2xl md:text-3xl font-bold mb-2 text-primary">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground leading-tight">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;