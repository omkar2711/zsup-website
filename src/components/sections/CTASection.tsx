import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Get Started"
          title="Partner with ZSkillup"
          subtitle="Unlock higher placement rates, stronger industry alignment, and happier students."
        />
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <Button size="lg" className="bg-primary text-white hover:bg-secondary px-8 py-6 text-base">
            Partner With Us
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-base">
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
