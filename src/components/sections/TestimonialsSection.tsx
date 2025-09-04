import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { SectionHeader } from "@/components/SectionHeader";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "ZSkillup transformed our placement outcomes. Our students now get job offers from top-tier companies with 40% higher average packages.",
      author: "Dr. Rajesh Kumar",
      position: "Placement Director, Premier University",
      rating: 5
    },
    {
      content: "The AI-powered mock interviews and industry-aligned curriculum gave me confidence to crack my dream job at a Fortune 500 company.",
      author: "Priya Sharma",
      position: "Software Engineer, Microsoft",
      rating: 5
    },
    {
      content: "450+ hiring partners and personalized mentorship - ZSkillup delivered exactly what they promised. Our campus placements increased by 60%.",
      author: "Prof. Anita Desai",
      position: "Career Services Head, Tech Institute",
      rating: 5
    }
  ];

  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const timerRef = useRef<number | null>(null);

  const start = useCallback(() => {
    if (!api) return;
    stop();
    timerRef.current = window.setInterval(() => {
      if (!api) return;
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 4000);
  }, [api]);

  const stop = useCallback(() => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) return;
    start();
    return stop;
  }, [api, start, stop]);

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-muted/40 via-background to-muted/40">
      {/* subtle background textures */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(236,72,153,0.08),transparent_35%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          // eyebrow="Testimonials"
          title="Outcomes That Speak For Themselves"
          subtitle="Real stories from students and institutions who achieved career success"
          align="center"
        />

        <Carousel setApi={setApi} className="relative" onMouseEnter={stop} onMouseLeave={start}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pt-4">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <Card className="shadow-card transition-smooth hover:shadow-elegant hover:-translate-y-2 relative h-full">
                    <div className="absolute -top-4 left-6">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <CardContent className="pt-8 pb-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-primary text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-3" />
          <CarouselNext className="-right-3" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;