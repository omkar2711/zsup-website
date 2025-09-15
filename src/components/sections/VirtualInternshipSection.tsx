import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Custom CSS for equal height cards
import "./framework-section.css"; // Reusing the existing CSS file

// Import all logo images to ensure they're included in the build
import { getLogoPath } from "@/lib/logo-utils";

// Company logos for virtual internships based on variant
const getCompanies = (variant: string) => {
  if (variant === "management") {
    return [
      { name: "Cars24", logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/cars24.PNG") },
      { name: "CultFit", logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/cultfit.PNG") },
      { name: "Danube Home", logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/danubeHome.PNG") },
      { name: "Fast Services", logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/fastServices.JPG") },
      { name: "Finaxa", logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/finaxa.JPG") },
      { name: "Jupiter", logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/jupiter.WEBP") },
      { name: "Practo", logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/practo.PNG") },
      { name: "Raw", logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/raw.PNG") },
      { name: "Uber", logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/uber.PNG") }
    ];
  }
  // Default home/tech logos
  return [
    { name: "Jupiter", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/jupiter.png") },
    { name: "NoBroker", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/nobroker.png") },
    { name: "Practo", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/practo.png") },
    { name: "Snapdeal", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/snapdeal.png") },
    { name: "Uber", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/uber.png") },
    { name: "ATAL", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/atalIncubationCenter.png") },
    { name: "Accionlabs", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/accionLabs.png") },
    { name: "Avetti", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/avetti.png") },
    { name: "Cars24", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/cars24.png") },
    { name: "CultFit", logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/cultfit.png") }
  ];
};

// Component for rendering a single company card
const CompanyCard = ({ company, index }: { company: { name: string; logo: string }, index: number }) => (
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
const CompanyRow = ({ variant }: { variant: string }) => {
  const companies = getCompanies(variant);
  const extendedCompanies = [...companies, ...companies]; // Duplicate for infinite scroll
  
  return (
    <div className="flex items-center">
      {extendedCompanies.map((company, index) => (
        <CompanyCard key={index} company={company} index={index} />
      ))}
    </div>
  );
};

// Virtual Internship Projects
const getInternshipProjects = (variant: string) => {
  if (variant === "management") {
    return [
      {
        company: "Uber",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/uber.PNG"),
        title: "Create a Hiring Strategy for a Leading Product Firm to Scale Their Team"
      },
      {
        company: "Fast Services",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/fastServices.JPG"),
        title: "Conduct Complete Financial Due Diligence of a Company for Investment Analysis"
      },
      {
        company: "Finaxa",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/finaxa.JPG"),
        title: "Conduct a Trend Analysis to Predict the Future Business Trends for an FMCG Company"
      },
      {
        company: "Jupiter",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/jupiter.WEBP"),
        title: "Study customer churn analytics for the banking industry"
      },
      {
        company: "Uber",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/uber.PNG"),
        title: "Develop a predictive model to accurately forecast hourly traffic volumes at different road junctions based on historical traffic data"
      },
      {
        company: "Cars24",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/cars24.PNG"),
        title: "Analyse the market trends of the Used Car Market from multiple geographies using EDA and Data Visualization"
      },
      {
        company: "Practo",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/practo.PNG"),
        title: "Identify the best source of recruitment for a tech startup, based on previous data of candidate sources and recruitment strategies"
      },
      {
        company: "Danube Home",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/danubeHome.PNG"),
        title: "Analysis of Sales Data of Retail Stores Across America Using Exploratory Data Analysis and Data Visualisation"
      },
      {
        company: "CultFit",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/cultfit.PNG"),
        title: "Design a cause-based marketing plan for a city-wide marathon event"
      },
      {
        company: "Raw",
        logo: getLogoPath("/assets/virtualInternshipLogos/management_logos/raw.PNG"),
        title: "Observe Consumer Behaviour at a Local Point of Sale, and Develop a Marketing Strategy for a Niche Health Beverage"
      }
    ];
  }
  
  // Home/Tech projects
  return [
    {
      company: "Avetti",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/avetti.png"),
      title: "Design the Complete UI/UX for a SaaS Based Company"
    },
    {
      company: "Jupiter",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/jupiter.png"),
      title: "Build a full-stack web application that allows the user to split their savings bank account"
    },
    {
      company: "Accionlabs",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/accionLabs.png"),
      title: "Automate Database Backup and Restoration on AWS"
    },
    {
      company: "Cars24",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/cars24.png"),
      title: "Build a Full Stack Web Application that Helps Users Browse and Create Road Trips"
    },
    {
      company: "Snapdeal",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/snapdeal.png"),
      title: "Identify Customer Segments for Online Retail with K-Means Clustering"
    },
    {
      company: "Practo",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/practo.png"),
      title: "Identify the Best Recruitment Source for a Tech Startup"
    },
    {
      company: "ATAL",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/atalIncubationCenter.png"),
      title: "Categorize Music Genres Using Machine Learning"
    },
    {
      company: "Uber",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/uber.png"),
      title: "Predict Uber Fare Amounts with Regression"
    },
    {
      company: "Jupiter",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/jupiter.png"),
      title: "Detect Credit Card Fraud Using Logistic Regression"
    },
    {
      company: "CultFit",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/cultfit.png"),
      title: "Dynamic Pricing for Fitness Classes"
    },
    {
      company: "Accionlabs",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/accionLabs.png"),
      title: "Develop the backend for a CRM Tool using Java Springboot"
    },
    {
      company: "NoBroker",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/nobroker.png"),
      title: "Build a platform to find properties based on interior preferences & budget"
    },
    {
      company: "Practo",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/practo.png"),
      title: "Build An Application For Booking Appointments For Diagnostics Tests"
    },
    {
      company: "Avetti",
      logo: getLogoPath("/assets/virtualInternshipLogos/Home_all/avetti.png"),
      title: "Build a Full Stack Web Application that Helps Users Browse and Create Road Trips"
    }
  ];
};

// Project Card Component
const ProjectCard = ({ project }: { project: { company: string; logo: string; title: string } }) => {
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

import { InternshipConfig } from '@/lib/internship-config';

interface VirtualInternshipSectionProps {
  config: InternshipConfig;
  variant: string;
}

const VirtualInternshipSection: React.FC<VirtualInternshipSectionProps> = ({ config, variant }) => {
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
            <CompanyRow variant={variant} />
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
              {getInternshipProjects(variant).map((project, index) => (
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
              onClick={() => {
                window.location.href = '/contact-us';
              }}
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
