import React from 'react';
import { FaUserMd } from 'react-icons/fa';

const MedicalInterpreters: React.FC = () => {
  const interpreters = [
    {
      name: '大野 優里',
      nameEn: 'Yuri Ono',
      description: '長年の医療通訳経験'
    },
    {
      name: '丹羽 崇 医師（内科）',
      nameEn: 'Dr.Takashi Niwa',
      description: '日本人医師ならではのメリット'
    },
    {
      name: '山田 太郎',
      nameEn: 'Taro Yamada',
      description: '医療専門知識に基づく通訳'
    },
    {
      name: '佐藤 花子',
      nameEn: 'Hanako Sato',
      description: '500名の日本人医師が対応'
    },
    {
      name: '鈴木 一郎',
      nameEn: 'Ichiro Suzuki',
      description: '安心感のあるコミュニケーション'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-15">
        <h2 className="text-4xl text-emerald-500 mb-5 font-bold text-center">
          充実した日本語医療通訳体制
        </h2>
        <p className="text-base text-gray-600 mb-15 leading-relaxed text-center">
          言葉の心配なく、安心して診療を受けていただけます
        </p>

        {/* 医療通訳者リスト */}
        <div className="flex flex-col gap-6 mb-15">
          {interpreters.map((interpreter, index) => (
            <div
              key={index}
              className="flex items-center gap-8 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-30 h-30 bg-gray-50 rounded-full flex items-center justify-center text-emerald-500 text-sm border-2 border-dashed border-gray-300">
                写真
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-gray-800 mb-1 font-semibold">
                  {interpreter.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {interpreter.nameEn}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {interpreter.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalInterpreters;