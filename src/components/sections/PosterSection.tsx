import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Calendar, Star, Award, ArrowUpRight, CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const PosterSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Modern Background with layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-gray-100 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,70,252,0.15),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,204,0,0.15),transparent_60%)] z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Success Stories</h2>
            <p className="text-lg text-gray-600">From classroom to career success - see how our graduates transform their lives</p>
          </motion.div>
        </div>
        
        {/* Main success story card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="shadow-[0_15px_50px_-10px_rgba(114,46,99,0.25)] bg-white relative overflow-hidden border-0 rounded-xl">
              {/* Two-column layout for modern design */}
              <div className="flex flex-col lg:flex-row">
                {/* Left column - Hero content with purple gradient */}
                <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#722e63] via-[#8b3a78] to-[#5f2652] p-6 md:p-8 relative overflow-hidden">
                  {/* Purple background decorative elements */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)] blur-2xl opacity-70" />
                  <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)] blur-2xl" />
                  
                  {/* Elite Badge */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-0 px-3 py-1 text-xs font-bold shadow-lg rounded-full">
                        ELITE BATCH
                      </Badge>
                    </motion.div>
                  </div>
                  
                  {/* Content container */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header with trophy icon */}
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shadow-lg mr-3 relative overflow-hidden border border-white/20">
                          <motion.div
                            animate={{ 
                              y: [0, -2, 0],
                              rotate: [0, 5, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Trophy className="w-6 h-6 text-yellow-400" />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                        </div>
                        <div>
                          <p className="text-white/70 text-xs uppercase tracking-wider">Student Success Story</p>
                          <h3 className="text-lg font-semibold text-white">ZSkillup Elite Program</h3>
                        </div>
                      </div>
                    </motion.div>
                
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-200"
                    >
                      From Fresher to Dream Job
                    </motion.h2>
                    
                    <motion.div 
                      className="relative inline-block"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                        ₹19 LPA
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent flex items-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      at <span className="text-white font-bold ml-2">Amazon</span>
                      <img src="/company-logo.svg" alt="Amazon" className="h-6 ml-2 rounded-full bg-white/10 p-1" />
                    </motion.div>
                    
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <motion.div 
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1"
                        whileHover={{ scale: 1.02 }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <div className="relative">
                          <div className="absolute -top-6 -left-2 w-12 h-12 bg-green-500 rounded-full opacity-20 blur-lg"></div>
                          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-400" />
                        </div>
                        <div className="text-xl font-bold text-white mb-0.5 text-center">2400%</div>
                        <div className="text-xs text-gray-200 text-center">Career Growth</div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                        whileHover={{ scale: 1.02 }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                      >
                        <div className="relative">
                          <div className="absolute -top-6 -left-2 w-12 h-12 bg-blue-500 rounded-full opacity-20 blur-lg"></div>
                          <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                        </div>
                        <div className="text-xl font-bold text-white mb-0.5 text-center">6 Months</div>
                        <div className="text-xs text-gray-200 text-center">Training</div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1"
                        whileHover={{ scale: 1.02 }}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                      >
                        <div className="relative">
                          <div className="absolute -top-6 -left-2 w-12 h-12 bg-yellow-500 rounded-full opacity-20 blur-lg"></div>
                          <Award className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                        </div>
                        <div className="text-xl font-bold text-white mb-0.5 text-center">Top 1%</div>
                        <div className="text-xs text-gray-200 text-center">Elite</div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="mt-6 pt-4 border-t border-white/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <div className="flex space-x-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-200 max-w-xs mx-auto text-center italic font-light leading-relaxed">
                        "From campus to corporate success - our Elite Batch transforms students into leaders."
                      </p>
                      
                      <button className="mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-amber-500/30 transition-all duration-300 flex items-center mx-auto group text-sm">
                        Apply Now
                        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  </div>
                </div>
                
                {/* Right column - Program features with white background */}
                <div className="w-full lg:w-1/2 bg-white p-6 flex flex-col justify-center">
                  <div className="max-w-sm mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-4">What sets our Elite Batch apart</h3>
                    </motion.div>
                    
                    <div className="space-y-3">
                      {[
                        {
                          title: "Industry-Ready Skills",
                          description: "Curriculum designed with top companies",
                          icon: <CheckCircle className="w-4 h-4 text-purple-600" />,
                          delay: 0.3
                        },
                        {
                          title: "Personalized Mentorship",
                          description: "1:1 guidance from industry experts",
                          icon: <CheckCircle className="w-4 h-4 text-purple-600" />,
                          delay: 0.4
                        },
                        {
                          title: "Guaranteed Placement",
                          description: "100% job guarantee or money back",
                          icon: <CheckCircle className="w-4 h-4 text-purple-600" />,
                          delay: 0.5
                        },
                        {
                          title: "Real Projects Portfolio",
                          description: "Work on live industry projects",
                          icon: <CheckCircle className="w-4 h-4 text-purple-600" />,
                          delay: 0.6
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 border-b border-gray-100 pb-3 last:border-0"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: item.delay }}
                        >
                          <div className="bg-purple-100 rounded-full p-1.5 mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-xs text-gray-600">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PosterSection;
