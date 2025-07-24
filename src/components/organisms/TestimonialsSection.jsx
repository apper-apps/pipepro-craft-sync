import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/molecules/TestimonialCard";
import { testimonialsService } from "@/services/api/testimonialsService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await testimonialsService.getAll();
      setTestimonials(data);
    } catch (err) {
      setError("Failed to load testimonials. Please try again.");
      console.error("Error loading testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadTestimonials} />;
  if (testimonials.length === 0) return <Empty message="No testimonials available at this time." />;

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-primary to-primary-700 bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what homeowners in the Rochester area 
            have to say about our pipe repair and repiping services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.Id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-secondary-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                <div className="text-secondary-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-secondary-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;