import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { MapPin, Phone, Mail, Clock, Send, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';

const ContactUs = () => {

  const faqs = [
                {
                  q: "How can universities partner with ZSkillUp?",
                  a: "Universities can partner with us through our institutional collaboration program. We offer customized solutions for curriculum enhancement, faculty development, and placement support. Reach out to our partnerships team for a detailed discussion."
                },
                {
                  q: "Do you offer demo sessions for institutions?",
                  a: "Yes, we provide complimentary demo sessions and platform walkthroughs for educational institutions. This helps stakeholders understand our methodology and the technology that powers our employability solutions."
                },
                {
                  q: "What kind of support do students receive?",
                  a: "Students enrolled through our university partnerships receive comprehensive support including daily skill practice, mock interviews, resume building, placement assistance, and access to our extensive hiring network."
                },
                {
                  q: "How does ZSkillUp measure outcomes?",
                  a: "We track multiple metrics including skill development progress, interview success rates, placement percentages, and starting salary packages. Our partners receive regular analytics dashboards to monitor these outcomes."
                }
              ];
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation - check all fields
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields. All fields are mandatory.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real implementation, you would send this data to your backend API
      // For now, we'll use EmailJS, which allows direct client-side email sending
      
      // Using fetch to simulate sending to a serverless function
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e2715ecf-76fd-4dbe-8446-a31a5774ed2b', // Replace with your actual key
          subject: `ZSkillUp Website Contact: ${formData.subject || 'New Inquiry'}`,
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          // to_email: 'Lokesh@zskillup.com'
          to_email: 'omkar.tsx@gmail.com'
        })
      });

      if (response.status === 200) {
        setSubmitStatus('success');
        toast({
          title: "Message Sent!",
          description: "We've received your message and will respond shortly.",
          variant: "default"
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Something went wrong",
        description: "Unable to send your message. Please try again later.",
        variant: "destructive"
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      
      // Reset status after delay
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };
  
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
                        ZSkillup Education Private Limited<br />
                        WeWork PRINCEVILLE, M/S GOLF LINK SOFTWARE PARK LT NO,8/3,<br />
                        PRINCE VILLE, CHALLAGHATTA VILLAGE BANGALORE-71
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
                        +91 80500 70534<br />
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
                        Sneha.jadhav@zskillup.com<br />
                        Lokesh@zskillup.com
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Google Map embed */}
                <motion.div
                  className="mt-10 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="w-full h-64 relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.511853078606!2d77.60458541482186!3d12.941888819068075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d0a58a2e8d%3A0xa9567c70c9a8bfe0!2sWeWork%20Princeville%2C%20Embassy%20Golf%20Links!5e0!3m2!1sen!2sin!4v1632396081710!5m2!1sen!2sin"
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="WeWork PRINCEVILLE, GOLF LINK SOFTWARE PARK, CHALLAGHATTA VILLAGE BANGALORE"
                      aria-hidden="false"
                    ></iframe>
                  </div>
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
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                          <Input 
                            id="name" 
                            placeholder="Your name" 
                            value={formData.name} 
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="Your email" 
                            value={formData.email} 
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                        <Input 
                          id="phone" 
                          placeholder="Your phone number" 
                          value={formData.phone} 
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                        <Input 
                          id="subject" 
                          placeholder="How can we help you?" 
                          value={formData.subject} 
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                        <Textarea 
                          id="message" 
                          placeholder="Your message" 
                          rows={4} 
                          value={formData.message} 
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      {submitStatus === 'success' && (
                        <div className="p-3 rounded-md bg-green-50 border border-green-200 flex items-center gap-2 text-green-700">
                          <CheckCircle className="h-5 w-5" />
                          <span>Message sent successfully! We'll get back to you soon.</span>
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="p-3 rounded-md bg-red-50 border border-red-200 flex items-center gap-2 text-red-700">
                          <AlertCircle className="h-5 w-5" />
                          <span>Failed to send message. Please try again or contact us directly.</span>
                        </div>
                      )}
                      
                      <Button 
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">◌</span> Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </>
                        )}
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
      

      {/* Frequently Asked Questions */}
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
