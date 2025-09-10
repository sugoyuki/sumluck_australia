import { FaPhone, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="bg-gray-50 min-h-[550px] relative flex items-center py-[60px]">
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-[60px] flex flex-col lg:flex-row items-center gap-8 lg:gap-[60px]">
        {/* Desktop Image */}
        <div className="hidden lg:flex flex-shrink-0 w-[350px] h-[400px] bg-gray-50 rounded-lg items-center justify-center text-gray-400 text-base border-2 border-dashed border-gray-300">
          人物写真スペース
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="text-emerald-500 text-lg lg:text-[22px] mb-5 text-center">
            ＼ オーストラリアにいらっしゃる日本人の皆様へ／<br />
            PC・スマホで完結する病院受診を提供します
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[72px] text-emerald-500 mb-8 lg:mb-[50px] font-bold leading-[1.1] text-center">
            オンライン診療
          </h1>
          
          {/* Feature Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-[25px] mb-8 lg:mb-[45px]">
            <div className="bg-white border-[3px] border-emerald-500 rounded-2xl px-6 lg:px-[35px] py-5 min-w-0 lg:min-w-[240px] relative flex items-center justify-center min-h-[85px]">
              <div className="w-16 h-16 bg-emerald-500 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white text-[30px]">
                <FaPhone />
              </div>
              <div className="text-base lg:text-lg text-gray-800 font-bold leading-[1.4] mt-5 text-center">
                安心の日本語通訳
              </div>
            </div>
            
            <div className="bg-white border-[3px] border-emerald-500 rounded-2xl px-6 lg:px-[35px] py-5 min-w-0 lg:min-w-[240px] relative flex items-center justify-center min-h-[85px]">
              <div className="w-16 h-16 bg-emerald-500 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white text-[30px]">
                <FaCheckCircle />
              </div>
              <div className="text-base lg:text-lg text-gray-800 font-bold leading-[1.4] mt-5 text-center">
                すぐに予約可能
              </div>
            </div>
            
            <div className="bg-white border-[3px] border-emerald-500 rounded-2xl px-6 lg:px-[35px] py-5 min-w-0 lg:min-w-[240px] relative flex items-center justify-center min-h-[85px]">
              <div className="w-16 h-16 bg-emerald-500 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white text-[30px]">
                <FaShieldAlt />
              </div>
              <div className="text-base lg:text-lg text-gray-800 font-bold leading-[1.4] mt-5 text-center">
                海外旅行保険対応
              </div>
            </div>
          </div>
          
          <div className="text-emerald-500 text-lg lg:text-[22px] text-center font-medium mt-5">
            ～ 受診からお薬の処方箋のお渡しまで～
          </div>
        </div>
        
        {/* Mobile Image */}
        <div className="lg:hidden flex-shrink-0 w-full max-w-sm h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 text-base border-2 border-dashed border-gray-300 mx-auto">
          人物写真スペース
        </div>
      </div>
    </section>
  );
}