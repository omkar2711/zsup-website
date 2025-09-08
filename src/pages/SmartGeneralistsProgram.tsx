import React from 'react';
import Navbar from '@/components/Navbar';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Users, 
  Target, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Briefcase, 
  ChevronRight, 
  Brain, 
  Award,
  Sparkles,
  BarChart,
  PieChart,
  Activity,
  TrendingUp,
  Presentation,
  ArrowRight,
  LineChart,
  MousePointer,
  Globe,
  LayoutGrid,
  Compass,
  Cpu,
  Beaker as Flask
} from 'lucide-react';

const SmartGeneralistsProgram = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0"></div>
        <div className="absolute inset-0 opacity-30 z-0" style={{ backgroundImage: "url('/grid.svg')" }}></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full filter blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-200 py-2 px-4 text-sm">For Institutions</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-purple-800 via-indigo-700 to-pink-700 bg-clip-text text-transparent">
                  Smart Generalist Readiness Program
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                  Preparing versatile professionals for the modern workplace
                </p>
                <p className="text-lg text-gray-600 mb-10">
                  Helping students from every academic background develop the versatile skills needed to thrive across industries.
                </p>
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl blur-xl opacity-20 transform scale-105"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Smart Generalist Program" 
                  className="relative z-10 rounded-3xl shadow-xl w-full" 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who is the program for */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Built For Your Students" 
              subtitle="The multi-disciplinary approach to modern career building"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: <BookOpen className="h-10 w-10 text-indigo-500" />,
                  title: "Liberal Arts & Humanities",
                  description: "Students with strong critical thinking and communication skills seeking professional applications"
                },
                {
                  icon: <Flask className="h-10 w-10 text-purple-500" />,
                  title: "Science Graduates",
                  description: "Students exploring non-research careers that leverage their analytical abilities"
                },
                {
                  icon: <BarChart className="h-10 w-10 text-pink-500" />,
                  title: "Commerce Students",
                  description: "Students seeking diverse opportunities beyond traditional finance and accounting roles"
                },
                {
                  icon: <Cpu className="h-10 w-10 text-blue-500" />,
                  title: "Engineering Students",
                  description: "Students interested in business roles that complement their technical foundation"
                },
                {
                  icon: <Compass className="h-10 w-10 text-emerald-500" />,
                  title: "Explorers & Discoverers",
                  description: "Students unsure of specific career paths but eager to explore multiple industries"
                },
                {
                  icon: <LayoutGrid className="h-10 w-10 text-amber-500" />,
                  title: "Cross-Disciplinary Thinkers",
                  description: "Students who excel at connecting ideas across different fields and domains"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Why This Matters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Challenges Faced By Students in Non-Specialised Fields" 
              subtitle="As workplaces become highly cross-functional, most roles require diverse skill sets, yet students from non-specialized backgrounds face unique challenges:"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: <MousePointer className="h-10 w-10 text-red-500" />,
                  title: "Career Confusion",
                  description: "Students in general degrees often don't know what roles they can aim for, or how their education connects to real jobs."
                },
                {
                  icon: <LayoutGrid className="h-10 w-10 text-orange-500" />,
                  title: "Scattered Skills",
                  description: "They learn a bit of everything, but struggle to build a clear professional identity that employers understand."
                },
                {
                  icon: <Globe className="h-10 w-10 text-yellow-500" />,
                  title: "Limited Industry Exposure",
                  description: "Most don't get to see the new-age, cross-functional roles where versatility is valued — leaving them unaware of real opportunities."
                },
                {
                  icon: <Target className="h-10 w-10 text-blue-500" />,
                  title: "Hard to Stand Out",
                  description: "Without clear positioning, it's tough for them to highlight transferable skills and compete with specialized graduates."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 text-center">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Our Solution?</h3>
              <p className="text-lg text-gray-700">
                Strategic skill combination + targeted industry exposure + clear career positioning = versatile professionals ready for the future of work
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ZSkillHub - AI platform */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="ZSkillHub AI Platform" 
              subtitle="India's most advanced employability platform that adapts, learns, and grows with every student interaction"
              align="center"
            />
            
            <div className="flex flex-wrap justify-center gap-6 mt-12 mb-16">
              {[
                {
                  icon: <Briefcase className="h-6 w-6" />,
                  title: "Guaranteed Virtual Internships",
                  color: "bg-indigo-100 text-indigo-600"
                },
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: "Unlimited AI Mock Interviews",
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "450+ Hiring Partners",
                  color: "bg-green-100 text-green-600"
                },
                {
                  icon: <Calendar className="h-6 w-6" />,
                  title: "Live Expert Mentorship",
                  color: "bg-amber-100 text-amber-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`px-6 py-3 rounded-full ${item.color} flex items-center gap-2`}
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-10">Four Pillars of AI-Powered Success</h3>
            
            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-900">Adaptive Daily Assessments</h3>
                <p className="text-lg text-indigo-800 mb-4">Smart Learning That Grows With You</p>
                <p className="text-gray-700 mb-6">
                  Every day, students get 20-25 personalized questions that adapt based on their progress. Think of it as a personal trainer for your brain - it knows exactly where you need to improve and adjusts the difficulty accordingly.
                </p>
                <div className="flex items-center gap-2 text-indigo-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>Quota-based learning with real-time doubt support</span>
                </div>
                <Button 
                  variant="outline" 
                  className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Schedule A Call With Us <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-900">AI Mock Interviews</h3>
                <p className="text-lg text-purple-800 mb-4">Practice Like It's The Real Thing</p>
                <p className="text-gray-700 mb-6">
                  Students can interview unlimited times with our AI that asks different questions based on their answers. It's like having access to thousands of HR managers who give detailed feedback on everything from technical skills to how fast you speak.
                </p>
                <div className="flex items-center gap-2 text-purple-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>Industry's first unlimited adaptive interview system</span>
                </div>
                <Button 
                  variant="outline" 
                  className="border-purple-200 text-purple-700 hover:bg-purple-50"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Schedule A Call With Us <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pink-900">Intelligent Resume Builder</h3>
                <p className="text-lg text-pink-800 mb-4">Your Resume, Optimized For Success</p>
                <p className="text-gray-700 mb-6">
                  Create 40+ different resume versions that actually get past those automated screening systems. Our AI scores each version and suggests improvements, so your resume doesn't just look good – it gets results.
                </p>
                <div className="flex items-center gap-2 text-pink-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>ATS-optimized with real-time AI scoring</span>
                </div>
                <Button 
                  variant="outline" 
                  className="border-pink-200 text-pink-700 hover:bg-pink-50"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Schedule A Call With Us <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-amber-900">Curated Job Portal</h3>
                <p className="text-lg text-amber-800 mb-4">Opportunities That Actually Matter</p>
                <p className="text-gray-700 mb-6">
                  Not just any job listings - these are opportunities our team personally sources from partner companies. Students see jobs that are actually hiring, not just posting for show.
                </p>
                <div className="flex items-center gap-2 text-amber-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>Direct corporate partnerships, not scraped listings</span>
                </div>
                <Button 
                  variant="outline" 
                  className="border-amber-200 text-amber-700 hover:bg-amber-50"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Schedule A Call With Us <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
            
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-10 text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Students' Career Success?</h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Join institutions already using ZSkillHub's AI-powered platform to guarantee internships and achieve higher placement rates for their graduates.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-indigo-700 hover:bg-indigo-50 rounded-full px-8"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Schedule a Partnership Discussion <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What's Inside This Program */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="What's Inside This Program" 
              subtitle="Comprehensive curriculum designed for versatile professionals"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 gap-10 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <Presentation className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Communication</h3>
                <p className="text-gray-600 mb-6">Master versatile communication for any industry</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Focus areas:</h4>
                <p className="text-gray-600 mb-4">Persuasion, storytelling, data presentation</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Key Skills Developed:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Storytelling", "Data Visualization", "Public Speaking", "Cross-functional Communication"].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Brain className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interdisciplinary Problem Solving</h3>
                <p className="text-gray-600 mb-6">Apply multiple perspectives to complex challenges</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Focus areas:</h4>
                <p className="text-gray-600 mb-4">Design thinking, systems approach, creative solutions</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Key Skills Developed:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Design Thinking", "Critical Analysis", "Lateral Thinking", "Innovation Frameworks"].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Versatile Collaboration</h3>
                <p className="text-gray-600 mb-6">Work effectively with specialists across disciplines</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Focus areas:</h4>
                <p className="text-gray-600 mb-4">Cross-functional teams, specialist translation, project coordination</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Key Skills Developed:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Team Coordination", "Knowledge Translation", "Project Management", "Stakeholder Management"].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-pink-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <LineChart className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Fundamentals</h3>
                <p className="text-gray-600 mb-6">Apply business principles in any context</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Focus areas:</h4>
                <p className="text-gray-600 mb-4">Value creation, resource optimization, customer understanding</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Key Skills Developed:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Market Analysis", "Business Models", "Value Proposition Design", "Customer Journey Mapping"].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Impact That Speaks for Itself</h2>
            <p className="text-lg text-center text-indigo-100 mb-12">Our numbers show the difference we make for institutions and students alike.</p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: "92%", label: "Placement Rate" },
                { value: "450+", label: "Hiring Partners" },
                { value: "₹12 LPA", label: "Average Package" },
                { value: "15,000+", label: "Students Trained" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                  <div className="text-indigo-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Program Flexibility */}
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
                    iconBg: "bg-purple-500",
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
                    iconBg: "bg-blue-500",
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
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                  >
                    <div className={`${option.iconBg} p-4 flex items-center gap-3`}>
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        {option.icon}
                      </div>
                      <div className="text-white">
                        <h4 className="font-bold">{option.title}</h4>
                        <p className="text-sm opacity-90">{option.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{option.description}</p>
                      <h5 className="font-semibold mb-3">Key Features:</h5>
                      <ul className="space-y-2 mb-6">
                        {option.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
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
      
      {/* Certificate Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-3">Because Skills Deserve Recognition!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Students earn a certificate of completion from ZSkillUp — a credential they can add to resumes and LinkedIn with pride.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Digitally verifiable certificates with unique IDs",
                    "Recognized by our network of 450+ corporate partners",
                    "Details versatile skills and interdisciplinary competencies",
                    "Showcases adaptability and broad application of knowledge",
                    "Differentiates students in competitive hiring processes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Partner With Us To Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/certificate-sample.svg" 
                  alt="ZSkillUp Certificate" 
                  className="max-w-full rounded-lg shadow-lg border border-gray-200" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose ZSkillUp */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Why Choose ZSkillUp?" 
              subtitle="Our comprehensive approach drives measurable outcomes for students and institutions"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <Sparkles className="h-8 w-8 text-indigo-500" />,
                  title: "AI-First Innovation",
                  description: "One of the most advanced employability platforms with adaptive learning algorithms"
                },
                {
                  icon: <Briefcase className="h-8 w-8 text-purple-500" />,
                  title: "Direct Corporate Access",
                  description: "Exclusive partnerships with 450+ hiring partners, including guaranteed virtual internships"
                },
                {
                  icon: <Award className="h-8 w-8 text-pink-500" />,
                  title: "Extended Support",
                  description: "Continued career assistance and mentorship for alumni success"
                },
                {
                  icon: <BarChart className="h-8 w-8 text-amber-500" />,
                  title: "Cutting-Edge Technology",
                  description: "Unlimited AI mock interviews, adaptive assessments, and intelligent resume optimization"
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-blue-500" />,
                  title: "Elite Training Standards",
                  description: "100+ hours of online sessions, industry expert masterclasses, and company-specific preparation"
                },
                {
                  icon: <Target className="h-8 w-8 text-green-500" />,
                  title: "Proven Results",
                  description: "92% placement rate with average packages significantly above industry standards"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader 
              title="Frequently Asked Questions" 
              subtitle="Get answers to common questions about the Smart Generalist Program"
              align="center"
            />
            
            <div className="mt-12 space-y-6">
              {[
                {
                  q: "How long is the Smart Generalist program?",
                  a: "5-6 months comprehensive training with flexibility for academic schedules and exploration phases."
                },
                {
                  q: "How do you help students choose their career direction?",
                  a: "AI-powered career mapping, industry exposure sessions, mentor consultations, and hands-on project experiences."
                },
                {
                  q: "What makes this different from general skill development courses?",
                  a: "Strategic skill combination, employer education about generalist value, and positioning for cross-functional roles."
                },
                {
                  q: "Are students from any academic background eligible?",
                  a: "Yes, we work with students from all disciplines and create personalized paths based on interests and aptitudes."
                },
                {
                  q: "How do you address employer concerns about hiring generalists?",
                  a: "We demonstrate versatility through project portfolios, provide employer education, and showcase successful case studies."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Academic & Corporate Partners"
            subtitle="Joining a network of prestigious institutions and companies that trust ZSkillup"
            align="center"
          />
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-700">Academic Partners</h3>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {['/assets/college_logos/AP-Shah.webp', 
                '/assets/college_logos/DY Patil University.jpg', 
                '/assets/college_logos/LNMIIT.jpg',
                '/assets/college_logos/KLE, Belgaum.jpeg',
                '/assets/college_logos/Ajeenkya dy patil.jpeg'
              ].map((logo, index) => (
                <div 
                  key={index} 
                  className="w-32 h-32 bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img src={logo} alt="Academic Partner" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </motion.div>
            
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-700">Corporate Partners</h3>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {['/assets/Companies_logos/Amazon.jpeg', 
                '/assets/Companies_logos/Flipkart-Logo.png', 
                '/assets/Companies_logos/razorpay9274.jpg',
                '/assets/Companies_logos/MEESHO.png',
                '/assets/Companies_logos/Grow logo.png'
              ].map((logo, index) => (
                <div 
                  key={index} 
                  className="w-32 h-32 bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img src={logo} alt="Corporate Partner" className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader 
              title="Ready to Elevate Your Institution's Graduate Placement?" 
              subtitle="Schedule a call with our team to discuss how we can tailor our program to your needs"
              align="center"
            />
            
            <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Contact Us" 
                  className="max-w-full rounded-lg" 
                />
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold">Connect With Us</h3>
                  <p className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                    <span>Schedule a demo at your convenience</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-indigo-600" />
                    <span>Bring your key stakeholders</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-indigo-600" />
                    <span>Get a customized program proposal</span>
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Institution Name</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your institution name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows={4} placeholder="Tell us about your requirements"></textarea>
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartGeneralistsProgram;
