import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <footer className="bg-[#722e63] text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-12 gap-12">
          {/* Company Info - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <img 
              src="/src/assets/Zskillup Black.png" 
              alt="ZSkillup Logo" 
              className="h-12 w-auto brightness-0 invert"
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
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#success" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Contact Form - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-4">
              <Input 
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white"
              />
              <Input 
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white"
              />
              <Textarea 
                placeholder="Your Message"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white resize-none h-24"
              />
              <Button className="w-full bg-white hover:bg-gray-100 text-[#722e63] font-semibold">
                Send Message
              </Button>
            </div>
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

export default ContactSection;