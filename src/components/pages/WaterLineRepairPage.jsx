import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { toast } from 'react-toastify'

const WaterLineRepairPage = () => {
  const service = {
    name: "Water Line Repair",
    description: "Main water line repair and replacement services from street to home.",
    detailedDescription: "Keep your water flowing with professional water line repair and replacement services. We handle everything from the street connection to your home's main shutoff, including water meter issues, service line breaks, and pressure problems. Our experienced team works with city utilities and uses proper materials to ensure your water service meets all code requirements.",
heroImage: "/images/services/water-line-hero.jpg",
    images: [
      "/images/services/water-line-excavation.jpg",
      "/images/services/new-water-line.jpg",
      "/images/services/water-meter-connection.jpg",
      "/images/services/trenchless-water-line.jpg",
      "/images/services/water-line-testing.jpg"
    ],
    process: [
      {
        step: 1,
        title: "Service Line Inspection",
        description: "We locate and assess your water service line from street to home.",
        icon: "Search"
      },
      {
        step: 2,
        title: "Permit & Coordination",
        description: "We handle all permits and coordinate with local utilities as needed.",
        icon: "FileCheck"
      },
      {
        step: 3,
        title: "Professional Installation",
        description: "Expert installation of new water lines using approved materials and methods.",
        icon: "Settings"
      },
      {
        step: 4,
        title: "Pressure Testing",
        description: "Thorough testing and inspection to ensure proper water pressure and flow.",
        icon: "Gauge"
      }
    ],
    benefits: [
      "Full water service restoration",
      "City utility coordination",
      "Proper permit handling",
      "Code-compliant installation",
      "Improved water pressure",
      "Modern pipe materials",
      "Trenchless options available",
      "Warranty on all work"
    ],
    pricing: {
      startingPrice: "$1,200",
      description: "Water line repair starting at $1,200, with full replacement pricing based on distance from street and excavation requirements."
    }
  }

  const handleCallClick = () => {
    window.location.href = "tel:+15075551234"
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    toast.success("Water line service request submitted! We'll contact you to schedule an assessment.")
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Water Line Services</h2>
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

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Signs You Need Water Line Service:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Low water pressure throughout house</li>
                  <li>• Discolored or rusty water</li>
                  <li>• Wet spots in yard near water meter</li>
                  <li>• Unusually high water bills</li>
                  <li>• No water or intermittent water flow</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <ApperIcon name="Droplets" className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Water Line Service Request</h3>
                <p className="text-gray-600">Professional assessment and repair of your water service line</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Water Line Issue</label>
                  <textarea 
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Describe your water pressure or service issues..."
                  />
                </div>
                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Request Service Assessment
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Water Line Services</h2>
            <p className="text-lg text-gray-600">Complete water service line solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Wrench" className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Water Line Repair</h3>
              <p className="text-gray-600">Fix breaks, leaks, and damage to existing water service lines with minimal excavation.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="RotateCcw" className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Complete Replacement</h3>
              <p className="text-gray-600">Full water line replacement from street to home with modern materials and proper permits.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Gauge" className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pressure Issues</h3>
              <p className="text-gray-600">Diagnose and resolve low water pressure problems including meter and connection issues.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-lg text-gray-600">Professional water line installation and repair</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Water Line Service</h2>
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

      {/* Project Gallery */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Water Line Projects</h2>
            <p className="text-lg text-gray-600">Professional installation and repair work</p>
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
                  alt={`Water line project ${index + 1}`}
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

export default WaterLineRepairPage