import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { toast } from 'react-toastify'

const PipeLiningPage = () => {
  const service = {
    name: "Pipe Lining",
    description: "Trenchless pipe lining solutions that restore old pipes without excavation.",
    detailedDescription: "Restore your pipes without the mess and expense of excavation with our trenchless pipe lining services. This innovative technology installs a new pipe liner inside existing pipes, creating a seamless, durable pipe within a pipe. Perfect for sewer lines, water mains, and other underground piping that would be costly and disruptive to replace conventionally.",
heroImage: "/images/services/pipe-lining-hero.jpg",
    images: [
      "/images/services/trenchless-equipment.jpg",
      "/images/services/pipe-liner-material.jpg",
      "/images/services/lining-process.jpg",
      "/images/services/before-lining.jpg",
      "/images/services/after-lining.jpg"
    ],
    process: [
      {
        step: 1,
        title: "Video Inspection",
        description: "Camera inspection to assess pipe condition and determine if lining is suitable.",
        icon: "Video"
      },
      {
        step: 2,
        title: "Pipe Preparation",
        description: "Cleaning and preparation of existing pipes to ensure proper liner adhesion.",
        icon: "Brush"
      },
      {
        step: 3,
        title: "Liner Installation",
        description: "Insertion and curing of the new pipe liner using specialized trenchless equipment.",
        icon: "ArrowRight"
      },
      {
        step: 4,
        title: "Quality Verification",
        description: "Final inspection to ensure the new liner is properly installed and functioning.",
        icon: "CheckCircle"
      }
    ],
    benefits: [
      "No excavation required",
      "50+ year liner lifespan",
      "Cost-effective pipe restoration",
      "Minimal landscape disruption",
      "Improved pipe flow capacity",
      "Root intrusion prevention",
      "Environmentally friendly solution",
      "Faster completion than replacement"
    ],
    pricing: {
      startingPrice: "$200",
      description: "Trenchless pipe lining starting at $200 per linear foot, with pricing based on pipe diameter and access complexity."
    }
  }

  const handleCallClick = () => {
    window.location.href = "tel:+15075551234"
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    toast.success("Pipe lining consultation requested! We'll contact you to schedule an inspection.")
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Trenchless Pipe Lining</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.detailedDescription}
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Pricing</h3>
                <div className="bg-primary-50 rounded-lg p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold text-primary-600">{service.pricing.startingPrice}</span>
                    <span className="text-gray-600 ml-2">per linear foot</span>
                  </div>
                  <p className="text-gray-600">{service.pricing.description}</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Ideal for These Pipe Issues:</h4>
                <ul className="text-green-800 space-y-1">
                  <li>• Cracked or deteriorated sewer lines</li>
                  <li>• Root-damaged underground pipes</li>
                  <li>• Pipes with joint separations</li>
                  <li>• Corroded water mains</li>
                  <li>• Pipes under driveways or landscaping</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <ApperIcon name="Shield" className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pipe Lining Consultation</h3>
                <p className="text-gray-600">Free inspection to determine if lining is right for your pipes</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pipe Type & Issues</label>
                  <textarea 
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Describe your pipe problems..."
                  />
                </div>
                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Request Free Inspection
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages of Trenchless */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Trenchless Lining</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Shovel" className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Excavation</h3>
              <p className="text-gray-600">Preserve your landscaping, driveway, and property without digging trenches.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="DollarSign" className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-600">Save thousands compared to traditional pipe replacement methods.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Clock" className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Faster Completion</h3>
              <p className="text-gray-600">Complete most projects in 1-2 days instead of weeks of excavation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pipe Lining Process</h2>
            <p className="text-lg text-gray-600">Professional installation with minimal disruption</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pipe Lining Benefits</h2>
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

      {/* Before/After Gallery */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pipe Lining Projects</h2>
            <p className="text-lg text-gray-600">See the restoration process and results</p>
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
                  alt={`Pipe lining project ${index + 1}`}
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

export default PipeLiningPage