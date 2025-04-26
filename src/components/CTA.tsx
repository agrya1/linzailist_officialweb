import React from 'react';
import { motion } from 'framer-motion';

interface DownloadButtonProps {
  icon: string;
  text: string;
  bgColor: string;
  textColor: string;
  hasBorder?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  icon,
  text,
  bgColor,
  textColor,
  hasBorder = false
}) => {
  return (
    <a
      href="#"
      className={`${bgColor} ${textColor} ${
        hasBorder ? 'border border-gray-200' : ''
      } py-3 px-6 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity`}
    >
      <img src={`/images/${icon}`} alt="" className="w-5 h-5" />
      <span className="text-sm font-medium">{text}</span>
    </a>
  );
};

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
            >
              立即体验临在清单
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-8"
            >
              下载临在清单，开启全新的任务管理体验。支持
              iOS、Android和Web多平台使用，数据实时同
              步。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <DownloadButton 
                icon="icon-apple.svg"
                text="App Store 下载"
                bgColor="bg-black"
                textColor="text-white"
              />
              <DownloadButton 
                icon="icon-google-play.svg"
                text="Google Play 下载"
                bgColor="bg-[#B2DFDB]"
                textColor="text-white"
              />
              <DownloadButton 
                icon="icon-web.svg"
                text="Web 版本体验"
                bgColor="bg-white"
                textColor="text-gray-800"
                hasBorder
              />
            </motion.div>
          </div>
        </div>
        
        {/* 订阅更新部分 */}
        <div className="mt-16 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-gray-800 mb-6"
          >
            订阅我们的更新
          </motion.h3>
          
          <div className="flex justify-center mb-4">
            <div className="flex max-w-md w-full">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="flex-grow px-4 py-3 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent"
              />
              <button className="bg-[#B2DFDB] text-white px-6 py-3 rounded-r-lg font-medium">
                订阅
              </button>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            我们会定期发送产品更新、使用技巧和特别优惠信息
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA; 