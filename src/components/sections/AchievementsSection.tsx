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
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Metrics"
          title="The Outcomes Behind Our Promise"
          subtitle="Every claim we make is backed by outcomes students and institutions can see."
          align="center"
          className="text-white"
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
              <Card className="border-none bg-white shadow-lg h-36 w-full flex items-center justify-center">
                <CardContent className="text-center p-6 flex flex-col items-center justify-center h-full">
                  <div className="text-2xl md:text-3xl font-bold mb-2 text-primary">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-medium text-gray-700 leading-tight">
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