import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Dummy hiring partner logos with tech company themes
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
  }
];

const HiringPartnersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#722e63] via-[#8b3a78] to-[#5f2652]" />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 mix-blend-soft-light bg-[radial-gradient(at_70%_20%,rgba(255,255,255,0.2),transparent),radial-gradient(at_30%_80%,rgba(255,255,255,0.2),transparent)]" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Hiring Partners
          </h2>
          <p className="text-xl text-gray-200">
            Join our network of 450+ industry-leading companies
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {hiringPartners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="h-[200px] rounded-xl bg-white/10 backdrop-blur-md p-6 flex flex-col items-center justify-center border border-white/20 group hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="w-20 h-20 mb-4">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <p className="text-white/70 group-hover:text-white/90 text-sm font-medium transition-colors">
                        {partner.name}
                      </p>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HiringPartnersSection;
