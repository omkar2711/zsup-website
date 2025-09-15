import { Button } from "@/components/ui/button";
import { motion, Variants, Transition } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { getLogoPath } from "../../lib/logo-utils";

const HeroSection = () => {
  // Framer Motion variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  const floatTransition: Transition = {
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <section className="relative bg-gradient-secondary text-foreground overflow-hidden min-h-screen flex items-center">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(125,10,50,0.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(30,98,176,0.05),transparent_30%)]" />
      
      {/* Animated accent elements */}
      {/* <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full"
        animate={{ y: [0, -12, 0] }}
        transition={floatTransition}
      /> */}
      {/* <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-accent/5 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ ...floatTransition, delay: 0.6 }}
      /> */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-highlight/30 rounded-full"
        animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left */}
          <motion.div variants={item}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Empowering Future Talent</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-foreground"
              variants={item}
            >
              Future-Ready Graduates.
              <span className="block bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent mt-2">
                Future-Strong Institutions
              </span>
            </motion.h1>

            <motion.blockquote
              className="border-l-4 border-primary pl-4 mb-6 italic text-lg text-muted-foreground/90 max-w-2xl"
              variants={item}
            >
              "Customized employability solutions designed for your campus and your students."
            </motion.blockquote>

            <motion.p
              className="text-lg md:text-xl mb-8 leading-relaxed text-muted-foreground max-w-2xl"
              variants={item}
            >
              ZSkillup partners with universities & colleges across India to bridge the gap between education and employability through AI-driven training, technology, and placements.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 mb-10" variants={item}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => window.location.href = '/contact-us'}
              >
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            className="relative"
            variants={item}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-elegant border border-primary/10">
              <img src={getLogoPath("/assets/hero-image.jpg")} alt="Students learning" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
