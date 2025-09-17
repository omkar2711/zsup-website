import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { CheckCircle, Users, Presentation, Activity, Calendar } from 'lucide-react';

const PartnershipApproach = () => {
  // Effect to ensure all description elements maintain equal heights
  useEffect(() => {
    const equalizeCellHeights = () => {
      // Find all description elements and feature containers
      const descriptions = document.querySelectorAll('.card-description');
      const featureContainers = document.querySelectorAll('.feature-container');
      
      // Reset heights to auto first to get natural heights
      descriptions.forEach(el => {
        (el as HTMLElement).style.height = 'auto';
      });
      
      featureContainers.forEach(el => {
        (el as HTMLElement).style.height = 'auto';
      });
      
      // Find the maximum height for descriptions
      let maxDescHeight = 0;
      descriptions.forEach(el => {
        maxDescHeight = Math.max(maxDescHeight, (el as HTMLElement).offsetHeight);
      });
      
      // Find the maximum height for feature containers
      let maxFeatHeight = 0;
      featureContainers.forEach(el => {
        maxFeatHeight = Math.max(maxFeatHeight, (el as HTMLElement).offsetHeight);
      });
      
      // Apply the maximum height to all elements
      descriptions.forEach(el => {
        (el as HTMLElement).style.height = `${maxDescHeight}px`;
      });
      
      featureContainers.forEach(el => {
        (el as HTMLElement).style.height = `${maxFeatHeight}px`;
      });
    };
    
    // Run on initial load and window resize
    equalizeCellHeights();
    window.addEventListener('resize', equalizeCellHeights);
    
    // Cleanup
    return () => window.removeEventListener('resize', equalizeCellHeights);
  }, []);
  
  return (
     <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Partnership Approach</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work as your strategic partner, not a rigid vendor. Every program is tailored to your institution's specific needs, student profile, and placement goals.
              </p>
              <p className="text-lg font-medium text-gray-700 mt-4 italic">
                "Because every institution is unique, every solution should be too."
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Flexible Training Delivery</h3>
              <p className="text-lg text-gray-600 mb-8">Choose the delivery method that works best for your institution</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Users className="h-7 w-7 text-white" />,
                    iconBg: "bg-pink-500",
                    title: "Offline Intensive Sessions",
                    subtitle: "5-day immersive programs on campus",
                    description: "Face-to-face workshops, hands-on exercises, peer collaboration",
                    features: [
                      "Campus-based delivery",
                      "Interactive workshops",
                      "Peer learning",
                      "Immediate feedback"
                    ],
                    cta: "Perfect for institutions seeking offline intensive sessions"
                  },
                  {
                    icon: <Presentation className="h-7 w-7 text-white" />,
                    iconBg: "bg-blue-500",
                    title: "Live Online Masterclasses",
                    subtitle: "Industry experts and doubt sessions",
                    description: "Expert-led sessions, real-time Q&A, recorded for review",
                    features: [
                      "Expert instructors",
                      "Live interaction",
                      "Recorded sessions",
                      "Flexible timing"
                    ],
                    cta: "Perfect for institutions seeking live online masterclasses"
                  },
                  {
                    icon: <Activity className="h-7 w-7 text-white" />,
                    iconBg: "bg-indigo-500",
                    title: "Hybrid Learning Models",
                    subtitle: "Combined approach for maximum impact",
                    description: "Best of both worlds - online flexibility with offline engagement",
                    features: [
                      "Flexible scheduling",
                      "Multi-modal learning",
                      "Optimized outcomes",
                      "Personalized approach"
                    ],
                    cta: "Perfect for institutions seeking hybrid learning models"
                  },
                  {
                    icon: <Calendar className="h-7 w-7 text-white" />,
                    iconBg: "bg-green-500",
                    title: "Extended Support",
                    subtitle: "12-month platform access, including alumni phase",
                    description: "Continued learning and career support beyond graduation",
                    features: [
                      "Alumni access",
                      "Ongoing support",
                      "Career guidance",
                      "Lifetime learning"
                    ],
                    cta: "Perfect for institutions seeking extended support"
                  }
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col h-full"
                  >
                    {/* Consistent colored header */}
                    <div className={`${option.iconBg} p-4 flex items-center gap-3 h-28`}>
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        {option.icon}
                      </div>
                      <div className="text-white">
                        <h4 className="font-bold text-lg">{option.title}</h4>
                        <p className="text-sm opacity-90">{option.subtitle}</p>
                      </div>
                    </div>
                    {/* Card content with flex layout for consistent spacing */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Description with dynamic equal height class */}
                      <div className="card-description flex items-center">
                        <p className="text-gray-600">{option.description}</p>
                      </div>
                      {/* Features section */}
                      <div className="mt-4 feature-container">
                        <h5 className="font-semibold mb-3">Key Features:</h5>
                        <ul className="space-y-2 mb-6">
                          {option.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Bottom CTA with consistent spacing */}
                      <div className="text-center mt-auto pt-4 border-t border-gray-100">
                        <p className="text-sm font-medium text-gray-700">{option.cta}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default PartnershipApproach
