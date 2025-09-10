import { FaPhone, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="bg-gray-50 min-h-screen relative flex items-center py-16 md:py-20">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Desktop Image */}
        <div className="hidden md:flex flex-shrink-0 w-80 h-96 bg-gray-50 rounded-lg items-center justify-center text-gray-400 text-base border-2 border-dashed border-gray-300">
          人物写真スペース
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="text-emerald-500 text-lg md:text-xl mb-4 md:mb-5 text-center">
            ＼ オーストラリアにいらっしゃる日本人の皆様へ／<br />
            PC・スマホで完結する病院受診を提供します
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-emerald-500 mb-8 md:mb-10 font-bold leading-tight text-center">
            オンライン診療
          </h1>
          
          {/* Feature Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="bg-white border-4 border-emerald-500 rounded-2xl p-5 md:p-8 min-w-0 md:min-w-60 relative flex items-center justify-center min-h-24">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-500 rounded-full absolute -top-7 md:-top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white text-2xl">
                <FaPhone />
              </div>
              <div className="text-base md:text-lg text-gray-800 font-bold leading-snug mt-5 text-center">
                安心の日本語通訳
              </div>
            </div>
            
            <div className="bg-white border-4 border-emerald-500 rounded-2xl p-5 md:p-8 min-w-0 md:min-w-60 relative flex items-center justify-center min-h-24">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-500 rounded-full absolute -top-7 md:-top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white text-2xl">
                <FaCheckCircle />
              </div>
              <div className="text-base md:text-lg text-gray-800 font-bold leading-snug mt-5 text-center">
                すぐに予約可能
              </div>
            </div>
            
            <div className="bg-white border-4 border-emerald-500 rounded-2xl p-5 md:p-8 min-w-0 md:min-w-60 relative flex items-center justify-center min-h-24">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-500 rounded-full absolute -top-7 md:-top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white text-2xl">
                <FaShieldAlt />
              </div>
              <div className="text-base md:text-lg text-gray-800 font-bold leading-snug mt-5 text-center">
                海外旅行保険対応
              </div>
            </div>
          </div>
          
          <div className="text-emerald-500 text-lg md:text-xl text-center font-medium mt-5">
            ～ 受診からお薬の処方箋のお渡しまで～
          </div>
        </div>
        
        {/* Mobile Image */}
        <div className="md:hidden flex-shrink-0 w-full max-w-sm h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 text-base border-2 border-dashed border-gray-300">
          人物写真スペース
        </div>
      </div>
    </section>
  );
}