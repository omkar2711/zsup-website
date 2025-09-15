import { motion } from "framer-motion";
import "../sections/framework-section.css";
import { getLogoPath } from "../../lib/logo-utils";

// Hiring partner logos from the assets/Companies_logos directory
const hiringPartners = [
  {
    name: "Amazon",
    logo: getLogoPath("/assets/Companies_logos/Amazon.jpeg")
  },
  {
    name: "Flipkart",
    logo: getLogoPath("/assets/Companies_logos/Flipkart-Logo.png")
  },
  {
    name: "Razorpay",
    logo: getLogoPath("/assets/Companies_logos/razorpay9274.jpg")
  },
  {
    name: "Meesho",
    logo: getLogoPath("/assets/Companies_logos/MEESHO.png")
  },
  {
    name: "Grow",
    logo: getLogoPath("/assets/Companies_logos/Grow logo.png")
  },
  {
    name: "Haptik",
    logo: getLogoPath("/assets/Companies_logos/haptik_logo.png")
  },
  {
    name: "Magicpin",
    logo: getLogoPath("/assets/Companies_logos/MAGICPIN.png")
  },
  {
    name: "Pepperfry",
    logo: getLogoPath("/assets/Companies_logos/pepperfry-logo.png")
  },
  {
    name: "Sutherland",
    logo: getLogoPath("/assets/Companies_logos/3886_Sutherland-Global-Logo-1.png")
  },
  {
    name: "AppScrip",
    logo: getLogoPath("/assets/Companies_logos/AppScrip-logo-1598953593530.avif")
  },
  {
    name: "Convegenius",
    logo: getLogoPath("/assets/Companies_logos/Convegenius.png")
  },
  {
    name: "Merkle Sokrati",
    logo: getLogoPath("/assets/Companies_logos/Merkle-Sokrati.jpg")
  }
];

// Duplicate the partners to create a longer list for seamless looping
const extendedPartners = [...hiringPartners, ...hiringPartners];

const MarqueeContent = () => (
  <div className="flex gap-8">
    {extendedPartners.map((partner, index) => (
      <div
        key={index}
        className="flex-shrink-0 h-[120px] w-[220px] rounded-xl bg-white p-5 flex items-center justify-center border border-gray-100 transition-all duration-300"
      >
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    ))}
  </div>
);

const HiringPartnersSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Light background with subtle pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent),radial-gradient(at_30%_80%,rgba(125,10,50,0.05),transparent)]" />
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Hiring Partners
          </h2>
          <p className="text-xl text-gray-600">
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
              duration: 40,
              ease: "linear"
            }}
            className="w-fit flex"
          >
            <MarqueeContent />
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* Marquee Container - Second Row (reverse direction) */}
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
            <MarqueeContent />
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default HiringPartnersSection;
