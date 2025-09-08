import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import college logos
import dyPatilLogo from "../../assets/college_logos/DY Patil University.jpg";
import lnmiitLogo from "../../assets/college_logos/LNMIIT.jpg";
import kleBelgaumLogo from "../../assets/college_logos/KLE, Belgaum.jpeg";
import ajeenkyaLogo from "../../assets/college_logos/Ajeenkya dy patil.jpeg";
import apShahLogo from "../../assets/college_logos/AP-Shah.webp";
import atharvaLogo from "../../assets/college_logos/Atharva College of Engineering.png";

interface UniversityCertProps {
  name: string;
  logo: string;
  programs: string[];
  description: string;
  link: string;
}

const universities: UniversityCertProps[] = [
  {
    name: "DY Patil University",
    logo: dyPatilLogo,
    programs: ["B.Tech in Computer Science", "MBA in Technology Management"],
    description: "Partner with one of India's premier technical education institutions for comprehensive training programs.",
    link: "#dy-patil-certificates"
  },
  {
    name: "LNMIIT",
    logo: lnmiitLogo,
    programs: ["B.Tech in Computer Engineering", "M.Tech in AI & Data Science"],
    description: "Access cutting-edge technology education from The LNM Institute of Information Technology.",
    link: "#lnmiit-certificates"
  },
  {
    name: "KLE Belgaum",
    logo: kleBelgaumLogo,
    programs: ["B.Tech in Information Technology", "M.Tech in Computer Science"],
    description: "Develop job-ready skills with professional certificates from a leading technical institution.",
    link: "#kle-certificates"
  },
  {
    name: "Ajeenkya DY Patil",
    logo: ajeenkyaLogo,
    programs: ["B.Tech in AI & Machine Learning", "MBA in Digital Business"],
    description: "Master in-demand skills with certificates designed by industry experts.",
    link: "#ajeenkya-certificates"
  },
  {
    name: "AP Shah Institute",
    logo: apShahLogo,
    programs: ["B.E. in Computer Engineering", "Diploma in Software Development"],
    description: "Enhance your expertise with world-class education from AP Shah Institute of Technology.",
    link: "#apshah-certificates"
  },
  {
    name: "Atharva College of Engineering",
    logo: atharvaLogo,
    programs: ["B.Tech in Information Technology", "M.Tech in Computer Networks"],
    description: "Build your skills and validate your expertise with industry-recognized certifications.",
    link: "#atharva-certificates"
  }
];

const UniversityCertificatesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="university-certificates" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Academic Partners
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ZSkillup collaborates with leading educational institutions across India to provide industry-recognized programs and certifications.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {universities.map((university, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-20 h-20 mr-4 flex-shrink-0 bg-white p-1 rounded-md shadow-sm border border-gray-100">
                        <img 
                          src={university.logo} 
                          alt={`${university.name} logo`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {university.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {university.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Popular Programs:
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                        {university.programs.map((program, idx) => (
                          <li key={idx} className="mb-1">{program}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      View Partnership Programs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
            Explore All Academic Partnerships
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UniversityCertificatesSection;
