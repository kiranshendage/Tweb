// src/components/ProductsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCloud, 
  FaShieldAlt, 
  FaChartBar, 
  FaRobot, 
  FaPlug, 
  FaMobileAlt,
  FaStar,
  FaCheck,
  FaFire,
  FaArrowRight
} from 'react-icons/fa';
import productsData from '../../../src/data/products.json';

// Icon mapping
const iconMap = {
  FaCloud,
  FaShieldAlt,
  FaChartBar,
  FaRobot,
  FaPlug,
  FaMobileAlt
};

const ProductsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Innovative </span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our cutting-edge products designed to transform your business operations
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {productsData.products.map((product) => {
            const IconComponent = iconMap[product.icon];
            
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 ${
                  product.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      <FaFire className="w-3 h-3" />
                      <span>Popular</span>
                    </div>
                  </div>
                )}

                {/* Product Header */}
                <div className={`p-8 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                        <span className="text-white/90 text-sm font-medium">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">${product.price}</div>
                      <div className="text-white/70 text-sm">/{product.pricePeriod}</div>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-700 font-semibold">
                        {product.rating}
                      </span>
                    </div>
                    <div className="text-gray-500 text-sm">
                      {product.reviews} reviews
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <FaCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Launch Date */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
                    <span>Launched: {new Date(product.launchDate).toLocaleDateString()}</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      New
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button className="group w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Learn More</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-blue-200 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
            <span>View All Products</span>
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;