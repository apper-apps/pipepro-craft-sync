import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import FormField from "@/components/molecules/FormField";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { value: "emergency", label: "Emergency Pipe Repair" },
    { value: "repiping", label: "Complete Repiping" },
    { value: "leak-detection", label: "Leak Detection" },
    { value: "water-line", label: "Water Line Repair" },
    { value: "sewer-line", label: "Sewer Line Services" },
    { value: "other", label: "Other Services" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Thank you! We'll contact you within 24 hours to schedule your service.", {
        position: "top-right",
        autoClose: 5000
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
      });
    } catch (error) {
      toast.error("There was a problem submitting your request. Please try again or call us directly.", {
        position: "top-right",
        autoClose: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallClick = () => {
    window.location.href = "tel:+15075551234";
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your <span className="bg-gradient-to-r from-primary to-primary-700 bg-clip-text text-transparent">Free Estimate</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Ready to solve your pipe problems? Contact us today for a free estimate 
            or emergency service. We're here to help 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Service</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                  <FormField
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(507) 555-0123"
                    required
                  />
                </div>

                <FormField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />

                <FormField
                  label="Service Needed"
                  type="select"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  options={serviceOptions}
                  required
                />

                <FormField
                  label="Message"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your pipe issue or service needs..."
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ApperIcon name="Send" className="w-5 h-5" />
                      Get Free Estimate
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-6 text-white text-center">
              <ApperIcon name="Phone" className="w-8 h-8 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Emergency Service</h4>
              <p className="text-accent-100 mb-4">Available 24/7</p>
              <Button
                onClick={handleCallClick}
                className="bg-white text-accent-600 hover:bg-accent-50 w-full font-bold"
              >
                (507) 555-1234
              </Button>
            </div>

            {/* Business Hours */}
            <div className="card p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <ApperIcon name="Clock" className="w-5 h-5 mr-2 text-primary" />
                Business Hours
              </h4>
              <div className="space-y-2 text-secondary-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="card p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <ApperIcon name="MapPin" className="w-5 h-5 mr-2 text-primary" />
                Service Area
              </h4>
              <div className="text-secondary-600">
                <p className="mb-2">Portland Township, MN</p>
                <p className="mb-2">Dodge County</p>
                <p>Rochester Metro Area</p>
              </div>
            </div>

            {/* Additional Contact */}
            <div className="card p-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <ApperIcon name="Mail" className="w-5 h-5 mr-2 text-primary" />
                Get In Touch
              </h4>
              <div className="space-y-3 text-secondary-600">
                <div className="flex items-center">
                  <ApperIcon name="Mail" className="w-4 h-4 mr-3 text-primary" />
                  <span>info@pipepro-mn.com</span>
                </div>
                <div className="flex items-center">
                  <ApperIcon name="MessageCircle" className="w-4 h-4 mr-3 text-primary" />
                  <span>Text: (507) 555-1234</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;