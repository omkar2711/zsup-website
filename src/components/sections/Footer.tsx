import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { getLogoPath } from "../../lib/logo-utils";
import { useToast } from "../../hooks/use-toast";

const FooterSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields in the contact form.",
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
      // In a real application, you would send this data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="bg-[#722e63] text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-12 gap-12">
          {/* Company Info - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <img
              src={getLogoPath("/assets/Zskillup Black.png")}
              alt="ZSkillup Logo"
              className="h-10 w-auto"
              loading="eager"
              decoding="async"
            />
            <p className="text-gray-300 max-w-md">
              Empowering institutions to bridge the gap between education and employability through AI-driven training, technology, and placements.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/corporate-readiness-program" className="hover:text-white transition-colors">Management Readiness Program</a></li>
              <li><a href="/tech-readiness-program" className="hover:text-white transition-colors">Technology Readiness Program</a></li>
              <li><a href="/smart-generalists-program" className="hover:text-white transition-colors">Smart Generalists Program</a></li>
            </ul>
          </div>

          {/* Contact Form - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white"
              />
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white"
              />
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white resize-none h-24"
              />
              <div className="flex gap-4">
                <Button 
                  type="submit" 
                  className="flex-1 bg-white hover:bg-gray-100 text-[#722e63] font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <Button 
                  type="button"
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Full Contact Page
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-white/10 text-center text-gray-300">
          <p>© {new Date().getFullYear()} ZSkillup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;