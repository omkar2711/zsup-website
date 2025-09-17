import { motion } from "framer-motion";
import { duplicatedCollegeLogos } from "@/lib/college-logos";
import "../sections/framework-section.css";

const MarqueeContent = () => (
  <div className="flex gap-10">
    {duplicatedCollegeLogos.map((item, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[250px] h-[160px]  p-6 flex items-center justify-center  dark:border-gray-700 group transition-all duration-300"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={item.logo}
            alt={item.name}
            className="w-full h-full object-contain dark:filter dark:brightness-0 dark:invert transition-opacity duration-300"
          />
        </div>
      </div>
    ))}
  </div>
);

const ReverseMarqueeContent = () => (
  <div className="flex gap-10">
    {[...duplicatedCollegeLogos].reverse().map((item, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[250px] h-[160px]  p-6 flex items-center justify-center  dark:border-gray-700 group transition-all duration-300"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={item.logo}
            alt={item.name}
            className="w-full h-full object-contain dark:filter dark:brightness-0 dark:invert transition-opacity duration-300"
          />
        </div>
      </div>
    ))}
  </div>
);

const TrustedSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Light background with subtle pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_40%)]" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted By Leading Institutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Proudly partnering with 15+ leading institutions
          </p>
        </div>

        {/* Marquee Container */}
        <div className="overflow-hidden relative">
          {/* First Marquee */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }}
            className="w-fit flex"
          >
            <MarqueeContent />
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />
        </div>

        {/* Second Marquee - Reverse Direction with Reversed Content */}
        <div className="overflow-hidden relative mt-8">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }}
            className="w-fit flex"
          >
            <ReverseMarqueeContent />
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;