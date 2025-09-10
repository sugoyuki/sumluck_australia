import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const CTA: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gradient-to-br from-emerald-500 to-emerald-600 pt-20 pb-24 md:pt-24 md:pb-32 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-16 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-6 md:mb-8 font-bold leading-tight">
          よつばオンラインメディカルは、<br/>
          健やかなオーストラリア生活をサポートします！
        </h2>
        <p className="text-base md:text-lg text-white mb-4 md:mb-5 leading-relaxed">
          オーストラリアのどこからでも日本語で相談できるオンライン診療を提供しています。
        </p>
        <p className="text-sm md:text-base text-white/90 mb-10 md:mb-12">
          診療予約やご質問など、お気軽にお問い合わせください。
        </p>

        <a 
          href="#" 
          className={`inline-flex items-center gap-3 bg-white text-emerald-500 py-4 px-8 md:py-5 md:px-10 rounded-full text-base md:text-lg font-bold transition-all duration-300 ${
            isHovered 
              ? 'transform scale-105 shadow-2xl' 
              : 'shadow-lg'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FaComments className="text-xl" />
          LINEで今すぐ相談
        </a>
      </div>
      
      {/* Wave transition to footer */}
      <svg 
        className="absolute -bottom-px left-0 w-full h-16 md:h-20 block"
        viewBox="0 0 1440 80" 
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,20 C360,60 1080,60 1440,20 L1440,80 L0,80 Z" fill="#1f2937"/>
      </svg>
    </section>
  );
};

export default CTA;