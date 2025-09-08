import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { SectionHeader } from "@/components/SectionHeader";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Hi, I'm Ishita Pandey, a CSE (Data Science) student at Galgotias College. Thrilled to share that I've received an Analyst Trainee offer from DWAO! A huge shoutout to Aimerz for their unwavering support—your guidance, resources, and encouragement made all the difference. If you're prepping for placements, Aimerz is your go-to!",
      author: "Ishita Pandey",
      position: "Analyst Trainee, DWAO",
      rating: 5,
      linkedInUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7231302427436572672"
    },
    {
      content: "I am thrilled to have been selected as an Analyst Trainee at DWAO, and I owe a huge thanks to AIMERZ for making this possible. AIMERZ streamlined the entire hiring process and connected me with DWAO. The mock interviews and guidance provided by the team were invaluable in securing this opportunity.",
      author: "Utkarsh Singh",
      position: "Analyst Trainee, DWAO",
      rating: 5,
      linkedInUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7228022503888105472"
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
          title="Success Stories That Inspire"
          subtitle="Real experiences from students who launched their careers with our support"
          align="center"
        />

        <Carousel setApi={setApi} className="relative" onMouseEnter={stop} onMouseLeave={start}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pt-4">
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
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-primary text-lg">
                              {testimonial.author}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.position}
                            </p>
                          </div>
                          {/* {testimonial.linkedInUrl && (
                            <a 
                              href={testimonial.linkedInUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )} */}
                        </div>
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
