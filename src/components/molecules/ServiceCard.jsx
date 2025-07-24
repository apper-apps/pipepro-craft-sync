import React from "react";
import ApperIcon from "@/components/ApperIcon";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-8 text-center group"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-full mb-6 group-hover:from-primary-100 group-hover:to-primary-200 transition-all duration-300">
        <ApperIcon 
          name={service.icon} 
          className="w-8 h-8 text-primary group-hover:text-primary-700 transition-colors duration-300" 
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {service.name}
      </h3>
      
      <p className="text-secondary-600 leading-relaxed">
        {service.description}
      </p>
      
      {service.featured && (
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-accent-100 to-accent-200 text-accent-800">
            <ApperIcon name="Star" className="w-3 h-3 mr-1" />
            Featured Service
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default ServiceCard;