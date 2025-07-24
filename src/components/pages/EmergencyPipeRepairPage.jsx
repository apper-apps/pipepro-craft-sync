import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { toast } from 'react-toastify'

const EmergencyPipeRepairPage = () => {
  const service = {
    name: "Emergency Pipe Repair",
    description: "24/7 emergency pipe repair services for burst pipes, leaks, and water damage prevention.",
    detailedDescription: "When pipe emergencies strike, you need immediate professional help. Our emergency pipe repair service provides rapid response to burst pipes, major leaks, and water damage situations. Available 24/7, our licensed technicians arrive equipped with modern tools and materials to stop leaks fast and prevent costly water damage to your property.",
    heroImage: "/images/services/emergency-repair-hero.jpg",
    images: [
      "/images/services/emergency-tools.jpg",
      "/images/services/burst-pipe-before.jpg", 
      "/images/services/burst-pipe-after.jpg",
      "/images/services/emergency-truck.jpg",
      "/images/services/water-damage-prevention.jpg"
    ],
    process: [
      {
        step: 1,
        title: "Emergency Call Response",
        description: "Call us 24/7 and we'll dispatch a technician to your location within 1 hour.",
        icon: "Phone"
      },
      {
        step: 2,
        title: "Damage Assessment", 
        description: "Our technician will assess the damage and shut off water to prevent further issues.",
        icon: "Search"
      },
      {
        step: 3,
        title: "Immediate Repair",
        description: "We perform emergency repairs using professional-grade materials and techniques.",
        icon: "Wrench"
      },
      {
        step: 4,
        title: "System Testing",
        description: "We test the repair and ensure your plumbing system is functioning properly.",
        icon: "CheckCircle"
      }
    ],
    benefits: [
      "24/7 emergency availability",
      "1-hour response time guarantee", 
      "Licensed and insured technicians",
      "Modern repair techniques and materials",
      "Water damage prevention",
      "Upfront pricing with no hidden fees",
      "Warranty on all emergency repairs",
      "Advanced leak detection equipment"
    ],
    pricing: {
      startingPrice: "$150",
      description: "Emergency service call starting at $150, with repair costs based on materials and labor needed."
    }
  }

  const handleCallClick = () => {
    window.location.href = "tel:+15075551234"
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    toast.success("Emergency request submitted! We'll call you within 5 minutes.")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {service.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            {service.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="accent"
              size="lg"
              onClick={handleCallClick}
              className="flex items-center gap-2"
            >
              <ApperIcon name="Phone" className="w-5 h-5" />
              Call Now: (507) 555-1234
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.detailedDescription}
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pricing</h3>
                <div className="bg-primary-50 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold text-primary-600">{service.pricing.startingPrice}</span>
                    <span className="text-gray-600 ml-2">starting price</span>
                  </div>
                  <p className="text-gray-600">{service.pricing.description}</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact Form */}
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="text-center mb-6">
                <ApperIcon name="AlertTriangle" className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-900 mb-2">Emergency Service Request</h3>
                <p className="text-red-700">Need immediate help? Submit this form and we'll call you within 5 minutes!</p>
              </div>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Description *</label>
                  <textarea 
                    required
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Briefly describe your emergency..."
                  />
                </div>
                <Button 
                  type="submit"
                  variant="accent"
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Submit Emergency Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Emergency Response Process</h2>
            <p className="text-lg text-gray-600">Here's how we handle your emergency pipe repair</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <div className="mb-4">
                  <ApperIcon name={step.icon} className="w-8 h-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Emergency Service</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-4 bg-white rounded-lg shadow-md"
              >
                <ApperIcon name="CheckCircle" className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-lg text-gray-600">See examples of our emergency pipe repair services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={image}
                  alt={`Emergency pipe repair ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EmergencyPipeRepairPage