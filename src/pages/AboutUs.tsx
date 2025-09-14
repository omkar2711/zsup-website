import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { TrainersSection } from '@/components/sections/TrainersSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/20 z-0" />
        <div className="absolute inset-0 opacity-[0.03] z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                Building Future-Ready Graduates, Together
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                At ZSkillUp, we believe every student has potential. But without the right skills, exposure, and guidance, that potential often goes untapped.
              </p>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-8">
                <p className="text-xl md:text-2xl font-semibold text-primary italic">
                  "Our mission is simple: to bridge the gap between education and employability by partnering with universities to prepare students for real-world careers."
                </p>
              </div>
              <Button 
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
              >
                Learn About Our Approach <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 hidden md:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Students in a collaborative learning environment" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership and Expert Trainers */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0" />
        
        <TrainersSection />
      </motion.div>
      
      {/* Our Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Our Story"
              subtitle="How we're transforming education across India"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
              {/* Left side - Text content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">From Classroom to Career</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Founded in 2019, ZSkillUp was born from a simple observation: traditional education alone isn't enough to prepare students for today's job market.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Our founders, experienced educators and industry professionals, witnessed firsthand the gap between what universities teach and what employers need. Students were graduating with degrees but lacking the practical skills, confidence, and network to launch successful careers.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Starting with just 3 partner institutions and 200 students, we've grown to serve over 15,000 students across 30+ universities nationwide. Our AI-powered platform, industry partnerships, and hands-on approach have helped thousands of graduates not just find jobs, but build meaningful careers.
                </p>
                <div className="pt-4">
                  <Button 
                    className="bg-primary text-white hover:bg-primary/90"
                  >
                    Our Success Stories <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
              
              {/* Right side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="Students collaborating in a modern learning environment" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
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
                  To unlock every student's potential through industry-aligned skills and real-world exposure.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-primary/5 p-6 rounded-xl border border-primary/10"
              >
                <h3 className="text-xl font-bold text-primary mb-4">For Industry</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To build a pipeline of job-ready talent that can hit the ground running.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Join us in building the future of education. Let's discuss how we can help your students succeed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Schedule a Call <PhoneCall className="ml-2 h-5 w-5" />
                </Button>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
