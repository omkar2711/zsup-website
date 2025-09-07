import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, ArrowRight, Zap, BookOpen, Users, Award, Building, Briefcase, CalendarClock } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Offerings = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/20 z-0" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                Our Comprehensive Offerings
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Tailored solutions to bridge the gap between education and employability
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Offerings Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Our Solutions Ecosystem"
              subtitle="A comprehensive approach to employability enhancement"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 dark:bg-blue-700/20 rounded-full -mr-16 -mt-16 z-0"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="bg-blue-100 dark:bg-blue-800/40 p-3 rounded-xl inline-block mb-4">
                      <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Training Programs</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Structured skill development programs designed to enhance technical and soft skills through industry-aligned curriculum.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {["Personalized learning paths", "Hands-on projects", "Expert-led sessions", "Regular assessments"].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-8 pb-8 pt-0">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/50 dark:bg-purple-700/20 rounded-full -mr-16 -mt-16 z-0"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="bg-purple-100 dark:bg-purple-800/40 p-3 rounded-xl inline-block mb-4">
                      <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">ZSkillHub Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Our AI-powered digital platform that delivers daily practice, adaptive learning, and comprehensive career preparation.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {["Adaptive mock interviews", "ATS-friendly resume builder", "Daily skill practice", "Performance analytics"].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-8 pb-8 pt-0">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                      Explore Platform <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/50 dark:bg-green-700/20 rounded-full -mr-16 -mt-16 z-0"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="bg-green-100 dark:bg-green-800/40 p-3 rounded-xl inline-block mb-4">
                      <Briefcase className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Placement Services</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      End-to-end placement support connecting qualified students with our extensive network of hiring partners.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {["450+ hiring partners", "Exclusive job opportunities", "Interview preparation", "Post-placement support"].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="px-8 pb-8 pt-0">
                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                      View Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Program Categories */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Our Program Categories"
              subtitle="Tailored for different needs and career aspirations"
              align="center"
            />
            
            <Tabs defaultValue="students" className="mt-12">
              <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-10">
                <TabsTrigger value="students" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  For Students
                </TabsTrigger>
                <TabsTrigger value="universities" className="data-[state=active]:bg-secondary data-[state=active]:text-white">
                  For Universities
                </TabsTrigger>
                <TabsTrigger value="corporates" className="data-[state=active]:bg-accent data-[state=active]:text-white">
                  For Corporates
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="students" className="mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Career Foundation",
                      description: "Entry-level program for freshers to build fundamental skills and career readiness",
                      features: ["Basic technical skills", "Communication training", "Resume building", "Interview preparation"],
                      icon: <Users className="h-6 w-6 text-primary" />,
                      badge: "Most Popular",
                      price: "₹15,000"
                    },
                    {
                      title: "Professional Development",
                      description: "Mid-level program for those looking to advance their careers with specialized skills",
                      features: ["Advanced technical training", "Project management", "Leadership development", "Industry certification prep"],
                      icon: <Award className="h-6 w-6 text-primary" />,
                      badge: "",
                      price: "₹25,000"
                    },
                    {
                      title: "Elite Batch",
                      description: "Premium program with personalized mentorship and guaranteed placement",
                      features: ["1:1 expert mentorship", "Live projects with companies", "Guaranteed placement", "Higher salary packages"],
                      icon: <Zap className="h-6 w-6 text-primary" />,
                      badge: "High Demand",
                      price: "₹45,000"
                    }
                  ].map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="bg-primary/10 p-2 rounded-lg">
                              {program.icon}
                            </div>
                            {program.badge && (
                              <Badge className="bg-primary text-white">{program.badge}</Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">{program.description}</p>
                          <ul className="space-y-2 mb-6">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="font-bold text-xl">{program.price}</div>
                            <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                              Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="universities" className="mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Campus Integration",
                      description: "Seamlessly integrate our employability framework into your existing curriculum",
                      features: ["Custom curriculum mapping", "Faculty training", "Assessment integration", "Outcome tracking"],
                      icon: <Building className="h-6 w-6 text-secondary" />,
                      badge: "Best Value",
                      price: "Custom Pricing"
                    },
                    {
                      title: "Career Center Setup",
                      description: "Establish or enhance your institution's career services with our proven methodology",
                      features: ["Infrastructure setup", "Staff training", "Process implementation", "Ongoing support"],
                      icon: <Briefcase className="h-6 w-6 text-secondary" />,
                      badge: "",
                      price: "Custom Pricing"
                    },
                    {
                      title: "Full Placement Partnership",
                      description: "Comprehensive end-to-end solution handling all aspects of student employability",
                      features: ["Training delivery", "Platform access", "Placement services", "Outcome guarantee"],
                      icon: <Award className="h-6 w-6 text-secondary" />,
                      badge: "Comprehensive",
                      price: "Performance-based"
                    }
                  ].map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="bg-secondary/10 p-2 rounded-lg">
                              {program.icon}
                            </div>
                            {program.badge && (
                              <Badge className="bg-secondary text-white">{program.badge}</Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">{program.description}</p>
                          <ul className="space-y-2 mb-6">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="font-bold text-xl">{program.price}</div>
                            <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                              Request Demo
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="corporates" className="mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Campus Hiring",
                      description: "Access pre-vetted, job-ready talent from our pool of trained graduates",
                      features: ["Curated candidate profiles", "Pre-assessed skills", "Streamlined hiring", "Post-hiring support"],
                      icon: <Users className="h-6 w-6 text-accent" />,
                      badge: "No Cost",
                      price: "Free"
                    },
                    {
                      title: "Skill Development Partnership",
                      description: "Co-create training programs aligned with your specific hiring needs",
                      features: ["Custom skill focus", "Industry-aligned projects", "Early talent access", "Brand visibility"],
                      icon: <BookOpen className="h-6 w-6 text-accent" />,
                      badge: "",
                      price: "Custom Pricing"
                    },
                    {
                      title: "Enterprise Training",
                      description: "Upskill your existing workforce with our proven training methodology",
                      features: ["Custom learning paths", "Skill gap analysis", "Progress tracking", "Certification"],
                      icon: <Building className="h-6 w-6 text-accent" />,
                      badge: "Enterprise",
                      price: "Volume-based"
                    }
                  ].map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="bg-accent/10 p-2 rounded-lg">
                              {program.icon}
                            </div>
                            {program.badge && (
                              <Badge className="bg-accent text-white">{program.badge}</Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">{program.description}</p>
                          <ul className="space-y-2 mb-6">
                            {program.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="font-bold text-xl">{program.price}</div>
                            <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                              Partner With Us
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Upcoming Batches */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Upcoming Program Batches"
              subtitle="Secure your spot in our next cohort"
              align="center"
            />
            
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Career Foundation Batch",
                  startDate: "September 15, 2025",
                  duration: "3 months",
                  mode: "Online + Weekend Classes",
                  seats: "30 seats remaining",
                  color: "blue"
                },
                {
                  title: "Elite Batch",
                  startDate: "October 1, 2025",
                  duration: "6 months",
                  mode: "Full-time Immersive",
                  seats: "15 seats remaining",
                  color: "purple",
                  featured: true
                },
                {
                  title: "Professional Development",
                  startDate: "September 25, 2025",
                  duration: "4 months",
                  mode: "Weekday Evening Classes",
                  seats: "25 seats remaining",
                  color: "green"
                }
              ].map((batch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card 
                    className={`border-0 shadow-lg hover:shadow-xl transition-shadow h-full ${
                      batch.featured ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    {batch.featured && (
                      <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-primary text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
                        Featured
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className={`w-full h-32 bg-${batch.color}-100 dark:bg-${batch.color}-900/20 rounded-lg mb-6 flex items-center justify-center`}>
                        <CalendarClock className={`h-16 w-16 text-${batch.color}-500 dark:text-${batch.color}-400`} />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{batch.title}</h3>
                      <div className="space-y-3 text-gray-600 dark:text-gray-400">
                        <div className="flex justify-between">
                          <span>Start Date:</span>
                          <span className="font-medium">{batch.startDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">{batch.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mode:</span>
                          <span className="font-medium">{batch.mode}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Availability:</span>
                          <span className="font-medium text-primary">{batch.seats}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button className={`w-full bg-${batch.color}-600 hover:bg-${batch.color}-700 text-white`}>
                        Enroll Now
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Not sure which program is right for you?
              </h2>
              <p className="text-xl mb-8 text-white/80">
                Speak with our program advisors to find the perfect fit for your goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-medium"
                >
                  Schedule a Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium"
                >
                  View Program Catalog
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;
