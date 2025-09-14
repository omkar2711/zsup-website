import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Custom CSS for equal height cards
import "./framework-section.css"; // Reusing the existing CSS file

// Company logos for virtual internships
const internshipCompanies = [
  {
    name: "Jupiter",
    logo: "/company-logo.svg"
  },
  {
    name: "NoBroker",
    logo: "/company-logo.svg"
  },
  {
    name: "Practo",
    logo: "/company-logo.svg"
  },
  {
    name: "Snapdeal",
    logo: "/company-logo.svg"
  },
  {
    name: "Uber",
    logo: "/company-logo.svg"
  },
  {
    name: "ATAL",
    logo: "/company-logo.svg"
  },
  {
    name: "Accionlabs",
    logo: "/company-logo.svg"
  },
  {
    name: "Avetti",
    logo: "/company-logo.svg"
  },
  {
    name: "Cars24",
    logo: "/company-logo.svg"
  },
  {
    name: "CultFit",
    logo: "/company-logo.svg"
  }
];

// Duplicate the companies to create a longer list for seamless looping
const extendedCompanies = [...internshipCompanies, ...internshipCompanies];

// Component for rendering a single company card
const CompanyCard = ({ company, index }: { company: typeof internshipCompanies[0], index: number }) => (
  <motion.div
    key={`${company.name}-${index}`}
    className="flex-shrink-0 mx-4"
  >
    <img
      src={company.logo}
      alt={company.name}
      className="h-10 object-contain"
    />
  </motion.div>
);

// Component that renders all companies in a row
const CompanyRow = () => (
  <div className="flex items-center">
    {extendedCompanies.map((company, index) => (
      <CompanyCard key={index} company={company} index={index} />
    ))}
  </div>
);

// Virtual Internship Projects
const internshipProjects = [
  {
    company: "Avetti",
    logo: "/company-logo.svg",
    title: "Design the Complete UI/UX for a SaaS Based Company"
  },
  {
    company: "Jupiter",
    logo: "/company-logo.svg",
    title: "Build a full-stack web application that allows the user to split their savings bank account"
  },
  {
    company: "Accionlabs",
    logo: "/company-logo.svg",
    title: "Automate Database Backup and Restoration on AWS"
  },
  {
    company: "Cars24",
    logo: "/company-logo.svg",
    title: "Build a Full Stack Web Application that Helps Users Browse and Create Road Trips Around the World using MERN"
  },
  {
    company: "Snapdeal",
    logo: "/company-logo.svg",
    title: "Identify Customer Segments for Online Retail with K-Means Clustering"
  },
  {
    company: "TechStartup",
    logo: "/company-logo.svg",
    title: "Identify the Best Recruitment Source for a Tech Startup"
  },
  {
    company: "MusicTech",
    logo: "/company-logo.svg",
    title: "Categorize Music Genres Using Machine Learning"
  },
  {
    company: "Uber",
    logo: "/company-logo.svg",
    title: "Predict Uber Fare Amounts with Regression"
  },
  {
    company: "FinTech",
    logo: "/company-logo.svg",
    title: "Detect Credit Card Fraud Using Logistic Regression"
  },
  {
    company: "CultFit",
    logo: "/company-logo.svg",
    title: "Dynamic Pricing for Fitness Classes"
  },
  {
    company: "CRM",
    logo: "/company-logo.svg",
    title: "Develop the backend for a CRM Tool using Java Springboot"
  },
  {
    company: "NoBroker",
    logo: "/company-logo.svg",
    title: "Build a platform to find properties based on interior preferences & budget specifications"
  },
  {
    company: "Practo",
    logo: "/company-logo.svg",
    title: "Build An Application For Booking Appointments For Diagnostics Tests"
  },
  {
    company: "Travel",
    logo: "/company-logo.svg",
    title: "Build a Full Stack Web Application that Helps Users Browse and Create Road Trips"
  }
];

// Project Card Component
const ProjectCard = ({ project }: { project: typeof internshipProjects[0] }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-full flex flex-col">
      {/* Primary color header with "CERTIFIED BY" text */}
      <div className="bg-primary text-white text-center py-2 px-4 font-bold">
        CERTIFIED BY
      </div>
      
      {/* Cream background content area */}
      <div className="bg-[#fefdf8] p-6 flex flex-col flex-grow">
        {/* Company logo */}
        <div className="flex justify-center py-4 mb-6">
          <img 
            src={project.logo} 
            alt={project.company} 
            className="h-20 object-contain" 
          />
        </div>
        
        {/* Project title - with project-card-content class for equal heights */}
        <div className="project-card-content flex-grow">
          <p className="text-black text-lg font-medium leading-tight">
            {project.title}
          </p>
        </div>
      </div>
    </div>
  );
};

const VirtualInternshipSection = () => {
  // Hook to ensure equal heights for all project cards
  useEffect(() => {
    // Function to set equal heights for all cards
    const equalizeCardHeights = () => {
      const cards = document.querySelectorAll('.project-card-content');
      let maxHeight = 0;
      
      // Reset heights
      cards.forEach(card => {
        (card as HTMLElement).style.height = 'auto';
        maxHeight = Math.max(maxHeight, (card as HTMLElement).offsetHeight);
      });
      
      // Set equal height for all cards
      cards.forEach(card => {
        (card as HTMLElement).style.height = `${maxHeight}px`;
      });
    };
    
    // Run on initial load and resize
    equalizeCardHeights();
    window.addEventListener('resize', equalizeCardHeights);
    
    // Cleanup
    return () => window.removeEventListener('resize', equalizeCardHeights);
  }, []);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Virtual Internships with Leading Companies
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Participate in Industry-Led Internships to solve real-world problems elevating your portfolio and boosting your career prospects.
          </p>
        </div>

        {/* Company Logos */}
        <div className="overflow-hidden relative mb-16">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }}
            className="w-fit flex"
          >
            <CompanyRow />
          </motion.div>
        </div>

        {/* Internship Project Cards Carousel */}
        <div className="mb-16 relative">
          <Carousel 
            className="w-full equal-height-carousel" 
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps"
            }}
          >
            <div className="flex items-center justify-end mb-4">
              <div className="text-lg font-medium text-gray-700 mr-auto">
                Explore our industry-leading virtual internship projects
              </div>
              <CarouselPrevious className="relative static mr-2 bg-primary text-white hover:bg-primary/90 hover:text-white border-none" />
              <CarouselNext className="relative static bg-primary text-white hover:bg-primary/90 hover:text-white border-none" />
            </div>
            <CarouselContent className="-ml-2 md:-ml-4">
              {internshipProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-full">
                  <div className="p-1 h-full">
                    <ProjectCard project={project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Certificate Image */}
        <div className="mt-16 relative">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                Earn Industry-Recognized Certificates
              </span>
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Add verified credentials to your portfolio that showcase your practical skills to employers
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary-light/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary-light/10 rounded-full blur-xl"></div>
            
            {/* Certificate image with shadow and border */}
            <div className="relative shadow-lg rounded-xl overflow-hidden border border-primary-light/20">
              <img 
                src="/certificate-sample-new.svg" 
                alt="Certificate of Recognition" 
                className="w-full"
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              className="bg-primary-light text-white font-semibold px-8 py-6 text-base hover:bg-primary transition-colors rounded-full"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualInternshipSection;
