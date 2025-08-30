import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, BookCheck, BriefcaseIcon, GraduationCap, Building, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry-Recognized Certification",
    description: "Earn certificates validated by top tech companies and educational institutions"
  },
  {
    icon: BriefcaseIcon,
    title: "Virtual Internship Experience",
    description: "Work on real-world projects with actual industry data and challenges"
  },
  {
    icon: Building,
    title: "Corporate Environment",
    description: "Experience authentic workplace scenarios and professional workflows"
  },
  {
    icon: BookCheck,
    title: "Mentored Learning",
    description: "Get guidance from industry experts throughout your internship"
  },
  {
    icon: GraduationCap,
    title: "Skill Assessment",
    description: "Regular evaluation and feedback to track your progress"
  },
  {
    icon: CheckCircle2,
    title: "Placement Support",
    description: "Direct hiring opportunities with partner companies"
  }
];

const CertificatesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            CERTIFICATION & INTERNSHIP
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certificates & Virtual Internships
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gain practical experience and industry recognition through our comprehensive program
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
