import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#699237] via-[#FCE17C] to-[#D65476] py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-6 md:w-1/2">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-semibold leading-tight text-black"
          >
            让重要的事<br/>从色彩中生长出来
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-800 max-w-lg"
          >
            轻量却强大、简约但不简单的清单管理工具，通过独特的
            彩色垂直标签式设计，为您提供全新的任务管理方式。
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a href="#download" className="bg-[#689137] text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:bg-[#5d8030] transition-colors">
              立即开始
            </a>
            <a href="#features" className="bg-[#FCE17C] text-gray-800 font-medium px-8 py-3 rounded-lg shadow-md hover:bg-[#fbd84f] transition-colors">
              了解更多
            </a>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-auto h-auto shadow-2xl rounded-3xl overflow-hidden">
            <img 
              src="/image/linzailist.png" 
              alt="临在清单应用界面" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;