import { FaCalendarCheck, FaClock, FaShieldAlt } from 'react-icons/fa';

export default function Reasons() {
  const reasons = [
    {
      icon: <FaCalendarCheck />,
      title: "予約が直ぐとれる",
      description: ""
    },
    {
      icon: <FaClock />,
      title: "診察を直ぐに受けられる",
      description: ""
    },
    {
      icon: <FaShieldAlt />,
      title: "海外旅行保険適用",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px]">
        <h2 className="text-[34px] text-emerald-500 text-center mb-[50px] font-bold">
          よつばオンラインメディカルが選ばれる理由
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1100px] mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-emerald-500 rounded-xl px-6 lg:px-[25px] py-[35px] text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/15"
            >
              <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-emerald-500 rounded-full">
                <div className="text-white text-[40px]">
                  {reason.icon}
                </div>
              </div>
              <div className="text-lg text-gray-800 font-bold mb-3 leading-[1.4]">
                {reason.title}
              </div>
              <div className="text-sm text-gray-600 leading-[1.6]">
                {reason.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}