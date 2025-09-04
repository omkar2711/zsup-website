import { motion } from "framer-motion";
import { duplicatedLogos } from "@/lib/dummy-logos";
import "../sections/framework-section.css";

const MarqueeContent = () => (
  <div className="flex gap-8">
    {duplicatedLogos.map((item, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[200px] h-[140px] bg-white dark:bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-between border border-gray-100 dark:border-gray-700 group hover:shadow-md transition-all duration-300"
      >
        <div className="relative w-full h-[80px] flex items-center justify-center">
          <img
            src={item.logo}
            alt={item.name}
            className="w-full h-full object-contain dark:filter dark:brightness-0 dark:invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white text-sm font-medium transition-colors mt-2">
          {item.name}
        </p>
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
            Proudly partnering with 25+ leading institutions
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
              duration: 20,
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

        {/* Second Marquee - Reverse Direction */}
        <div className="overflow-hidden relative mt-8">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
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
      </div>
    </section>
  );
};

export default TrustedSection;