import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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
  Network,
  TrendingUp,
  Presentation,
  Zap,
  ArrowRight,
  Building,
  GraduationCap,
  LineChart
} from 'lucide-react';

const ManagementReadinessProgram = () => {
  const [selectedTrack, setSelectedTrack] = useState("business");
  
  return (
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Banner */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.2),transparent_70%)]" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl -mr-20 -mt-20" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Text Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <Badge className="mb-6 px-4 py-1 bg-white/20 text-white border-none text-sm font-medium">BUSINESS EXCELLENCE</Badge>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                    Management Readiness Program
                </h1>

                <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-2xl">
                  Preparing business leaders of tomorrow
                </p>

                <p className="text-lg text-indigo-100 mb-10 max-w-2xl">
                    Our Management Readiness Program equips students with industry-relevant aptitude, communication, and soft skills, backed by guaranteed virtual internships and strong placement outcomes.
                </p>

                <Button 
                  size="lg" 
                  className="bg-white text-indigo-900 hover:bg-indigo-50 rounded-full px-8"
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

              {/* Right: Dummy Image */}
              <div className="flex justify-center items-center">
                <img
                  src="/placeholder.svg"
                    alt="Management Readiness Program"
                  className="w-full max-w-md rounded-xl shadow-lg border border-white/20"
                />
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
              subtitle="The bridge between academic theory and corporate readiness"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
                  title: "MBA/PGDM Programs",
                  description: "Advanced management students seeking practical skills to complement theoretical knowledge"
                },
                {
                  icon: <Building className="h-8 w-8 text-blue-600" />,
                  title: "BBA/BMS Degrees",
                  description: "Undergraduate business students preparing for entry-level management roles"
                },
                {
                  icon: <LineChart className="h-8 w-8 text-violet-600" />,
                  title: "Commerce & Economics",
                  description: "Students transitioning from quantitative backgrounds to business leadership positions"
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-purple-600" />,
                  title: "Liberal Arts Students",
                  description: "Humanities graduates seeking to build business acumen for corporate careers"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow border-none bg-gray-50">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
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
              title="The Hard Truth About Management Placements" 
              subtitle="Despite strong academic foundations, management graduates commonly struggle with:"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: <MessageSquare className="h-10 w-10 text-red-500" />,
                  title: "Interview Performance",
                  description: "Theoretical knowledge doesn't translate to confidence. Students struggle to articulate their ideas clearly under pressure."
                },
                {
                  icon: <Building className="h-10 w-10 text-orange-500" />,
                  title: "Industry Exposure",
                  description: "Limited understanding of real business scenarios and corporate expectations leaves graduates unprepared for workplace challenges."
                },
                {
                  icon: <Users className="h-10 w-10 text-yellow-500" />,
                  title: "Soft Skills Application",
                  description: "Struggling with verbal communication, team collaboration, and professional etiquette that's essential in management roles."
                },
                {
                  icon: <FileText className="h-10 w-10 text-blue-500" />,
                  title: "Resume Positioning",
                  description: "Academic achievements don't highlight employability. Students fail to showcase transferable skills that recruiters seek."
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
            
            <div className="mt-12 p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 text-center">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Our Solution?</h3>
              <p className="text-lg text-gray-700">
                Industry-aligned curriculum + AI-powered practice + guaranteed corporate exposure
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
                  icon: <Users className="h-6 w-6" />,
                  title: "450+ Hiring Partners",
                  color: "bg-green-100 text-green-600"
                },
                {
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: "Unlimited AI Mock Interviews",
                  color: "bg-blue-100 text-blue-600"
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
                className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100"
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
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">AI Mock Interviews</h3>
                <p className="text-lg text-blue-800 mb-4">Practice Like It's The Real Thing</p>
                <p className="text-gray-700 mb-6">
                  Students can interview unlimited times with our AI that asks different questions based on their answers. It's like having access to thousands of HR managers who give detailed feedback on everything from technical skills to how fast you speak.
                </p>
                <div className="flex items-center gap-2 text-blue-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>Industry's first unlimited adaptive interview system</span>
                </div>
                <Button 
                  variant="outline" 
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
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
                className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl border border-emerald-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-900">Intelligent Resume Builder</h3>
                <p className="text-lg text-emerald-800 mb-4">Your Resume, Optimized For Success</p>
                <p className="text-gray-700 mb-6">
                  Create 40+ different resume versions that actually get past those automated screening systems. Our AI scores each version and suggests improvements, so your resume doesn't just look good – it gets results.
                </p>
                <div className="flex items-center gap-2 text-emerald-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>ATS-optimized with real-time AI scoring</span>
                </div>
                <Button 
                  variant="outline" 
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
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
              className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl p-10 text-center"
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
              subtitle="Comprehensive curriculum designed for today's in-demand business skills"
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
                <h3 className="text-xl font-bold mb-2">Business Communication Excellence</h3>
                <p className="text-gray-600 mb-6">Master the art of professional communication</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Focus areas:</h4>
                <p className="text-gray-600 mb-4">Presentation skills, executive presence</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Key Skills Developed:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Executive Presentations", "Professional Writing", "Public Speaking", "Client Communication"].map((skill, idx) => (
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
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Brain className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic Thinking & Problem Solving</h3>
                <p className="text-gray-600 mb-6">Develop an analytical and strategic mindset</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Focus areas:</h4>
                <p className="text-gray-600 mb-4">Case study methodology, analytical frameworks</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Key Skills Developed:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Case Study Analysis", "Problem Frameworks", "Data-Driven Decisions", "Strategic Planning"].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
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
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Leadership & Team Management</h3>
                <p className="text-gray-600 mb-6">Build leadership capabilities for modern teams</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Focus areas:</h4>
                <p className="text-gray-600 mb-4">Conflict resolution, delegation, motivation</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Key Skills Developed:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Team Building", "Conflict Management", "Performance Management", "Change Leadership"].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
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
                <h3 className="text-xl font-bold mb-2">Financial Acumen</h3>
                <p className="text-gray-600 mb-6">Understand business financials and metrics</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Focus areas:</h4>
                <p className="text-gray-600 mb-4">Business metrics, P&L understanding, ROI analysis</p>
                
                <h4 className="font-semibold mb-2 text-gray-700">Key Skills Developed:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Financial Analysis", "Budget Management", "ROI Calculations", "Business Metrics"].map((skill, idx) => (
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
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-blue-800 text-white">
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
                    "Details specific business competencies achieved",
                    "Showcases leadership skills and practical application",
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
                  icon: <Briefcase className="h-8 w-8 text-blue-500" />,
                  title: "Direct Corporate Access",
                  description: "Exclusive partnerships with 450+ hiring partners, including guaranteed virtual internships"
                },
                {
                  icon: <Award className="h-8 w-8 text-emerald-500" />,
                  title: "Extended Support",
                  description: "Continued career assistance and mentorship for alumni success"
                },
                {
                  icon: <BarChart className="h-8 w-8 text-amber-500" />,
                  title: "Cutting-Edge Technology",
                  description: "Unlimited AI mock interviews, adaptive assessments, and intelligent resume optimization"
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-indigo-500" />,
                  title: "Elite Training Standards",
                  description: "100+ hours of online sessions, industry expert masterclasses, and company-specific preparation"
                },
                {
                  icon: <Target className="h-8 w-8 text-pink-500" />,
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
                subtitle="Get answers to common questions about the Management Readiness Program"
              align="center"
            />
            
            <div className="mt-12 space-y-6">
              {[
                {
                  q: "How long is the Management Track program?",
                  a: "4-6 months intensive training with flexible weekend and evening batches to accommodate academic schedules."
                },
                {
                  q: "Are internships guaranteed for all students?",
                  a: "Yes, every enrolled student receives a confirmed virtual internship placement with our partner companies."
                },
                {
                  q: "How does ZSkillHub adapt to different learning paces?",
                  a: "The AI engine personalizes content delivery, assessment frequency, and feedback based on individual performance metrics."
                },
                {
                  q: "What support do institutions receive during implementation?",
                  a: "Dedicated account management, monthly progress reports, faculty training sessions, and outcome tracking dashboards."
                },
                {
                  q: "How do you measure and report student outcomes?",
                  a: "Real-time analytics on skill development, placement tracking, salary benchmarking, and employer feedback collection."
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
      
      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader 
              title="Ready to Elevate Your Institution's Business Placements?" 
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

export default ManagementReadinessProgram;
