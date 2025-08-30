import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How does ZSkillup improve placements?",
    a: "We blend industry-aligned curriculum, AI-powered assessments, mock interviews, and ongoing mentorship to raise student outcomes and employer confidence.",
  },
  {
    q: "Can we integrate with our existing academic calendar?",
    a: "Yes. Our modular programs are designed to fit into semester schedules with minimal disruption while maximizing readiness.",
  },
  {
    q: "What kind of companies hire from your network?",
    a: "450+ partners across software, analytics, product, fintech, and startup ecosystems—from Fortune 500 to high-growth startups.",
  },
  {
    q: "Do you support faculty development?",
    a: "Absolutely. We run FDPs, provide teaching aids, and co-create lab work so faculty can guide students effectively.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about partnering with ZSkillup"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem value={`item-${i + 1}`} key={i}>
                <AccordionTrigger className="text-left text-base md:text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
