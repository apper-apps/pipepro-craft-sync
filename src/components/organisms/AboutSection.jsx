import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const AboutSection = () => {
  const certifications = [
    { icon: "Award", title: "Licensed Master Plumber", description: "State of Minnesota Licensed" },
    { icon: "Shield", title: "Fully Insured", description: "$2M Liability Coverage" },
    { icon: "Users", title: "BBB A+ Rating", description: "Better Business Bureau" },
    { icon: "Clock", title: "15+ Years Experience", description: "Serving Rochester Area" }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary to-primary-700 bg-clip-text text-transparent">PipePro MN</span>?
            </h2>
            
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Since 2009, PipePro MN has been the trusted choice for pipe repair and repiping services 
              in Portland Township and the greater Rochester area. Our commitment to quality workmanship, 
              honest pricing, and customer satisfaction has earned us a reputation as the region's 
              premier pipe specialists.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ApperIcon name="Check" className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Advanced Technology</h4>
                  <p className="text-secondary-600">Latest pipe inspection and repair technology for accurate diagnosis and lasting solutions.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ApperIcon name="Check" className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Upfront Pricing</h4>
                  <p className="text-secondary-600">No hidden fees or surprise charges. You'll know the cost before we start any work.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mr-4 mt-1">
                  <ApperIcon name="Check" className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Warranty Protection</h4>
                  <p className="text-secondary-600">All our work comes with comprehensive warranties for your peace of mind.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl p-6">
              <h4 className="font-bold text-primary mb-2">Local Family Business</h4>
              <p className="text-secondary-700">
                As a local family-owned business, we understand the unique plumbing challenges faced by 
                homes in Minnesota's climate. We're your neighbors, and we're here to help.
              </p>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={cert.icon} className="w-8 h-8 text-primary-700" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-sm text-secondary-600">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Service Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Service Area</h3>
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-secondary-700 mb-6">
                Proudly serving Portland Township, Dodge County, and the greater Rochester metropolitan area including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-secondary-600">
                <div className="flex items-center justify-center">
                  <ApperIcon name="MapPin" className="w-4 h-4 mr-2 text-primary" />
                  Rochester
                </div>
                <div className="flex items-center justify-center">
                  <ApperIcon name="MapPin" className="w-4 h-4 mr-2 text-primary" />
                  Byron
                </div>
                <div className="flex items-center justify-center">
                  <ApperIcon name="MapPin" className="w-4 h-4 mr-2 text-primary" />
                  Kasson
                </div>
                <div className="flex items-center justify-center">
                  <ApperIcon name="MapPin" className="w-4 h-4 mr-2 text-primary" />
                  Dodge Center
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;