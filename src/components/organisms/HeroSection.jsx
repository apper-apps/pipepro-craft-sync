import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const HeroSection = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+15075551234";
  };

  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8"
          >
            <ApperIcon name="MapPin" className="w-4 h-4 mr-2" />
            Serving Portland Township & Rochester Area
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Pipe Repair
            </span>{" "}
            & Repiping Services
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Fast, reliable pipe repair and repiping services in Dodge County, MN. 
            Licensed, insured, and available 24/7 for emergencies.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-10 text-white/80"
          >
            <div className="flex items-center">
              <ApperIcon name="Clock" className="w-5 h-5 mr-2 text-accent-400" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center">
              <ApperIcon name="Shield" className="w-5 h-5 mr-2 text-accent-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <ApperIcon name="Award" className="w-5 h-5 mr-2 text-accent-400" />
              <span>5-Star Rated</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="accent"
              size="xl"
              onClick={handleCallClick}
              className="flex items-center gap-3 min-w-[200px]"
            >
              <ApperIcon name="Phone" className="w-5 h-5" />
              Call (507) 555-1234
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleContactClick}
              className="border-white text-white hover:bg-white hover:text-primary min-w-[200px]"
            >
              Get Free Estimate
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-white/70 text-sm mb-4">Trusted by 500+ homeowners in the Rochester area</p>
            <div className="flex justify-center items-center space-x-8 opacity-70">
              <div className="flex items-center">
                <ApperIcon name="Users" className="w-5 h-5 mr-2" />
                <span className="text-white text-sm">500+ Customers</span>
              </div>
              <div className="flex items-center">
                <ApperIcon name="Calendar" className="w-5 h-5 mr-2" />
                <span className="text-white text-sm">15+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <ApperIcon name="ThumbsUp" className="w-5 h-5 mr-2" />
                <span className="text-white text-sm">100% Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60"
        >
          <span className="text-xs mb-2">Scroll to learn more</span>
          <ApperIcon name="ChevronDown" className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;