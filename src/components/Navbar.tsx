import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  ChevronDown 
} from "lucide-react";
import React, { useEffect, useState } from "react";
import logoUrl from "../assets/Zskillup Black.png";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle navigation for both regular links and hash links
  const handleNavigation = (to: string) => {
    if (to.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(to.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(to);
    }
    setIsMenuOpen(false);
  };

  type NavItem = {
    name: string;
    to?: string;
    hasDropdown?: boolean;
    dropdownItems?: { name: string; to: string }[];
  }

  const offeringsDropdownItems = [
  { name: "Management Readiness Program", to: "/corporate-readiness-program" },
  { name: "Technology Readiness Program", to: "/tech-readiness-program" },
    { name: "Smart Generalists Program", to: "/smart-generalists-program" }
  ];

  const navItems: NavItem[] = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about-us" },
    { name: "Programs", hasDropdown: true, dropdownItems: offeringsDropdownItems },
    { name: "Contact Us", to: "/contact-us" }
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <button onClick={() => handleNavigation("/")} className="flex items-center space-x-2">
            <img
              src={logoUrl}
              alt="ZSkillup Logo"
              className="h-10 w-auto"
              loading="eager"
              decoding="async"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="relative group flex items-center text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180 text-gray-500 group-hover:text-primary" />
                      {(location.pathname.includes("/corporate-readiness-program") || 
                        location.pathname.includes("/tech-readiness-program") || 
                        location.pathname.includes("/smart-generalists-program")) && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                        />
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="center" 
                    className="bg-white shadow-lg rounded-md p-3 min-w-[280px] border border-gray-100"
                  >
                    {item.dropdownItems?.map((subItem) => (
                      <DropdownMenuItem 
                        key={subItem.name} 
                        className="cursor-pointer py-2.5 px-3 text-gray-700 hover:text-primary hover:bg-secondary/50 rounded-md my-1 transition-colors duration-200 font-medium"
                        onClick={() => handleNavigation(subItem.to)}
                      >
                        {subItem.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.to)}
                  className="relative text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                  {(location.pathname === item.to || 
                    (location.pathname === '/' && item.to === '/') ||
                    (item.to.startsWith('/#') && location.pathname === '/')) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                    />
                  )}
                </button>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => handleNavigation("/contact-us")}
            >
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 sm:w-80">
                <div className="mt-8 space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div className="mb-2">
                          <p className="block text-gray-800 font-medium py-2 w-full text-left">
                            {item.name}
                          </p>
                          <div className="ml-4 mt-1 space-y-2 border-l-2 border-gray-200 pl-4">
                            {item.dropdownItems?.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={() => handleNavigation(subItem.to)}
                                className="block text-gray-700 hover:text-primary transition-colors duration-200 py-1 w-full text-left"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleNavigation(item.to)}
                          className="block text-gray-800 hover:text-primary transition-colors duration-200 font-medium py-2 w-full text-left"
                        >
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                    <button 
                      onClick={() => handleNavigation("/contact-us")}
                      className="text-gray-800 hover:text-primary transition-colors duration-200 font-medium text-center"
                    >
                      Book a Call
                    </button>
                    <Button 
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => handleNavigation("/contact-us")}
                    >
                      Partner With Us
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
