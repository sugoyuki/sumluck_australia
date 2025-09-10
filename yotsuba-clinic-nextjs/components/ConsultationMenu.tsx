import React, { useState } from 'react';
import { FaStethoscope, FaLungs, FaHeartbeat, FaBaby, FaHospital, FaBandAid, FaUser, FaEye, FaVenus, FaBrain, FaBuilding, FaClipboardList } from 'react-icons/fa';

const ConsultationMenu: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    {
      icon: <FaStethoscope />,
      title: '一般内科',
      description: '風邪、インフルエンザ、\n食中毒、下痢、腹痛、\n頭痛など'
    },
    {
      icon: <FaLungs />,
      title: '呼吸器科',
      description: '喘息、気管支炎、\n肺炎、結核など'
    },
    {
      icon: <FaHeartbeat />,
      title: '循環器科',
      description: '高血圧、不整脈、\n心臓病など'
    },
    {
      icon: <FaBaby />,
      title: '小児科',
      description: 'お子様の体調不良、\n予防接種、発育相談'
    },
    {
      icon: <FaHospital />,
      title: '外科',
      description: '怪我、切り傷、やけど、\nねんざなど'
    },
    {
      icon: <FaBandAid />,
      title: '皮膚科',
      description: 'にきび、湿疹、\nじんましんなど'
    },
    {
      icon: <FaUser />,
      title: '耳鼻科',
      description: '耳、鼻、のどの疾患、\nアレルギー性鼻炎や\n花粉症など'
    },
    {
      icon: <FaEye />,
      title: '眼科',
      description: 'ものもらい、結膜炎、\n眼精疲労など'
    },
    {
      icon: <FaVenus />,
      title: '婦人科',
      description: '女性医師・\n女性スタッフが\n対応します'
    },
    {
      icon: <FaBrain />,
      title: '心療内科',
      description: '不眠、不安症状、\n抑うつ症状、\nストレス関連疾患など'
    },
    {
      icon: <FaBuilding />,
      title: 'その他専門科',
      description: '循環器科、消化器科、\n整形外科、泌尿器科など'
    },
    {
      icon: <FaClipboardList />,
      title: '健康診断',
      description: '予約代行可能です。\n健診レポートを\nオプションで\n日本語訳も可能です。'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-500 to-emerald-600 py-20 relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/><line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/><line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></svg>')`,
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-[60px] relative z-10">
        <div className="text-center mb-[50px]">
          <h2 className="text-[32px] text-white font-bold relative inline-block w-full">
            オンライン診療のメニュー
            <span className="absolute -bottom-[15px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white/80 rounded-sm block"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-full mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white/98 backdrop-blur-sm rounded-2xl px-[35px] py-[30px] text-center transition-all duration-300 cursor-pointer min-h-[130px] flex flex-col justify-start relative ${
                hoveredIndex === index 
                  ? 'bg-white transform -translate-y-1 shadow-xl' 
                  : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-[15px] text-white text-[22px]">
                {item.icon}
              </div>
              <div className={`font-bold text-xl mb-[15px] leading-[1.2] ${
                hoveredIndex === index ? 'text-emerald-600' : 'text-emerald-500'
              }`}>
                {item.title}
              </div>
              <div className={`text-sm leading-[1.6] whitespace-pre-line ${
                hoveredIndex === index ? 'text-gray-800' : 'text-gray-700'
              }`}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationMenu;