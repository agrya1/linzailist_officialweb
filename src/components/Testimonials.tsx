import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  rating: number;
  text: string;
  name: string;
  title: string;
  usagePeriod: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ rating, text, name, title, usagePeriod }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <img 
            key={i}
            src={i < rating ? "/images/star vector.svg" : "/images/star-empty.svg"}
            alt="star"
            className="w-4 h-4 mr-1"
          />
        ))}
        <span className="ml-2 text-gray-700">{rating.toFixed(1)}</span>
      </div>
      
      <p className="text-gray-700 mb-6">"{text}"</p>
      
      <div className="flex items-center">
        <img src="/images/user.svg" alt={name} className="w-10 h-10 mr-4" />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-gray-500 text-sm">{title} | {usagePeriod}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      rating: 5.0,
      text: "临在清单彻底改变了我的任务管理方式！垂直标签设计非常直观，色彩系统让我对不同类型的任务一目了然。现在我的工作效率提高了至少30%，强烈推荐给所有需要高效管理任务的人。",
      name: "陈思远",
      title: "产品经理",
      usagePeriod: "使用 6 个月"
    },
    {
      rating: 5.0,
      text: "作为一名设计师，我对软件的UI和UX要求很高，临在清单的设计简直完美！色彩系统不仅美观，而且真的能帮助记忆和分类。多层级任务管理功能让我能轻松管理复杂的项目，这是我用过的最好的清单应用。",
      name: "林雨晴",
      title: "UI 设计师",
      usagePeriod: "使用 4 个月"
    },
    {
      rating: 4.5,
      text: "我尝试过很多任务管理应用，但总是坚持不下来。临在清单不同，它的垂直标签设计和色彩系统让任务管理变得有趣且高效。我特别喜欢它的拟物化交互，感觉就像在使用实体笔记本，但功能更强大。",
      name: "王俊杰",
      title: "软件工程师",
      usagePeriod: "使用 3 个月"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
          >
            用户的心声
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            看看其他用户如何评价临在清单带来的全新任务管理体验
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              name={testimonial.name}
              title={testimonial.title}
              usagePeriod={testimonial.usagePeriod}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 