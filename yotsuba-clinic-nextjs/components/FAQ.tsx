'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: '子どもの診察も可能ですか？また、何歳から診てもらえますか？',
      answer: '乳児（0歳児）から診察可能です。症状によって対応できない場合は対応可能な病院でご受診いただけるよう、紹介状を発行致します。'
    },
    {
      question: '会社や学校に提出するための診断書は発行してもらえますか？',
      answer: '発行可能です。詳しくはお問い合わせください。'
    },
    {
      question: 'オンライン診療の結果、詳しい検査や対面での診察が必要になった場合はどうなりますか？',
      answer: '血液検査など検査員がご自宅へ訪問し検査できるケースと、対応可能な医療機関へご受診頂くケースがございます。'
    },
    {
      question: '身体の不調ではなく、気分の落ち込みや海外生活の悩みといったメンタル面の相談もできますか？',
      answer: '精神科医/心療内科医によるオンライン通訳が可能です。言葉や文化のストレスを感じず、安心して日本語でご相談いただけます。'
    },
    {
      question: '薬はどうやって受け取れますか？',
      answer: '発行された処方箋を元に最寄りの薬局で薬を購入することができます。'
    },
    {
      question: '日本の海外旅行保険は対象になりますか？対象の場合立替が必要ですか？',
      answer: '症状や保険会社、付帯されてる内容によってお立替なく診察を受けられます。事前にお問い合わせ下さい。'
    },
    {
      question: '支払はクレジットカードが使えますか？また他に支払手段ありますか？',
      answer: 'クレジットカード決済、銀行振込、PayPalなど各種決済方法に対応しております。詳しくはお問い合わせください。'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section style={{ background: '#f9fafb', padding: '80px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 60px' }}>
        <h2 style={{ 
          fontSize: '34px', 
          color: '#10b981', 
          textAlign: 'center', 
          marginBottom: '50px', 
          fontWeight: 'bold' 
        }}>
          よくあるご質問
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: openFAQ === index ? '0 4px 12px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'box-shadow 0.3s'
              }}
            >
              <button
                style={{
                  width: '100%',
                  padding: '20px 25px',
                  background: openFAQ === index ? '#ecfdf5' : 'white',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  fontSize: '16px',
                  color: openFAQ === index ? '#10b981' : '#333',
                  fontWeight: 500,
                  transition: 'background 0.3s'
                }}
                onClick={() => toggleFAQ(index)}
                onMouseEnter={(e) => {
                  if (openFAQ !== index) {
                    (e.target as HTMLElement).style.background = '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openFAQ !== index) {
                    (e.target as HTMLElement).style.background = 'white';
                  }
                }}
              >
                <span>{item.question}</span>
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 300,
                    color: '#10b981',
                    transition: 'transform 0.3s',
                    display: 'inline-block',
                    width: '30px',
                    height: '30px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    flexShrink: 0,
                    transform: openFAQ === index ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: openFAQ === index ? '300px' : '0',
                  overflow: 'hidden',
                  transition: openFAQ === index 
                    ? 'max-height 0.3s ease-in, padding 0.3s ease-in'
                    : 'max-height 0.3s ease-out, padding 0.3s ease-out',
                  background: '#f9fafb',
                  padding: openFAQ === index ? '20px 25px' : '0 25px'
                }}
              >
                <p style={{ 
                  fontSize: '15px', 
                  color: '#666', 
                  lineHeight: '1.7', 
                  margin: 0 
                }}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;