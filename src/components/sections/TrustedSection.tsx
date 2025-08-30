import { motion } from "framer-motion";
import { duplicatedLogos } from "@/lib/dummy-logos";

const MarqueeContent = () => (
  <div className="flex gap-8">
    {duplicatedLogos.map((item, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[200px] h-[140px] bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-between border border-white/20 group hover:bg-white/15 transition-all duration-300"
      >
        <div className="relative w-full h-[80px] flex items-center justify-center">
          <img
            src={item.logo}
            alt={item.name}
            className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <p className="text-white/70 group-hover:text-white/90 text-sm font-medium transition-colors mt-2">
          {item.name}
        </p>
      </div>
    ))}
  </div>
);

const TrustedSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#722e63] via-[#8b3a78] to-[#5f2652]" />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 mix-blend-soft-light bg-[radial-gradient(at_70%_20%,rgba(255,255,255,0.2),transparent),radial-gradient(at_30%_80%,rgba(255,255,255,0.2),transparent)]" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted By Leading Institutions
          </h2>
          <p className="text-xl text-gray-200">
            Proudly partnering with 20+ leading institutions
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
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#722e63] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#722e63] to-transparent z-10" />
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
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#722e63] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#722e63] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;