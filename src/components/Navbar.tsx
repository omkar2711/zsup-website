import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import logoUrl from "../assets/Zskillup Black.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>(typeof window !== "undefined" ? window.location.hash || "#home" : "#home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Contact", href: "#contact" }
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
          <a href="#home" className="flex items-center space-x-2">
            <img
              src={logoUrl}
              alt="ZSkillup Logo"
              className="h-10 w-auto"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActive(item.href)}
                className="relative text-gray-700 hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
                {active === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-highlight"
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <a href="#contact" className="text-gray-700 hover:text-accent transition-colors duration-300 font-medium">
              Book a Call
            </a> */}
            <Button className="bg-highlight text-highlight-foreground hover:bg-highlight/90">
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-800 hover:text-accent transition-colors duration-200 font-medium py-2"
                      onClick={() => {
                        setActive(item.href);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                    <a 
                      href="#contact"
                      className="text-gray-800 hover:text-accent transition-colors duration-200 font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Book a Call
                    </a>
                    <Button className="bg-highlight text-highlight-foreground hover:bg-highlight/90">
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
