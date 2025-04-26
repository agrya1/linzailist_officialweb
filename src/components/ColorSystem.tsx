import React from 'react';
import { motion } from 'framer-motion';

type ColorCardProps = {
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

const ColorCard = ({ title, description, gradientFrom, gradientTo }: ColorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="rounded-2xl overflow-hidden relative shadow-md hover-lift active-shrink gradient-move"
    >
      <div className="bg-gradient-to-br h-full min-h-[240px]" 
           style={{ backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})` }}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

type TechCardProps = {
  title: string;
  description: string;
  iconSrc: string;
  iconBgColor: string;
  delay?: number;
}

const TechCard = ({ title, description, iconSrc, iconBgColor, delay = 0 }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      className="bg-gray-100 rounded-2xl p-6 hover-lift active-shrink"
    >
      <div className="flex items-center mb-3">
        <motion.div 
          className="mr-3 rounded-full p-2 w-8 h-8 flex items-center justify-center hover-rotate" 
          style={{ backgroundColor: iconBgColor }}
          whileHover={{ rotate: 10 }}
        >
          <img src={iconSrc} alt={title} width={16} height={16} />
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

const ColorSystem = () => {
  const cards = [
    {
      title: '高效能色系',
      description: '暖色调促进行动力和决策效率，适用于工作任务和紧急事项，提升完成率达32%。',
      gradientFrom: '#FF9A8B',
      gradientTo: '#FF6B6B'
    },
    {
      title: '专注色系',
      description: '冷色调增强专注力和思考深度，适用于学习计划和创意项目，延长专注时间约28%。',
      gradientFrom: '#A1C4FD',
      gradientTo: '#C2E9FB'
    },
    {
      title: '平衡色系',
      description: '中性色调平衡情绪和压力，适用于生活备忘和日常安排，减轻任务焦虑感达41%。',
      gradientFrom: '#D4BFFF',
      gradientTo: '#A1C4FD'
    }
  ];

  const techs = [
    {
      title: '色彩编码记忆法',
      description: '人脑对色彩的记忆力比文字高出60%，临在清单利用这一特性，通过色彩编码增强任务记忆，提高完成率。',
      iconSrc: '/images/Vector44.png',
      iconBgColor: '#B2DFDB'
    },
    {
      title: '视觉优先级排序',
      description: '通过色彩饱和度和明度的精确调控，临在清单在视觉层面自动突出重要任务，无需额外标记，直观高效。',
      iconSrc: '/images/Vector33.png',
      iconBgColor: '#B2DFDB'
    },
    {
      title: '情绪关联技术',
      description: '不同色彩能唤起不同情绪，临在清单根据任务性质匹配最适合的色彩，创造积极情绪，提升任务执行动力。',
      iconSrc: '/images/Vector22.svg',
      iconBgColor: '#D1C4E9'
    },
    {
      title: '个性化色彩适应',
      description: '系统会学习您的使用习惯，逐渐调整色彩方案以适应您的个人偏好和工作模式，打造专属色彩体系。',
      iconSrc: '/images/Vector11.svg',
      iconBgColor: '#D1C4E9'
    }
  ];

  return (
    <section id="color-system" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
          >
            基于色彩心理学的智能系统
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            临在清单利用色彩心理学中色彩视觉对意识的影响，让您的清单管理更加高效且愉悦
          </motion.p>
        </div>

        {/* 色彩系统卡片展示 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <ColorCard
                title={card.title}
                description={card.description}
                gradientFrom={card.gradientFrom}
                gradientTo={card.gradientTo}
              />
            </div>
          ))}
        </div>

        {/* 色彩记忆增强技术 */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-md hover-lift"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-12 fade-in">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              色彩记忆增强技术
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              临在清单基于最新色彩认知研究，利用色彩增强记忆效果，让您的任务更加难以遗忘
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techs.map((tech, index) => (
              <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <TechCard
                  title={tech.title}
                  description={tech.description}
                  iconSrc={tech.iconSrc}
                  iconBgColor={tech.iconBgColor}
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ColorSystem; 