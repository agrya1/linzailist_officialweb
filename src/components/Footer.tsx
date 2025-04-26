import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

interface FooterSectionProps {
  title: string;
  links: { text: string; href: string }[];
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="text-gray-400 hover:text-gray-600 transition-colors">
      {children}
    </a>
  );
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="w-full md:w-auto">
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <FooterLink href={link.href}>{link.text}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const productLinks = [
    { text: '功能特性', href: '#features' },
    { text: '价格方案', href: '#' },
    { text: '企业版', href: '#' },
    { text: '更新日志', href: '#' },
  ];

  const supportLinks = [
    { text: '帮助中心', href: '#' },
    { text: '使用教程', href: '#' },
    { text: '常见问题', href: '#' },
    { text: '联系我们', href: '#' },
  ];

  const companyLinks = [
    { text: '关于我们', href: '#' },
    { text: '加入我们', href: '#' },
    { text: '隐私政策', href: '#' },
    { text: '服务条款', href: '#' },
  ];

  const socialLinks = [
    { icon: '/images/icon3.svg', href: '#' },
    { icon: '/images/icon4.svg', href: '#' },
    { icon: '/images/icon5.svg', href: '#' },
    { icon: '/images/icon6.svg', href: '#' },
  ];

  const paymentLinks = [
    { icon: '/images/icon1.svg', href: '#' },
    { icon: '/images/icon2.svg', href: '#' },
    { icon: '/images/icon3.svg', href: '#' },
    { icon: '/images/icon4.svg', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div>
            <a href="#" className="text-2xl font-semibold text-white mb-4 inline-block">LinzaiList</a>
            <p className="text-gray-400 mb-6">让待办事项拥有色彩DNA，重新定义任务管理体验。</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800"
                >
                  <img src={link.icon} alt="Social" className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          <FooterSection title="产品" links={productLinks} />
          <FooterSection title="支持" links={supportLinks} />
          <FooterSection title="公司" links={companyLinks} />
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 临在清单 LinzaiList. 保留所有权利。</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {paymentLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <img src={link.icon} alt="Payment" className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 