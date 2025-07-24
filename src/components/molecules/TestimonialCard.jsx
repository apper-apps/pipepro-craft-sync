import React from "react";
import ApperIcon from "@/components/ApperIcon";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial, index }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <ApperIcon
        key={i}
        name="Star"
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-8 h-full flex flex-col"
    >
      <div className="flex items-center mb-4">
        {renderStars(testimonial.rating)}
      </div>
      
      <blockquote className="text-secondary-700 mb-6 flex-grow leading-relaxed italic">
        "{testimonial.review}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mr-4">
          <ApperIcon name="User" className="w-6 h-6 text-primary-700" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.customerName}</p>
          <p className="text-sm text-secondary-500">Verified Customer</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;