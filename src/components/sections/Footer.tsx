import { Button } from "@/components/ui/button";
import React from "react";
import { Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { getLogoPath } from "../../lib/logo-utils";

const FooterSection = () => {
  return (
    <footer className="bg-[#722e63] text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-12 gap-12">
          {/* Company Info - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <img
              src={getLogoPath("/assets/Zskillup white.png")}
              alt="ZSkillup Logo"
              className="h-10 w-auto"
              loading="eager"
              decoding="async"
            />
            <p className="text-gray-300 max-w-md">
              Empowering institutions to bridge the gap between education and employability through AI-driven training, technology, and placements.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/mlokeshmathur?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/bylokeshmathur?igsh=azE5cjRsajc3YmZz" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@bylokeshmathur?feature=shared" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
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

          {/* Contact Information - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  WeWork PRINCEVILLE, M/S GOLF LINK SOFTWARE PARK LT NO,8/3, PRINCE VILLE, CHALLAGHATTA VILLAGE BANGALORE-71
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="text-gray-300">
                  +91 80500 70534 
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="text-gray-300">
                  Lokesh@zskillup.com
                </span>
              </li>
            </ul>
            <div className="pt-4">
              <Button 
                className="bg-white hover:bg-gray-100 text-[#722e63] font-semibold"
                onClick={() => window.location.href = '/contact-us'}
              >
                Contact Us
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

export default FooterSection;