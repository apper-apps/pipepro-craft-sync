import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const MobileMenu = ({ isOpen, onClose, navigationItems }) => {
  const handleNavClick = (href) => {
    onClose();
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCallClick = () => {
    window.location.href = "tel:+15075551234";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Mobile Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-secondary-200">
                <h2 className="text-xl font-bold text-primary">PipePro MN</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-secondary-100 transition-colors duration-200"
                >
                  <ApperIcon name="X" className="w-6 h-6" />
                </button>
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 p-6">
                <ul className="space-y-4">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left py-3 px-4 text-lg font-medium text-secondary-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              {/* Emergency CTA */}
              <div className="p-6 border-t border-secondary-200">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={handleCallClick}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <ApperIcon name="Phone" className="w-5 h-5" />
                  Emergency Call Now
                </Button>
                <p className="text-center text-sm text-secondary-600 mt-2">
                  24/7 Emergency Service
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;