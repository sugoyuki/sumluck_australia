import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaComments } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scheduleData = [
    { time: '09:00〜13:00', mon: '●', tue: '●', wed: '●', thu: '-', fri: '●', sat: '●', sun: '-' },
    { time: '14:00〜18:00', mon: '●', tue: '●', wed: '●', thu: '-', fri: '●', sat: '●', sun: '-' }
  ];

  return (
    <footer className="bg-gray-800 text-white pt-[60px] pb-5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[120px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[60px] mb-10">
        <div>
          <h3 className="text-lg text-emerald-500 mb-4 md:mb-5 font-bold">
            よつばオンラインメディカル
          </h3>
          <div className="flex items-start gap-3 text-sm text-gray-400 mt-4 md:mt-5 leading-relaxed">
            <FaMapMarkerAlt className="text-emerald-500 mt-1 flex-shrink-0" />
            <span>
              1F, Emaar The Palm Spring Plaza, Unit No. 007,<br/>
              Sector 53, Gurugram, Haryana 122002
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-gray-400 mt-3 md:mt-4">
            <FaPhone className="text-emerald-500 mt-1 flex-shrink-0" />
            <span>
              電話: +91-99102-29899<br/>
              (Whatsapp対応可)
            </span>
          </div>
          <div className="mt-4 md:mt-5">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-emerald-500 text-white py-2 md:py-3 px-4 md:px-5 rounded-full text-sm font-bold hover:bg-emerald-600 transition-colors duration-300"
            >
              <FaComments />
              LINE予約
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg text-emerald-500 mb-4 md:mb-5 font-bold">
            診療時間
          </h3>
          <div className="bg-white rounded-lg p-4 md:p-5 mt-4 md:mt-5">
            <div className="overflow-x-auto">
              <table className="w-full text-gray-800 text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left font-normal text-gray-600">
                      診療時間
                    </th>
                    <th className="py-2 text-center text-xs md:text-sm">月</th>
                    <th className="py-2 text-center text-xs md:text-sm">火</th>
                    <th className="py-2 text-center text-xs md:text-sm">水</th>
                    <th className="py-2 text-center text-xs md:text-sm">木</th>
                    <th className="py-2 text-center text-xs md:text-sm">金</th>
                    <th className="py-2 text-center text-emerald-500 text-xs md:text-sm">土</th>
                    <th className="py-2 text-center text-red-500 text-xs md:text-sm">日</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((row, index) => (
                    <tr key={index}>
                      <td className="py-2 text-gray-600 text-xs md:text-sm">
                        {row.time}
                      </td>
                      <td className="py-2 text-center text-xs md:text-sm">{row.mon}</td>
                      <td className="py-2 text-center text-xs md:text-sm">{row.tue}</td>
                      <td className="py-2 text-center text-xs md:text-sm">{row.wed}</td>
                      <td className="py-2 text-center text-xs md:text-sm">{row.thu}</td>
                      <td className="py-2 text-center text-xs md:text-sm">{row.fri}</td>
                      <td className="py-2 text-center text-xs md:text-sm">{row.sat}</td>
                      <td className="py-2 text-center text-xs md:text-sm">{row.sun}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 md:mt-4 leading-relaxed">
              ※午前の部12:30まで、午後の部17:30までに受付を済ませてください。<br/>
              休診日：毎週木・日曜日・祝日
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center py-4 md:py-5 border-t border-gray-700 text-sm text-gray-400">
        <p>©︎2025 インドよつばオンラインメディカル All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;