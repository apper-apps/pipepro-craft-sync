import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import { toast } from 'react-toastify'

const LeakDetectionPage = () => {
  const service = {
    name: "Leak Detection",
    description: "Advanced leak detection technology to find hidden leaks without destructive digging.",
    detailedDescription: "Discover hidden leaks before they cause major damage with our advanced leak detection services. Using state-of-the-art electronic equipment, thermal imaging, and acoustic detection technology, we can locate leaks behind walls, under slabs, and underground without destructive excavation. Early detection saves thousands in potential water damage and reduces water bills.",
    heroImage: "/images/services/leak-detection-hero.jpg",
    images: [
      "/images/services/thermal-imaging.jpg",
      "/images/services/electronic-detection.jpg",
      "/images/services/underground-leak.jpg",
      "/images/services/slab-leak-detection.jpg",
      "/images/services/leak-detection-equipment.jpg"
    ],
    process: [
      {
        step: 1,
        title: "Initial Assessment",
        description: "We evaluate symptoms and perform preliminary testing to narrow down leak locations.",
        icon: "ClipboardList"
      },
      {
        step: 2,
        title: "Electronic Detection",
        description: "Advanced electronic equipment pinpoints exact leak locations without excavation.",
        icon: "Zap"
      },
      {
        step: 3,
        title: "Thermal Imaging",
        description: "Infrared cameras detect temperature variations indicating hidden water leaks.",
        icon: "Eye"
      },
      {
        step: 4,
        title: "Precise Location",
        description: "We mark exact leak locations and provide detailed repair recommendations.",
        icon: "MapPin"
      }
    ],
    benefits: [
      "Non-destructive leak detection",
      "Advanced electronic equipment",
      "Thermal imaging technology", 
      "Acoustic leak detection",
      "Precise leak location marking",
      "Prevention of major water damage",
      "Reduced water bills",
      "Detailed inspection reports"
    ],
    pricing: {
      startingPrice: "$275",
      description: "Professional leak detection service starting at $275, with pricing based on property size and detection complexity."
    }
  }

  const handleCallClick = () => {
    window.location.href = "tel:+15075551234"
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    toast.success("Leak detection appointment requested! We'll contact you to schedule.")
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Leak Detection</h2>
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
                <h4 className="font-semibold text-blue-900 mb-2">Signs You May Have Hidden Leaks:</h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Unexplained increases in water bills</li>
                  <li>• Sounds of running water when fixtures are off</li>
                  <li>• Damp or discolored areas on walls/ceilings</li>
                  <li>• Musty odors or mold growth</li>
                  <li>• Warm spots on floors (slab leaks)</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <ApperIcon name="Search" className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Leak Detection</h3>
                <p className="text-gray-600">Professional leak detection with advanced technology</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Leak Symptoms</label>
                  <textarea 
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Describe what you've noticed..."
                  />
                </div>
                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full"
                >
                  Schedule Detection Service
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detection Technology</h2>
            <p className="text-lg text-gray-600">Advanced equipment for precise leak location</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Zap" className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Electronic Detection</h3>
              <p className="text-gray-600">Electromagnetic equipment locates pipes and identifies leak sounds with pinpoint accuracy.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Eye" className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Thermal Imaging</h3>
              <p className="text-gray-600">Infrared cameras detect temperature variations caused by water leaks behind walls and under floors.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <ApperIcon name="Volume2" className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Acoustic Detection</h3>
              <p className="text-gray-600">Sensitive listening equipment amplifies leak sounds to locate underground and concealed leaks.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Detection Process</h2>
            <p className="text-lg text-gray-600">Systematic approach to finding hidden leaks</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Professional Detection</h2>
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

      {/* Equipment Gallery */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detection Equipment</h2>
            <p className="text-lg text-gray-600">State-of-the-art technology for accurate results</p>
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
                  alt={`Leak detection equipment ${index + 1}`}
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

export default LeakDetectionPage