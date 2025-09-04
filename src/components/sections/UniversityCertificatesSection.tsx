import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UniversityCertProps {
  name: string;
  logo: string;
  programs: string[];
  description: string;
  link: string;
}

const universities: UniversityCertProps[] = [
  {
    name: "Harvard University",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png",
    programs: ["CS50: Introduction to Computer Science", "Data Science Professional Certificate"],
    description: "Gain skills and credentials from one of the world's leading academic institutions.",
    link: "#harvard-certificates"
  },
  {
    name: "MIT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png",
    programs: ["MicroMasters in Data Science", "Professional Certificate in Coding"],
    description: "Access cutting-edge technology education from the Massachusetts Institute of Technology.",
    link: "#mit-certificates"
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
    programs: ["Data Science Professional Certificate", "AI Engineering Professional Certificate"],
    description: "Develop job-ready skills with professional certificates from a technology leader.",
    link: "#ibm-certificates"
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    programs: ["Google IT Support Professional Certificate", "Google Data Analytics Certificate"],
    description: "Master in-demand skills with certificates designed by Google experts.",
    link: "#google-certificates"
  },
  {
    name: "Stanford University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/1200px-Stanford_Cardinal_logo.svg.png",
    programs: ["Machine Learning Specialization", "Computer Security Certificate"],
    description: "Enhance your expertise with world-class education from Stanford University.",
    link: "#stanford-certificates"
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
    programs: ["Microsoft Azure Fundamentals", "Microsoft Data Scientist Associate"],
    description: "Build your skills and validate your expertise with Microsoft's professional certifications.",
    link: "#microsoft-certificates"
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
            Earn Recognized Certificates
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enhance your resume with prestigious certifications from world-renowned universities and industry-leading companies.
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
                      <div className="w-16 h-16 mr-4 flex-shrink-0">
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
                      View Certificates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
            Browse All Certificate Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UniversityCertificatesSection;
