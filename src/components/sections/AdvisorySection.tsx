import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const AdvisorySection = () => {
  const advisors = [
    {
      name: "Prof. Shrikanth Ambekar",
      title: "Ex-Director Placements, VTU",
      bio: "Professor Ambekar brings over 35 years of experience in academia and placement guidance, helping students achieve their career aspirations.",
      company: "VTU",
      companyLogo: "/company-logo.svg", // Placeholder for logo
      experience: "35+ years of experience",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      name: "Ankur Vashishtha",
      title: "Product Leader, Author",
      subtitle: "Ex – Microsoft, Uber, Salesforce, Oracle",
      bio: "A seasoned product leader with experience at tech giants including Microsoft, Uber, Salesforce, and Oracle. Also a published author on product management.",
      company: "Microsoft",
      companyLogo: "/company-logo.svg", // Placeholder for logo
      experience: "18+ years of experience",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Dr. Nikhil Gala",
      title: "Ex-Chairperson, Corporate Relations, NMIMS",
      bio: "Dr. Gala has extensive experience in building corporate relations and enhancing placement opportunities for students at premier institutions.",
      company: "NMIMS",
      companyLogo: "/company-logo.svg", // Placeholder for logo
      experience: "16+ years of experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Sumit Shukla",
      title: "IIT – Kanpur, Python & ML Expert",
      bio: "An alumnus of IIT Kanpur specializing in Python and Machine Learning, Sumit brings technical expertise to help students master in-demand skills.",
      company: "IIT Kanpur",
      companyLogo: "/company-logo.svg", // Placeholder for logo
      experience: "12+ years of experience",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80"
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          {/* <p className="uppercase tracking-wider text-gray-500 mb-2">ADVISORY COMMITTEE</p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Advisory Committee
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {advisors.map((advisor, index) => (
            <div 
              key={index}
              className="relative overflow-hidden"
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <motion.div
                className={`relative flex ${expandedIndex === index ? 'w-[550px]' : 'w-[200px]'} h-[380px] bg-black rounded-none transition-all duration-500 ease-in-out overflow-hidden shadow-lg`}
                layout
              >
                {/* Main portrait column */}
                <motion.div 
                  className={`relative ${expandedIndex === index ? 'w-[200px]' : 'w-full'} h-full overflow-hidden transition-all duration-500`}
                  layout
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                  
                  {/* Image */}
                  <img 
                    src={advisor.image}
                    alt={advisor.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Content column that appears on hover */}
                {expandedIndex === index && (
                  <motion.div 
                    className="relative flex-1 bg-white p-6 flex flex-col justify-center"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '350px' }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{advisor.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{advisor.title}</p>
                    {advisor.subtitle && (
                      <p className="text-gray-600 text-xs mb-2">{advisor.subtitle}</p>
                    )}
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{advisor.bio}</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img 
                            src={advisor.companyLogo} 
                            alt={advisor.company} 
                            className="h-8 mr-2"
                          />
                          <span className="text-gray-700 text-sm font-medium">{advisor.company}</span>
                        </div>
                        <div className="text-purple-700 text-sm font-medium">
                          {advisor.experience}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Name overlay on the image */}
                <div className={`absolute ${expandedIndex === index ? 'bottom-4 left-4' : 'bottom-4 left-0 w-full text-center px-3'} z-20 transition-all duration-500`}>
                  {expandedIndex !== index && (
                    <>
                      <h3 className="text-lg font-bold text-white mb-1">{advisor.name}</h3>
                      <p className="text-xs text-gray-300 mb-1">{advisor.title}</p>
                      <p className="text-xs text-yellow-300 font-medium">{advisor.experience}</p>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;