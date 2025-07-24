import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate()
  
  const handleServiceClick = () => {
    navigate(`/services/${service.slug}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
className="card p-6 h-full group cursor-pointer"
      onClick={handleServiceClick}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
          <ApperIcon 
            name={service.icon} 
            className="w-6 h-6 text-primary-600" 
          />
        </div>
        {service.featured && (
          <span className="ml-auto px-2 py-1 bg-accent text-white text-xs font-semibold rounded-full">
            Featured
          </span>
)}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-4">
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