import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+15075551234";
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                <ApperIcon name="Wrench" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PipePro MN</h3>
                <p className="text-primary-300 text-sm">Professional Pipe Services</p>
              </div>
            </div>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Licensed, insured, and trusted pipe repair specialists serving Portland Township 
              and the greater Rochester area since 2009.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center">
                <ApperIcon name="Award" className="w-4 h-4 text-accent-400" />
              </div>
              <span className="text-primary-200 text-sm">BBB A+ Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick("#services")}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#about")}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#testimonials")}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-200">
              <li>Emergency Pipe Repair</li>
              <li>Complete Repiping</li>
              <li>Leak Detection</li>
              <li>Water Line Repair</li>
              <li>Sewer Line Services</li>
              <li>Pipe Lining</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <ApperIcon name="Phone" className="w-5 h-5 mr-3 mt-0.5 text-accent-400" />
                <div>
                  <button
                    onClick={handleCallClick}
                    className="text-white hover:text-accent-400 transition-colors duration-200 font-semibold"
                  >
                    (507) 555-1234
                  </button>
                  <p className="text-primary-300 text-sm">24/7 Emergency Service</p>
                </div>
              </div>

              <div className="flex items-start">
                <ApperIcon name="Mail" className="w-5 h-5 mr-3 mt-0.5 text-accent-400" />
                <div>
                  <p className="text-primary-200">info@pipepro-mn.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <ApperIcon name="MapPin" className="w-5 h-5 mr-3 mt-0.5 text-accent-400" />
                <div>
                  <p className="text-primary-200">Portland Township, MN</p>
                  <p className="text-primary-300 text-sm">Serving Dodge County & Rochester Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-300 text-sm mb-4 md:mb-0">
              © 2024 PipePro MN. All rights reserved. Licensed & Insured.
            </div>
            <div className="flex items-center space-x-6 text-primary-300 text-sm">
              <span>MN License #12345</span>
              <span>Insured by State Farm</span>
              <div className="flex items-center">
                <ApperIcon name="Shield" className="w-4 h-4 mr-1" />
                <span>Bonded & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;