import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { toast } from 'react-toastify'

const SewerLineServicesPage = () => {
  const service = {
    name: "Sewer Line Services",
    description: "Comprehensive sewer line repair, replacement, and cleaning services.",
    detailedDescription: "Resolve sewer line problems with our comprehensive sewer services. From routine cleaning and video inspections to complete sewer line replacement, we handle all aspects of sewer system maintenance and repair. Using modern equipment and techniques including trenchless technology, we can solve sewer issues with minimal disruption to your property.",
heroImage: "/images/services/sewer-line-hero.jpg",
    images: [
      "/images/services/sewer-camera-inspection.jpg",
      "/images/services/sewer-cleaning.jpg",
      "/images/services/trenchless-sewer-repair.jpg",
      "/images/services/sewer-excavation.jpg",
      "/images/services/sewer-line-replacement.jpg"
    ],
    process: [
      {
        step: 1,
        title: "Video Inspection",
        description: "High-definition camera inspection to identify blockages, damage, and root intrusion.",
        icon: "Video"
      },
      {
        step: 2,
        title: "Problem Diagnosis",
        description: "Detailed analysis of sewer line condition and recommendation of best repair method.",
        icon: "FileSearch"
      },
      {
        step: 3,
        title: "Service Execution",
        description: "Professional cleaning, repair, or replacement using appropriate methods and equipment.",
        icon: "Tools"
      },
      {
        step: 4,
        title: "Final Verification",
        description: "Post-service inspection to ensure proper sewer flow and system functionality.",
        icon: "CheckCircle"
      }
    ],
    benefits: [
      "HD video sewer inspection",
      "Hydro-jetting cleaning",
      "Root removal services",
      "Trenchless repair options",
      "Traditional excavation when needed",
      "Preventive maintenance programs",
      "Emergency sewer services",
      "City sewer connection services"
    ],
    pricing: {
      startingPrice: "$150",
      description: "Sewer line services starting at $150 for basic cleaning, with repair and replacement pricing based on method and scope of work."
    }
  }

  const handleCallClick = () => {
    window.location.href = "tel:+15075551234"
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    toast.success("Sewer service request submitted! We'll contact you to schedule an inspection.")
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
              variant="primary"
              size="lg"
              onClick={handleCallClick}
              className="flex items-center gap-2"
            >
              <ApperIcon name="Phone" className="w-5 h-5" />
              Call (507) 555-1234
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Sewer Line Solutions</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.detailedDescription}
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Pricing</h3>
                <div className="bg-primary-50 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold text-primary-600">{service.pricing.startingPrice}</span>
                    <span className="text-gray-600 ml-2">starting price</span>
                  </div>
                  <p className="text-gray-600">{service.pricing.description}</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">Signs of Sewer Line Problems:</h4>
                <ul className="text-red-800 space-y-1">
                  <li>• Slow drains throughout the house</li>
                  <li>• Gurgling sounds from drains or toilets</li>
                  <li>• Sewage odors inside or outside home</li>
                  <li>• Wet spots or sewage in yard</li>
                  <li>• Multiple drain backups</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <ApperIcon name="ArrowDown" className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sewer Service Request</h3>
                <p className="text-gray-600">Professional sewer inspection and repair services</p>
              </div>
              
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sewer Issue Description</label>
                  <textarea 
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Describe your sewer problems..."
                  />
                </div>
                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Request Sewer Inspection
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sewer Services</h2>
            <p className="text-lg text-gray-600">Complete sewer line solutions for your property</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Video" className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Video Inspection</h3>
              <p className="text-gray-600">HD camera inspection to identify problems and plan repairs.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Zap" className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hydro Jetting</h3>
              <p className="text-gray-600">High-pressure water cleaning to remove blockages and buildup.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Shield" className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trenchless Repair</h3>
              <p className="text-gray-600">Modern repair methods that don't require excavation.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="RotateCcw" className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Line Replacement</h3>
              <p className="text-gray-600">Complete sewer line replacement when repair isn't viable.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-lg text-gray-600">Systematic approach to sewer line service</p>
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
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <div className="mb-4">
                  <ApperIcon name={step.icon} className="w-8 h-8 text-primary-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sewer Service Advantages</h2>
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

      {/* Service Gallery */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sewer Service Projects</h2>
            <p className="text-lg text-gray-600">Professional sewer inspection, cleaning, and repair work</p>
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
                  alt={`Sewer service project ${index + 1}`}
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

export default SewerLineServicesPage