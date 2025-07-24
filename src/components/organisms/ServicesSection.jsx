import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/molecules/ServiceCard";
import { servicesService } from "@/services/api/servicesService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadServices = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await servicesService.getAll();
      setServices(data);
    } catch (err) {
      setError("Failed to load services. Please try again.");
      console.error("Error loading services:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadServices} />;
  if (services.length === 0) return <Empty message="No services available at this time." />;

  return (
    <section id="services" className="section-padding bg-secondary-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary to-primary-700 bg-clip-text text-transparent">Expert Services</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to complete home repiping, we provide comprehensive pipe services 
            with professional expertise and guaranteed satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.Id} service={service} index={index} />
          ))}
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Emergency Pipe Repair?</h3>
            <p className="text-accent-100 mb-6 text-lg">
              Don't wait for water damage! Our emergency team is standing by 24/7.
            </p>
            <button
              onClick={() => window.location.href = "tel:+15075551234"}
              className="bg-white text-accent-600 font-bold py-4 px-8 rounded-lg hover:bg-accent-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Call Emergency Line: (507) 555-1234
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;