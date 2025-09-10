import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const CitiesCoverage: React.FC = () => {
  const cities = [
    'シドニー',
    'メルボルン',
    'ブリスベン',
    'パース',
    'アデレード',
    'キャンベラ',
    'ゴールドコースト',
    'ケアンズ',
    'ダーウィン',
    'ホバート'
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-emerald-500 text-center mb-4 md:mb-5 font-bold">
          対応都市一覧
        </h2>
        <p className="text-sm md:text-base text-gray-600 text-center mb-12 md:mb-16">
          オンライン診療に特化した当社では下記のような様々な主要都市から受付しております。
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 justify-center">
          {/* オーストラリア地図 */}
          <div className="flex-shrink-0 w-full max-w-sm lg:w-96">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag-map_of_Australia.svg/400px-Flag-map_of_Australia.svg.png"
              alt="オーストラリア地図"
              className="w-full h-auto hue-rotate-90 saturate-150 brightness-90"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<div class="bg-emerald-500 w-full h-72 rounded-3xl flex items-center justify-center text-white text-lg">オーストラリア地図</div>';
                }
              }}
            />
          </div>

          {/* 都市リスト */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-emerald-500 text-lg" />
                  <span className="text-base md:text-lg text-gray-800">{city}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 p-4 md:p-5 bg-emerald-50 rounded-lg text-center">
              <h3 className="text-lg md:text-xl text-emerald-500 mb-2 md:mb-3 font-bold">
                オーストラリア全土対応
              </h3>
              <p className="text-sm md:text-base text-gray-600 m-0">
                上記以外の都市でも対応可能です
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesCoverage;