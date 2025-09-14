import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const ContactUs = () => {
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
                Get In Touch With Us
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Have questions about our programs? Want to partner with us? We're here to help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Information */}
              <div>
                <SectionHeader
                  title="Contact Information"
                  subtitle="Reach out to us through any of these channels"
                  align="left"
                />
                
                <div className="space-y-8 mt-8">
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        1234 Tech Park, Innovation Valley<br />
                        Bengaluru, Karnataka 560001
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        +91 98765 43210<br />
                        +91 87654 32109
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        info@zskillup.com<br />
                        partnerships@zskillup.com
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Map or image placeholder */}
                <motion.div
                  className="mt-10 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <img 
                    src="/placeholder.svg" 
                    alt="Office Location Map" 
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Your name" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Your email" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Your phone number" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help you?" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message" rows={4} />
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* Quick contact cards */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="bg-secondary/10 border-0 hover:shadow-md transition-shadow">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Phone className="h-10 w-10 text-secondary mb-3" />
                        <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">For immediate assistance</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="bg-primary/10 border-0 hover:shadow-md transition-shadow">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Mail className="h-10 w-10 text-primary mb-3" />
                        <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">For detailed inquiries</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Frequently Asked Questions"
              subtitle="Find quick answers to common questions"
              align="center"
            />
            
            <div className="mt-12 space-y-6">
              {[
                {
                  question: "How can universities partner with ZSkillUp?",
                  answer: "Universities can partner with us through our institutional collaboration program. We offer customized solutions for curriculum enhancement, faculty development, and placement support. Reach out to our partnerships team for a detailed discussion."
                },
                {
                  question: "Do you offer demo sessions for institutions?",
                  answer: "Yes, we provide complimentary demo sessions and platform walkthroughs for educational institutions. This helps stakeholders understand our methodology and the technology that powers our employability solutions."
                },
                {
                  question: "What kind of support do students receive?",
                  answer: "Students enrolled through our university partnerships receive comprehensive support including daily skill practice, mock interviews, resume building, placement assistance, and access to our extensive hiring network."
                },
                {
                  question: "How does ZSkillUp measure outcomes?",
                  answer: "We track multiple metrics including skill development progress, interview success rates, placement percentages, and starting salary packages. Our partners receive regular analytics dashboards to monitor these outcomes."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
                Ready to transform your institution's placement outcomes?
              </h2>
              <p className="text-xl mb-8 text-white/80">
                Join the growing network of forward-thinking universities partnering with ZSkillUp
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-medium group"
              >
                Schedule a Consultation!
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
