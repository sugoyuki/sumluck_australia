'use client';

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

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
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-emerald-500 text-center mb-10 md:mb-12 font-bold">
          よくあるご質問
        </h2>
        
        <div className="flex flex-col gap-3 md:gap-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden transition-shadow duration-300 ${
                openFAQ === index ? 'shadow-lg' : 'shadow-sm'
              }`}
            >
              <button
                className={`w-full p-4 md:p-5 lg:p-6 border-none cursor-pointer flex justify-between items-center text-left text-sm md:text-base font-medium transition-colors duration-300 ${
                  openFAQ === index 
                    ? 'bg-emerald-50 text-emerald-500' 
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="pr-4">{item.question}</span>
                <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-emerald-500 transition-transform duration-300">
                  {openFAQ === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 bg-gray-50 ${
                  openFAQ === index ? 'max-h-96 py-4 md:py-5 px-4 md:px-5 lg:px-6' : 'max-h-0 py-0 px-4 md:px-5 lg:px-6'
                }`}
              >
                <p className="text-sm md:text-base text-gray-600 leading-relaxed m-0">
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