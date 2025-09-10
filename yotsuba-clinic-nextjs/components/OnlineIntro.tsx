import React from 'react';

const OnlineIntro: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px] text-center">
        <h1 className="text-[34px] lg:text-[42px] text-emerald-500 mb-[25px] font-bold leading-[1.3]">
          よつばオンラインメディカルの<br />オンライン診療
        </h1>
        <p className="text-base leading-[1.8] text-gray-800 max-w-[900px] mx-auto">
          スマートフォンやタブレットで、病院の予約から決済までかんたん！<br />
          ご自宅や外出先で診療でき、待ち時間も短縮。<br />
          院内感染・二次感染のリスクもなく安心です。
        </p>
      </div>
    </section>
  );
};

export default OnlineIntro;