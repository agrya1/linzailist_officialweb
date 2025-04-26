import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #699237 0%, #FCE17C 50%, #F4BDD6 75%, #D65476 90%, #D997A8 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <div className="flex items-baseline flex-wrap">
                <span className="mr-2">让</span>
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, #D65476, #FCE17C)',
                    WebkitBackgroundClip: 'text' 
                  }}
                >
                  重要的事
                </span>
              </div>
              <span className="block">从色彩中生长出来</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-800 text-lg md:text-xl mb-8"
            >
              轻量却强大、简约但不简单的清单管理工具，通过独特的
              彩色垂直标签式设计，为您提供全新的任务管理方式。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#features" 
                className="bg-[#699237] hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium shadow-lg flex items-center justify-center hover-lift active-shrink"
              >
                立即开始
              </a>
              <a 
                href="#color-system" 
                className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-medium shadow-md flex items-center justify-center hover-lift active-shrink"
              >
                了解更多
              </a>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -10,
                rotate: isHovered ? 2 : 0,
                transition: { 
                  type: "spring", 
                  stiffness: 300 
                }
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="drop-shadow-2xl">
                <motion.img 
                  src="/images/vertical-tabs-preview.png" 
                  alt="临在清单应用界面展示" 
                  className="w-full h-auto max-w-md mx-auto"
                  animate={isHovered ? {
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  } : {}}
                />
                
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isHovered ? { opacity: 1, scale: 1, rotate: 15 } : { opacity: 0, scale: 0 }}
                  style={{ background: 'linear-gradient(135deg, #FCE17C, #699237)' }}
                />
                
                <motion.div
                  className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  style={{ background: 'linear-gradient(135deg, #D65476, #F4BDD6)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;