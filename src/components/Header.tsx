import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-input z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-black/80">临在清单</a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors">功能特性</a>
          <a href="#vertical-tabs" className="text-gray-700 hover:text-primary transition-colors">产品展示</a>
          <a href="#color-system" className="text-gray-700 hover:text-primary transition-colors">色彩系统</a>
          <a href="#download" className="text-gray-700 hover:text-primary transition-colors">立即下载</a>
        </nav>
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 