import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import MobileMenu from "@/components/molecules/MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Check if we're on the home page
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';

  const navigationItems = [
    { label: "Home", href: "/", type: "link" },
    { label: "Services", href: "#services", type: "dropdown" },
    { label: "About", href: "#about", type: "anchor" },
    { label: "Testimonials", href: "#testimonials", type: "anchor" },
    { label: "Contact", href: "#contact", type: "anchor" }
  ];

  const serviceItems = [
    { label: "Emergency Pipe Repair", href: "/emergency-pipe-repair", icon: "AlertTriangle" },
    { label: "Complete Repiping", href: "/complete-repiping", icon: "Home" },
    { label: "Leak Detection", href: "/leak-detection", icon: "Search" },
    { label: "Water Line Repair", href: "/water-line-repair", icon: "Droplets" },
    { label: "Sewer Line Services", href: "/sewer-line-services", icon: "ArrowDown" },
    { label: "Pipe Lining", href: "/pipe-lining", icon: "Shield" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item.type === "link") {
      window.location.href = item.href;
    } else if (item.type === "anchor") {
      if (isHomePage) {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page with anchor
        window.location.href = `/${item.href}`;
      }
    } else if (item.type === "dropdown") {
      if (isHomePage) {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = `/${item.href}`;
      }
    }
  };

  const handleServiceClick = (serviceHref) => {
    window.location.href = serviceHref;
    setIsServicesOpen(false);
  };

  const handleCallClick = () => {
    window.location.href = "tel:+15075551234";
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.href = '/'}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center">
                <ApperIcon name="Wrench" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">PipePro MN</h1>
                <p className="text-xs text-secondary-600 hidden sm:block">
                  Portland Township, MN
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.href} className="relative">
                  {item.type === "dropdown" ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        onClick={() => handleNavClick(item)}
                        className="text-secondary-700 hover:text-primary font-medium transition-colors duration-200 relative group flex items-center"
                      >
                        {item.label}
                        <ApperIcon name="ChevronDown" className="w-4 h-4 ml-1" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                      </button>
                      
                      {/* Services Dropdown */}
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        >
                          {serviceItems.map((service) => (
                            <button
                              key={service.href}
                              onClick={() => handleServiceClick(service.href)}
                              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center"
                            >
                              <ApperIcon name={service.icon} className="w-4 h-4 mr-3 text-primary" />
                              <span className="text-gray-700 hover:text-primary">{service.label}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="text-secondary-700 hover:text-primary font-medium transition-colors duration-200 relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-primary">24/7 Emergency</p>
                <p className="text-xs text-secondary-600">(507) 555-1234</p>
              </div>
              <Button
                variant="accent"
                onClick={handleCallClick}
                className="flex items-center gap-2"
              >
                <ApperIcon name="Phone" className="w-4 h-4" />
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            >
              <ApperIcon name="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        serviceItems={serviceItems}
        isHomePage={isHomePage}
      />
    </>
  );
};

export default Header;