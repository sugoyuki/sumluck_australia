import React from 'react';

const MedicalAdvisor: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        {/* 医療顧問紹介 */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl text-emerald-500 text-center mb-6 md:mb-8 font-bold">
            医療顧問紹介
          </h3>
          <p className="text-sm md:text-base text-gray-600 text-center mb-8 md:mb-10">
            専門的な知見で医療サービスの質を支える医療顧問
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
            {/* 医師写真 */}
            <div className="flex-shrink-0">
              <img 
                src="yahiro-doctor.jpg"
                alt="八尋隆明医師"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-emerald-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<div class="w-32 h-32 md:w-40 md:h-40 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 text-sm border-2 border-dashed border-gray-300">八尋隆明医師</div>';
                  }
                }}
              />
            </div>

            {/* 医師情報 */}
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-lg md:text-xl text-gray-800 mb-2 md:mb-3 font-semibold">
                八尋隆明
              </h4>
              <p className="text-sm md:text-base text-emerald-500 mb-3 md:mb-4 font-semibold">
                医療顧問(大分大学医学部講師)
              </p>
              <p className="text-xs md:text-sm text-emerald-500 mb-4 md:mb-5">
                専門: 感染症
              </p>

              {/* 顧問からのメッセージ */}
              <div className="bg-gray-50 border-l-4 border-emerald-500 p-4 md:p-5 rounded">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed italic">
                  「私はこれまでデング熱をはじめとする感染症の研究に長年携わってきました。
                  いままでの知見と経験を活かし、当地にお住まいの日本人の皆様が安心して暮
                  らせるよう、顧問として運営をサポートしています。」
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 大分大学連携 */}
        <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-8 md:p-10 mt-12 md:mt-16 text-center">
          <h3 className="text-xl md:text-2xl text-emerald-500 mb-5 md:mb-6 font-bold">
            大分大学連携
          </h3>
          <h4 className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
            学術コンサルティング制度適用事業
          </h4>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed max-w-3xl mx-auto">
            当社は、<span className="text-emerald-500 font-bold">大分大学による学術コンサルティング制度</span>の適用事業として、<br className="hidden md:block"/>
            医療顧問による助言体制を整え、提供サービスの品質向上と<br className="hidden md:block"/>
            安定的な運用を継続的に推進しています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedicalAdvisor;