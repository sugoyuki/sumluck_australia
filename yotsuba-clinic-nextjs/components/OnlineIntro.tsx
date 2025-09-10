import React from 'react';

const OnlineIntro: React.FC = () => {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '42px', 
          color: '#10b981', 
          marginBottom: '25px', 
          fontWeight: 'bold', 
          lineHeight: '1.3' 
        }}>
          よつばオンラインメディカルの<br />オンライン診療
        </h1>
        <p style={{ 
          fontSize: '16px', 
          lineHeight: '1.8', 
          color: '#333', 
          maxWidth: '900px', 
          margin: '0 auto' 
        }}>
          スマートフォンやタブレットで、病院の予約から決済までかんたん！<br />
          ご自宅や外出先で診療でき、待ち時間も短縮。<br />
          院内感染・二次感染のリスクもなく安心です。
        </p>
      </div>
    </section>
  );
};

export default OnlineIntro;