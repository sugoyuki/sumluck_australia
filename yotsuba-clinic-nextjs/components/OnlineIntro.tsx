import React from 'react';

const OnlineIntro: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-15 text-center">
        <h1 className="text-5xl text-emerald-500 mb-6 font-bold leading-tight">
          よつばオンラインメディカルの<br />オンライン診療
        </h1>
        <p className="text-base leading-relaxed text-gray-800 max-w-4xl mx-auto">
          スマートフォンやタブレットで、病院の予約から決済までかんたん！<br />
          ご自宅や外出先で診療でき、待ち時間も短縮。<br />
          院内感染・二次感染のリスクもなく安心です。
        </p>
      </div>
    </section>
  );
};

export default OnlineIntro;