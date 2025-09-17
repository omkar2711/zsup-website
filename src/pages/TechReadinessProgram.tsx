import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import VirtualInternshipSection from '@/components/sections/VirtualInternshipSection';
import { internshipConfigs } from '@/lib/internship-config';
import ManagementCertificate from '@/assets/ManagementCertificate.jpg';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Code,
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
  Laptop,
  BarChart,
  Server,
  Activity,
  Network,
  Zap,
  ArrowRight
} from 'lucide-react';
import FooterSection from '@/components/sections/Footer';
import HiringPartnersSection from '@/components/sections/HiringPartnersSection';
import TrustedSection from '@/components/sections/TrustedSection';
import PartnershipApproach from '@/components/sections/PartnershipApproach';

const TechnologyReadinessProgram = () => {
  const [selectedTrack, setSelectedTrack] = useState("fsd");

  const faqs = [
    {
      q: "What programming languages are covered in the Tech Track?",
      a: "Core focus on JavaScript, Python, and Java with exposure to Go, Rust, and emerging technologies based on market demand."
    },
    {
      q: "How do you ensure students stay current with rapidly changing technology?",
      a: "Quarterly curriculum updates, industry guest sessions, and access to the latest development tools and frameworks."
    },
    {
      q: "Are technical internships remote or on-site?",
      a: "Guaranteed Virtual Internships available that will be certified by leading global companies."
    },
    {
      q: "What level of coding experience is required to join?",
      a: "Basic programming knowledge required. We assess and create personalized learning paths based on current skill levels."
    },
    {
      q: "How do you prepare students for technical interviews?",
      a: "Daily coding challenges, mock interviews with engineers, system design practice, and whiteboarding sessions."
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-blue-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,70,252,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.2),transparent_70%)]" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl -mr-20 -mt-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-1 bg-white/20 text-white border-none text-sm font-medium">TECHNICAL EXCELLENCE</Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Corporate Readiness Program - Technology
              </h1>

              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Preparing developers for the future of technology
              </p>

              <p className="text-lg text-purple-100 mb-10 max-w-3xl mx-auto">
                Bridge the code-to-career gap with hands-on projects, industry mentorship, and guaranteed technical internships.
              </p>

              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 rounded-full px-8"
                onClick={() => window.location.href = '/contact-us'}
              >
                Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Right side: Tech image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:flex justify-center items-center"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl blur-sm opacity-70"></div>
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Software developers collaborating on code"
                  className="w-full max-w-xl rounded-xl shadow-lg relative z-10 object-cover h-[450px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is the program for */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Built For Your Students"
              subtitle="Designed for educational institutions committed to improving technical placement outcomes"
              align="center"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <Code className="h-8 w-8 text-purple-600" />,
                  title: "Computer Science & Engineering",
                  description: "Core programs focusing on software development fundamentals and advanced concepts"
                },
                {
                  icon: <Server className="h-8 w-8 text-blue-600" />,
                  title: "Information Technology",
                  description: "IT degrees with technical components requiring practical skill enhancement"
                },
                {
                  icon: <Network className="h-8 w-8 text-indigo-600" />,
                  title: "Electronics & Communication",
                  description: "ECE students looking to transition into software development roles"
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-violet-600" />,
                  title: "MCA & Technical Masters",
                  description: "Post-graduate students seeking advanced technical placement preparation"
                },
                {
                  icon: <Laptop className="h-8 w-8 text-fuchsia-600" />,
                  title: "Self-Taught Developers",
                  description: "Those with coding skills seeking structured career pathways and certification"
                },
                {
                  icon: <Zap className="h-8 w-8 text-purple-600" />,
                  title: "Coding Bootcamp Graduates",
                  description: "From coding bootcamp to corporate readiness with enhanced skill validation"
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
              title="What Holds Back Today's Tech Graduates"
              subtitle="Even with strong academic foundations, a majority of engineering graduates still struggle to secure quality placements. Why?"
              align="center"
            />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: <Target className="h-10 w-10 text-red-500" />,
                  title: "Skills–Industry Mismatch",
                  description: "Curriculums often lag behind industry needs. Students graduate learning outdated languages while companies hire for today's stacks — React, Node, Python, cloud, AI."
                },
                {
                  icon: <FileText className="h-10 w-10 text-orange-500" />,
                  title: "Weak Project Portfolios",
                  description: "Academic projects rarely impress recruiters. Without real-world case studies and applied problem-solving, students lack the evidence of being job-ready."
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-yellow-500" />,
                  title: "Interview Struggles",
                  description: "Coding tests, system design rounds, and technical interviews demand practice. Students often face anxiety and underperform despite knowing the concepts."
                },
                {
                  icon: <Users className="h-10 w-10 text-blue-500" />,
                  title: "Overwhelmed by Options",
                  description: "From full stack to data science, the sheer volume of career paths confuses students, leaving them unsure of which track to follow."
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

            <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100 text-center">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">ZSkillUp Approach</h3>
              <p className="text-lg text-gray-700">
                Industry-aligned curricula + hands-on projects + and AI-powered interview prep
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
                  color: "bg-purple-100 text-purple-600"
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
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-900">Adaptive Daily Assessments</h3>
                <p className="text-lg text-purple-800 mb-4">Smart Learning That Grows With You</p>
                <p className="text-gray-700 mb-6 text-justify">
                  Every day, students get 20-25 personalized questions that adapt based on their progress. Think of it as a personal trainer for your brain - it knows exactly where you need to improve and adjusts the difficulty accordingly.
                </p>
                <div className="flex items-center gap-2 text-purple-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>Quota-based learning with real-time doubt support</span>
                </div>
                <Button
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50"
                  onClick={() => window.location.href = '/contact-us'}
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
                <p className="text-gray-700 mb-6 text-justify">
                  Students can interview unlimited times with our AI that asks different questions based on their answers. It's like having access to thousands of HR managers who give detailed feedback on everything from technical skills to how fast you speak.
                </p>
                <div className="flex items-center gap-2 text-blue-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>Industry's first unlimited adaptive interview system</span>
                </div>
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50"
                  onClick={() => window.location.href = '/contact-us'}
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
                <p className="text-gray-700 mb-6 text-justify">
                  Create 40+ different resume versions that actually get past those automated screening systems. Our AI scores each version and suggests improvements, so your resume doesn't just look good – it gets results.
                </p>
                <div className="flex items-center gap-2 text-emerald-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>ATS-optimized with real-time AI scoring</span>
                </div>
                <Button
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  onClick={() => window.location.href = '/contact-us'}
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
                <p className="text-gray-700 mb-6 text-justify">
                  Not just any job listings - these are opportunities our team personally sources from partner companies. Students see jobs that are actually hiring, not just posting for show.
                </p>
                <div className="flex items-center gap-2 text-amber-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>Direct corporate partnerships, not scraped listings</span>
                </div>
                <Button
                  variant="outline"
                  className="border-amber-200 text-amber-700 hover:bg-amber-50"
                  onClick={() => window.location.href = '/contact-us'}
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
              className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl p-10 text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Students' Career Success?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Join institutions already using ZSkillHub's AI-powered platform to guarantee internships and achieve higher placement rates for their graduates.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8"
                onClick={() => window.location.href = '/contact-us'}
              >
                Schedule a Partnership Discussion <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside This Program */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-50 to-transparent opacity-70"></div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                title="What's Inside This Program"
                subtitle="Comprehensive curriculum designed for today's in-demand technical skills"
                align="center"
              />
            </motion.div>

            <Tabs defaultValue={selectedTrack} className="mt-14" onValueChange={setSelectedTrack}>
              <div className="flex justify-center mb-16 ">
                <TabsList className="grid grid-cols-3 w-fit bg-transparent p-1 rounded-full gap-4">
                  {[
                    { value: "fsd", label: "Full Stack Development", icon: <Code className="h-5 w-5 mr-3 text-purple-600" /> },
                    { value: "ds", label: "Data Science", icon: <BarChart className="h-5 w-5 mr-3 text-purple-600" /> },
                    { value: "java", label: "Java Full Stack", icon: <Server className="h-5 w-5 mr-3 text-purple-600" /> }
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className={`relative z-10 rounded-full px-8 py-3 flex items-center gap-2 text-lg font-semibold transition-all duration-200 
                        bg-white/70 hover:bg-white focus:outline-none focus:ring-0 
                        data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-xl 
                        data-[state=active]:ring-2 data-[state=active]:ring-purple-300`}
                    >
                      <span className="flex items-center justify-center">
                        {tab.icon}
                      </span>
                      <span className="leading-none">{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="fsd" className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 mb-10">
                    <h3 className="text-2xl font-bold mb-3 text-blue-900 flex items-center">
                      <Code className="h-6 w-6 mr-2 text-blue-700" />
                      Full Stack Development Track
                    </h3>
                    <p className="text-blue-800">Master both frontend and backend technologies to build complete web applications from scratch to deployment.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                      Core Modules
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        "JavaScript Fundamentals", "React.js", "Node.js & Express",
                        "MongoDB", "RESTful API Design", "Authentication & Security",
                        "Cloud Deployment", "Testing & CI/CD", "System Design"
                      ].map((module, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
                        >
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          </div>
                          <span className="font-medium">{module}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Laptop className="h-5 w-5 mr-2 text-purple-600" />
                      Tools & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Git", "VS Code", "MongoDB Atlas", "Postman", "AWS",
                        "Jest", "Docker", "GitHub Actions", "Redux", "TypeScript"
                      ].map((tool, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-1.5 text-sm font-medium rounded-full border border-blue-200">
                            {tool}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-purple-600" />
                      Featured Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "E-Commerce Platform",
                          description: "Build a complete online store with user authentication, product catalog, cart functionality, and payment processing",
                          icon: <Briefcase className="h-10 w-10 text-blue-500" />
                        },
                        {
                          title: "Social Media Dashboard",
                          description: "Create a responsive social media analytics dashboard with real-time data visualization and user management",
                          icon: <Activity className="h-10 w-10 text-blue-500" />
                        }
                      ].map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all overflow-hidden">
                            <CardContent className="p-6">
                              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                                {project.icon}
                              </div>
                              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                              <p className="text-gray-600">{project.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="ds" className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border border-green-100 mb-10">
                    <h3 className="text-2xl font-bold mb-3 text-green-900 flex items-center">
                      <BarChart className="h-6 w-6 mr-2 text-green-700" />
                      Data Science Track
                    </h3>
                    <p className="text-green-800">Transform raw data into insights with advanced analytics, machine learning, and visualization techniques.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Core Modules
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        "Python for Data Science", "Data Manipulation with Pandas", "Data Visualization",
                        "Statistical Analysis", "Machine Learning Fundamentals", "Deep Learning",
                        "Natural Language Processing", "Big Data Tools", "Model Deployment"
                      ].map((module, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group"
                        >
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          </div>
                          <span className="font-medium">{module}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Laptop className="h-5 w-5 mr-2 text-green-600" />
                      Tools & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Jupyter", "NumPy", "Pandas", "Scikit-learn", "TensorFlow",
                        "PyTorch", "Matplotlib", "Seaborn", "Tableau", "SQL"
                      ].map((tool, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 px-4 py-1.5 text-sm font-medium rounded-full border border-green-200">
                            {tool}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-green-600" />
                      Featured Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Predictive Analytics System",
                          description: "Develop a machine learning system that predicts customer behavior and provides actionable insights for business growth",
                          icon: <Brain className="h-10 w-10 text-green-500" />
                        },
                        {
                          title: "NLP-Powered Content Analyzer",
                          description: "Build an advanced text analysis tool that can categorize, summarize and extract insights from large volumes of textual data",
                          icon: <MessageSquare className="h-10 w-10 text-green-500" />
                        }
                      ].map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="border border-gray-200 hover:border-green-200 hover:shadow-md transition-all overflow-hidden">
                            <CardContent className="p-6">
                              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-4">
                                {project.icon}
                              </div>
                              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                              <p className="text-gray-600">{project.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="java" className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-100 mb-10">
                    <h3 className="text-2xl font-bold mb-3 text-purple-900 flex items-center">
                      <Server className="h-6 w-6 mr-2 text-purple-700" />
                      Java Full Stack Track
                    </h3>
                    <p className="text-purple-800">Build enterprise-grade applications with Java backend, modern frameworks, and robust architecture.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-purple-600" />
                      Core Modules
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        "Java Core & Advanced", "Spring Boot", "Hibernate ORM",
                        "RESTful Web Services", "Microservices Architecture", "Angular/React Frontend",
                        "Security & Authentication", "Testing with JUnit", "CI/CD Pipeline Setup"
                      ].map((module, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all group"
                        >
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                            <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                          </div>
                          <span className="font-medium">{module}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <Laptop className="h-5 w-5 mr-2 text-purple-600" />
                      Tools & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "IntelliJ IDEA", "Maven", "Gradle", "MySQL", "PostgreSQL",
                        "Docker", "Kubernetes", "Jenkins", "AWS", "Git"
                      ].map((tool, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-1.5 text-sm font-medium rounded-full border border-purple-200">
                            {tool}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-purple-600" />
                      Featured Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Enterprise Resource Planning System",
                          description: "Build a scalable ERP solution with modular architecture, robust security, and comprehensive business process workflows",
                          icon: <Network className="h-10 w-10 text-purple-500" />
                        },
                        {
                          title: "Microservices-Based Retail Platform",
                          description: "Develop a distributed retail management system with independent services for inventory, orders, customers, and analytics",
                          icon: <Zap className="h-10 w-10 text-purple-500" />
                        }
                      ].map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all overflow-hidden">
                            <CardContent className="p-6">
                              <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-4">
                                {project.icon}
                              </div>
                              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                              <p className="text-gray-600">{project.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

        <TrustedSection />

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Impact That Speaks for Itself</h2>
            <p className="text-lg text-center text-purple-100 mb-12">Our numbers show the difference we make for institutions and students alike.</p>

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
                  <div className="text-purple-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HiringPartnersSection />

      <PartnershipApproach />


  {/* Virtual Internships */}
      <VirtualInternshipSection config={internshipConfigs.tech} variant="tech" />

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
                    "Details specific technical competencies achieved",
                    "Showcases project work and practical application",
                    "Differentiates students in competitive hiring processes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Partner With Us To Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center">
                <img
                  src={ManagementCertificate}
                  alt="Management Readiness Program Certificate"
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
                  icon: <Sparkles className="h-8 w-8 text-purple-500" />,
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

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeader
            // eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about partnering with ZSkillup"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem value={`item-${i + 1}`} key={i}>
                  <AccordionTrigger className="text-left text-base md:text-lg">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <FooterSection />
    </div>
  );
};

export default TechnologyReadinessProgram;
