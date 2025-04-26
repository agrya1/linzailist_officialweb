import React from 'react';

const VerticalTabs = () => {
  const features = [
    {
      title: '比传统列表视图提升47%的视觉扫视效率',
      icon: '/images/icon-checkmark.svg'
    },
    {
      title: '基于柏林工业大学色彩记忆研究的色彩认知锚点',
      icon: '/images/icon-checkmark.svg'
    },
    {
      title: '零学习成本，比竞品减少83%的首屏操作指引需求',
      icon: '/images/icon-checkmark.svg'
    }
  ];
  
  return (
    <section id="vertical-tabs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            直观高效的任务管理体验
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            临在清单通过精心设计的界面和交互，让任务管理变得更加简单、高效且愉悦
          </p>
        </div>
        
        {/* 垂直标签模块 - 单独模块设计 */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左侧内容 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">垂直标签，一触即达</h3>
              
              <p className="text-gray-600 mb-8">
                独特的垂直标签设计让您可以快速切换不同的清单类别，每个类别都有专属的色彩标识，让您一目了
                然。右滑操作可以快速进行任务管理，大大提高了操作效率。
              </p>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                  >
                    <div className="bg-[#B2DFDB]/20 rounded-full p-1 mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#009688]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 右侧图片 */}
            <div className="flex items-center justify-center">
              <div className="drop-shadow-2xl">
                <img 
                  src="/images/vertical-tabs-preview.png" 
                  alt="临在清单应用界面展示" 
                  className="w-full h-auto"
                  style={{ maxHeight: '480px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 智能色彩模块 */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左侧图片 - 调换位置 */}
            <div className="flex items-center justify-center">
              <div className="drop-shadow-2xl">
                <img 
                  src="/images/color-system-preview.png" 
                  alt="临在清单色彩系统展示" 
                  className="w-full h-auto"
                  style={{ maxHeight: '480px', objectFit: 'contain' }}
                />
              </div>
            </div>
            
            {/* 右侧内容 - 调换位置 */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">智能色彩，增强记忆</h3>
              
              <p className="text-gray-600 mb-8">
                临在清单基于色彩心理学，为不同类型的任务分配专属色彩，增强用户对任务的记忆和识别能力。您
                还可以自定义色彩主题，打造专属于您的任务管理系统。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-[#FF9A8B] to-[#FF6B6B] rounded-xl p-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">工作清单</h4>
                  <p className="text-white/90 text-sm">日出橙红 → 正午鎏金</p>
                </div>
                <div className="bg-gradient-to-br from-[#A1C4FD] to-[#C2E9FB] rounded-xl p-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">学习计划</h4>
                  <p className="text-white/90 text-sm">青瓷釉色 → 竹月蓝</p>
                </div>
                <div className="bg-gradient-to-br from-[#F6D365] to-[#FDA085] rounded-xl p-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">生活备忘</h4>
                  <p className="text-white/90 text-sm">杏仁白 → 晨雾灰</p>
                </div>
                <div className="bg-gradient-to-br from-[#84FAB0] to-[#8FD3F4] rounded-xl p-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">项目管理</h4>
                  <p className="text-white/90 text-sm">薄荷绿 → 湖水蓝</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTabs; 