import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

const TechReadinessProgram = () => {
  const [selectedTrack, setSelectedTrack] = useState("fsd");
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-blue-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,70,252,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.2),transparent_70%)]" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl -mr-20 -mt-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-1 bg-white/20 text-white border-none text-sm font-medium">TECHNICAL EXCELLENCE</Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Tech Readiness Program
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
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Solution?</h3>
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
                  icon: <MessageSquare className="h-6 w-6" />,
                  title: "Unlimited AI Mock Interviews",
                  color: "bg-blue-100 text-blue-600"
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
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl border border-purple-100"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-900">Adaptive Daily Assessments</h3>
                <p className="text-lg text-purple-800 mb-4">Smart Learning That Grows With You</p>
                <p className="text-gray-700 mb-6">
                  Every day, students get 20-25 personalized questions that adapt based on their progress. Think of it as a personal trainer for your brain - it knows exactly where you need to improve and adjusts the difficulty accordingly.
                </p>
                <div className="flex items-center gap-2 text-purple-700 font-medium mb-6">
                  <CheckCircle className="h-5 w-5" />
                  <span>Quota-based learning with real-time doubt support</span>
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
              className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl p-10 text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Students' Career Success?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Join institutions already using ZSkillHub's AI-powered platform to guarantee internships and achieve higher placement rates for their graduates.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8"
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
              subtitle="Comprehensive curriculum designed for today's in-demand technical skills"
              align="center"
            />
            
            <Tabs defaultValue={selectedTrack} className="mt-12" onValueChange={setSelectedTrack}>
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-fit">
                  <TabsTrigger value="fsd">Full Stack Development</TabsTrigger>
                  <TabsTrigger value="ds">Data Science</TabsTrigger>
                  <TabsTrigger value="java">Java Full Stack</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="fsd" className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Core Modules</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "JavaScript Fundamentals", "React.js", "Node.js & Express", 
                      "MongoDB", "RESTful API Design", "Authentication & Security", 
                      "Cloud Deployment", "Testing & CI/CD", "System Design"
                    ].map((module, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Git", "VS Code", "MongoDB Atlas", "Postman", "AWS", 
                      "Jest", "Docker", "GitHub Actions", "Redux", "TypeScript"
                    ].map((tool, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "E-Commerce Platform",
                        description: "Build a complete online store with user authentication, product catalog, cart functionality, and payment processing"
                      },
                      {
                        title: "Social Media Dashboard",
                        description: "Create a responsive social media analytics dashboard with real-time data visualization and user management"
                      }
                    ].map((project, index) => (
                      <Card key={index} className="border-none shadow-sm">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                          <p className="text-gray-600">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ds" className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Core Modules</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Python for Data Science", "Data Manipulation with Pandas", "Data Visualization", 
                      "Statistical Analysis", "Machine Learning Fundamentals", "Deep Learning", 
                      "Natural Language Processing", "Big Data Tools", "Model Deployment"
                    ].map((module, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Jupyter", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", 
                      "PyTorch", "Matplotlib", "Seaborn", "Tableau", "SQL"
                    ].map((tool, index) => (
                      <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Predictive Analytics System",
                        description: "Develop a machine learning system that predicts customer behavior and provides actionable insights for business growth"
                      },
                      {
                        title: "NLP-Powered Content Analyzer",
                        description: "Build an advanced text analysis tool that can categorize, summarize and extract insights from large volumes of textual data"
                      }
                    ].map((project, index) => (
                      <Card key={index} className="border-none shadow-sm">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                          <p className="text-gray-600">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="java" className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Core Modules</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Java Core & Advanced", "Spring Boot", "Hibernate ORM", 
                      "RESTful Web Services", "Microservices Architecture", "Angular/React Frontend", 
                      "Security & Authentication", "Testing with JUnit", "CI/CD Pipeline Setup"
                    ].map((module, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "IntelliJ IDEA", "Maven", "Gradle", "MySQL", "PostgreSQL", 
                      "Docker", "Kubernetes", "Jenkins", "AWS", "Git"
                    ].map((tool, index) => (
                      <Badge key={index} className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-3 py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Enterprise Resource Planning System",
                        description: "Build a scalable ERP solution with modular architecture, robust security, and comprehensive business process workflows"
                      },
                      {
                        title: "Microservices-Based Retail Platform",
                        description: "Develop a distributed retail management system with independent services for inventory, orders, customers, and analytics"
                      }
                    ].map((project, index) => (
                      <Card key={index} className="border-none shadow-sm">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                          <p className="text-gray-600">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
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
                    icon: <Laptop className="h-7 w-7 text-white" />,
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
                    iconBg: "bg-purple-500",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Frequently Asked Questions" 
          subtitle="Get answers to common questions about the Tech Readiness Program"
          align="center"
        />
        
        <div className="mt-12 space-y-4">
          {[
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
          ].map((faq, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                <div className="text-left font-medium">{faq.q}</div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                {faq.a}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
              title="Ready to Elevate Your Institution's Tech Placements?" 
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
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <span>Schedule a demo at your convenience</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>Bring your key stakeholders</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-purple-600" />
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
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
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

export default TechReadinessProgram;
