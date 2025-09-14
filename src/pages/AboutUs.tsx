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

      {/* Leadership and Expert Trainers */}
      <TrainersSection />
      
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
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
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
