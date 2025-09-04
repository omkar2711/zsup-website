import { motion } from "framer-motion";
import "../sections/framework-section.css";

// Hiring partner logos with tech company themes
const hiringPartners = [
  {
    name: "TechCorp",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHJ4PSI4IiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjE1IiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg=="
  },
  {
    name: "InnovateSoft",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMzAiIHN0cm9rZT0iIzcyMmU2MyIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTM1IDUwTDQ1IDYwTDY1IDQwIiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg=="
  },
  {
    name: "DataDynamics",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDgwTDUwIDIwTDgwIDgwIiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjE1IiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg=="
  },
  {
    name: "CloudSphere",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMzAiIHN0cm9rZT0iIzcyMmU2MyIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTM1IDUwSDY1TTUwIDM1VjY1IiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjwvc3ZnPg=="
  },
  {
    name: "AI Systems",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHN0cm9rZT0iIzcyMmU2MyIgc3Ryb2tlLXdpZHRoPSIzIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMTUiIGZpbGw9IiM3MjJlNjMiLz48L3N2Zz4="
  },
  {
    name: "DevStack",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDgwTDUwIDIwTDgwIDgwSDIwWiIgc3Ryb2tlPSIjNzIyZTYzIiBzdHJva2Utd2lkdGg9IjMiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNSIgc3Ryb2tlPSIjNzIyZTYzIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="
  },
  {
    name: "CodeRealm",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iMjAiIHk9IjM1IiB3aWR0aD0iNjAiIGhlaWdodD0iMzAiIHJ4PSI0IiBzdHJva2U9IiM3MjJlNjMiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Ik0zNSA1MEw0NSA0MEw1NSA1MEw0NSA2MCIgc3Ryb2tlPSIjNzIyZTYzIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="
  },
  {
    name: "ByteWave",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDUwQzIwIDQwIDMwIDMwIDUwIDMwQzcwIDMwIDgwIDQwIDgwIDUwQzgwIDYwIDcwIDcwIDUwIDcwQzMwIDcwIDIwIDYwIDIwIDUwWiIgc3Ryb2tlPSIjNzIyZTYzIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="
  }
];

// Duplicate the partners to create a longer list for seamless looping
const extendedPartners = [...hiringPartners, ...hiringPartners];

const MarqueeContent = () => (
  <div className="flex gap-8">
    {extendedPartners.map((partner, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -8, scale: 1.05 }}
        className="flex-shrink-0 h-[140px] w-[180px] rounded-xl bg-white/10 backdrop-blur-md p-6 flex flex-col items-center justify-center border border-white/20 group hover:bg-white/15 transition-all duration-300"
      >
        <div className="w-16 h-16 mb-3">
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <p className="text-white/70 group-hover:text-white text-sm font-medium transition-colors">
          {partner.name}
        </p>
      </motion.div>
    ))}
  </div>
);

const HiringPartnersSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary/80" />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 mix-blend-soft-light bg-[radial-gradient(at_70%_20%,rgba(255,255,255,0.2),transparent),radial-gradient(at_30%_80%,rgba(255,255,255,0.2),transparent)]" />
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Hiring Partners
          </h2>
          <p className="text-xl text-white/80">
            Join our network of 450+ industry-leading companies
          </p>
        </div>

        {/* Marquee Container - First Row */}
        <div className="overflow-hidden relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear"
            }}
            className="w-fit flex"
          >
            <MarqueeContent />
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-primary to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-primary to-transparent z-10" />
        </div>

        {/* Marquee Container - Second Row (reverse direction) */}
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
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-primary to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-primary to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default HiringPartnersSection;
