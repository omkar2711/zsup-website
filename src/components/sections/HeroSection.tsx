import { Button } from "@/components/ui/button";
import { motion, Variants, Transition } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

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
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary/90 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{ y: [0, -12, 0] }}
        transition={floatTransition}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ ...floatTransition, delay: 0.6 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full"
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* <Sparkles className="w-4 h-4 text-yellow-300" /> */}
              <span className="text-sm font-medium">Empowering Future Talent</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={item}
            >
              Future-Ready Graduates.
              <span className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mt-2">
                Future-Strong Institutions
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-2xl"
              variants={item}
            >
              ZSkillup partners with universities & colleges across India to bridge the gap between education and employability through AI-driven training, technology, and placements.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 mb-10" variants={item}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-6 text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-base transition-all duration-200"
              >
                Book a call
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              {[
                { n: "20+", l: "Universities" },
                { n: "450+", l: "Hiring Partners" },
                { n: "₹19L", l: "Highest CTC" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  <div className="text-2xl font-bold text-white">{s.n}</div>
                  <div className="text-sm opacity-80 mt-1">{s.l}</div>
                </motion.div>
              ))}
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
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10">
              <img src={heroImage} alt="Students learning" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="text-sm font-medium mb-1">Join Over 5,000+ Students</div>
                <div className="text-xs opacity-80">Transforming education with AI-powered learning</div>
              </div>
            </div>

            {/* Floating accents */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <span className="text-xs font-bold text-gray-900">👋</span>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-xs font-bold text-primary">🔥</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;