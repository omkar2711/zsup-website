import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall, ArrowRight, CalendarClock } from 'lucide-react';
import Navbar from '@/components/Navbar';

// Sample mentor data - can be expanded
const mentors = [
  {
    name: 'Dr. Amit Sharma',
    role: 'Technical Advisor',
    image: '/placeholder.svg',
    bio: 'Former CTO at a leading tech company with 20+ years of experience in scaling technology solutions.'
  },
  {
    name: 'Priya Mehta',
    role: 'Career Strategist',
    image: '/placeholder.svg',
    bio: 'Expert in HR and talent acquisition with experience at Fortune 500 companies and startups alike.'
  },
  {
    name: 'Rahul Kapoor',
    role: 'Industry Mentor',
    image: '/placeholder.svg',
    bio: 'Serial entrepreneur who has built and scaled multiple successful businesses in the education space.'
  },
  {
    name: 'Dr. Sunita Rao',
    role: 'Academic Advisor',
    image: '/placeholder.svg',
    bio: 'Former university dean with expertise in curriculum design and academic-industry partnerships.'
  }
];

const AboutUs = () => {
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
                Building Future-Ready Graduates, Together
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                At ZSkillUp, we believe every student has potential. But without the right skills, exposure, and guidance, that potential often goes untapped.
              </p>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
                <p className="text-2xl md:text-3xl font-semibold text-primary italic">
                  "Our mission is simple: to bridge the gap between education and employability by partnering with universities to prepare students for real-world careers."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Who are We? */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Who are We?"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  ZSkillUp Education Pvt. Ltd. is a new-age employability enablement partner working with leading universities and colleges across India. We provide an integrated ecosystem of training, technology, and placements, designed to make students not just job-ready, but future-ready.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our proprietary AI-powered platform, ZSkillHub, delivers daily practice, adaptive mock interviews, ATS-friendly resumes, and access to curated job opportunities — ensuring students are prepared from campus to corporate.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="/placeholder.svg" 
                  alt="ZSkillUp Platform" 
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Outcomes */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="The Outcomes Behind Our Promise"
              subtitle="Every claim we make is backed by outcomes students and institutions can see."
              align="center"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-gray-600 dark:text-gray-300">University Partners</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">450+</div>
                <div className="text-gray-600 dark:text-gray-300">Hiring Partners</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">250+</div>
                <div className="text-gray-600 dark:text-gray-300">Student Placements</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">₹19 LPA</div>
                <div className="text-gray-600 dark:text-gray-300">Highest CTC</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Meet Our Founder"
              align="center"
            />
            
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:w-1/3"
              >
                <img 
                  src="/placeholder.svg" 
                  alt="Lokesh - Founder" 
                  className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:w-2/3"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Founded by Lokesh, who brings 17+ years of experience across IT, education, and edtech, ZSkillUp combines deep industry understanding with a passion for student success.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Lokesh has led career services at scale, mentored thousands of students, and now drives ZSkillUp's vision of making employability solutions accessible, scalable, and outcome-driven.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mentors */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="The Great Minds Behind ZSkillUp"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary">
                          <img 
                            src={mentor.image} 
                            alt={mentor.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{mentor.name}</h3>
                        <div className="text-primary text-sm font-medium mb-3">{mentor.role}</div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{mentor.bio}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="The Future We're Building With You"
              align="center"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary/5 p-6 rounded-xl border border-primary/10"
              >
                <h3 className="text-xl font-bold text-primary mb-4">For Universities</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To empower universities to deliver not just degrees, but careers.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary/5 p-6 rounded-xl border border-primary/10"
              >
                <h3 className="text-xl font-bold text-primary mb-4">For Students</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To ensure every student, regardless of background, has access to the skills, tools, and opportunities needed to succeed in today's dynamic job market.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-primary/5 p-6 rounded-xl border border-primary/10"
              >
                <h3 className="text-xl font-bold text-primary mb-4">For India</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To build a future where India's graduates are known not just for their knowledge, but for their readiness to perform from day one.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to see the ZSkillHub platform in action?
              </h2>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-medium"
              >
                <CalendarClock className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
