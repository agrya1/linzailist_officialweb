import React from 'react';
import { motion } from 'framer-motion';

type FeatureItemProps = {
  iconSrc: string;
  bgColor: string;
  title: string;
  description: string;
}

const FeatureItem = ({ iconSrc, bgColor, title, description }: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-8"
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 flex items-center justify-center mr-4 rounded-full ${bgColor}`}>
          <img src={iconSrc} alt={title} className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      iconSrc: "/images/icon1.svg",
      bgColor: 'bg-[#B2DFDB]/10',
      title: '垂直标签式管理架构',
      description: '创新性地采用垂直排列的标签设计，突破传统列表视图的局限，实现了最大化的屏幕空间利用率，提高管理效率达 47%。'
    },
    {
      iconSrc: "/images/icon2.svg",
      bgColor: 'bg-[#D1C4E9]/10',
      title: '智能色彩系统',
      description: '系统智能为不同类型清单分配专属色彩，基于色彩心理学的配色方案，增强用户对不同清单的直观辨识能力，同时支持自定义主题。'
    },
    {
      iconSrc: "/images/icon3.svg",
      bgColor: 'bg-[#B2DFDB]/10',
      title: '拟物化交互设计',
      description: '模拟真实笔记本的视觉效果，提供自然流畅的页面切换效果，降低用户学习成本，提升使用体验，减少83%的首屏操作指引需求。'
    },
    {
      iconSrc: "/images/icon4.svg",
      bgColor: 'bg-[#D1C4E9]/10',
      title: '多层级任务管理',
      description: '支持任务-子任务的多层级结构，可通过右滑操作快速进行置顶、提醒设置、添加子条目和删除等操作，实现高效的任务组织管理。'
    },
    {
      iconSrc: "/images/icon5.svg",
      bgColor: 'bg-[#B2DFDB]/10',
      title: '跨平台同步',
      description: '基于Flutter开发，支持iOS、Android、Web等多平台使用，数据实时同步，让您随时随地管理您的任务清单，不错过任何重要事项。'
    },
    {
      iconSrc: "/images/icon6.svg",
      bgColor: 'bg-[#D1C4E9]/10',
      title: '隐私保护',
      description: '采用端到端加密技术，确保您的个人数据安全。支持指纹/面容解锁，为您的隐私信息提供多重保障，让您安心使用。'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
          >
            极致简约，功能强大
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            临在清单通过创新的设计理念，让任务管理变得更加直观、高效且愉悦
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              iconSrc={feature.iconSrc}
              bgColor={feature.bgColor}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 