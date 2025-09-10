import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      padding: '100px 0 120px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 60px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '42px',
          color: 'white',
          marginBottom: '30px',
          fontWeight: 'bold',
          lineHeight: '1.4'
        }}>
          よつばオンラインメディカルは、<br/>
          健やかなオーストラリア生活をサポートします！
        </h2>
        <p style={{
          fontSize: '18px',
          color: 'white',
          marginBottom: '20px',
          lineHeight: '1.8'
        }}>
          オーストラリアのどこからでも日本語で相談できるオンライン診療を提供しています。
        </p>
        <p style={{
          fontSize: '16px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '50px'
        }}>
          診療予約やご質問など、お気軽にお問い合わせください。
        </p>

        <a 
          href="#" 
          style={{
            display: 'inline-block',
            background: 'white',
            color: '#10b981',
            padding: '18px 40px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'transform 0.3s, box-shadow 0.3s',
            boxShadow: isHovered ? '0 8px 25px rgba(0,0,0,0.3)' : '0 4px 15px rgba(0,0,0,0.2)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          💬 LINEで今すぐ相談
        </a>
      </div>
      
      {/* Wave transition to footer */}
      <svg 
        style={{
          position: 'absolute',
          bottom: '-1px',
          left: 0,
          width: '100%',
          height: '80px',
          display: 'block'
        }}
        viewBox="0 0 1440 80" 
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,20 C360,60 1080,60 1440,20 L1440,80 L0,80 Z" fill="#2c3e50"/>
      </svg>
    </section>
  );
};

export default CTA;