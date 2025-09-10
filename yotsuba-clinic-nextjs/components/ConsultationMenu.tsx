import React, { useState } from 'react';

const ConsultationMenu: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    {
      icon: '🩺',
      title: '一般内科',
      description: '風邪、インフルエンザ、\n食中毒、下痢、腹痛、\n頭痛など'
    },
    {
      icon: '🫁',
      title: '呼吸器科',
      description: '喘息、気管支炎、\n肺炎、結核など'
    },
    {
      icon: '❤️',
      title: '循環器科',
      description: '高血圧、不整脈、\n心臓病など'
    },
    {
      icon: '👶',
      title: '小児科',
      description: 'お子様の体調不良、\n予防接種、発育相談'
    },
    {
      icon: '🏥',
      title: '外科',
      description: '怪我、切り傷、やけど、\nねんざなど'
    },
    {
      icon: '🩹',
      title: '皮膚科',
      description: 'にきび、湿疹、\nじんましんなど'
    },
    {
      icon: '👂',
      title: '耳鼻科',
      description: '耳、鼻、のどの疾患、\nアレルギー性鼻炎や\n花粉症など'
    },
    {
      icon: '👁️',
      title: '眼科',
      description: 'ものもらい、結膜炎、\n眼精疲労など'
    },
    {
      icon: '👩',
      title: '婦人科',
      description: '女性医師・\n女性スタッフが\n対応します'
    },
    {
      icon: '🧠',
      title: '心療内科',
      description: '不眠、不安症状、\n抑うつ症状、\nストレス関連疾患など'
    },
    {
      icon: '🏨',
      title: 'その他専門科',
      description: '循環器科、消化器科、\n整形外科、泌尿器科など'
    },
    {
      icon: '📋',
      title: '健康診断',
      description: '予約代行可能です。\n健診レポートを\nオプションで\n日本語訳も可能です。'
    }
  ];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      padding: '80px 0',
      margin: 0,
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <div style={{
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/><line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/><line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></svg>')`,
        backgroundSize: '100px 100px',
        backgroundRepeat: 'repeat',
        opacity: 0.3
      }} />
      
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 60px',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '32px',
          color: 'white',
          textAlign: 'center',
          marginBottom: '50px',
          fontWeight: 'bold',
          position: 'relative',
          display: 'inline-block',
          width: '100%'
        }}>
          オンライン診療のメニュー
          <span style={{
            content: '',
            position: 'absolute',
            bottom: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '2px',
            display: 'block'
          }} />
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginBottom: '60px',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: hoveredIndex === index ? 'white' : 'rgba(255, 255, 255, 0.98)',
                border: 'none',
                borderRadius: '16px',
                padding: '30px 35px',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s',
                cursor: 'pointer',
                minHeight: '130px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                boxShadow: hoveredIndex === index ? '0 12px 24px rgba(0, 0, 0, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.08)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={{
                width: '40px',
                height: '40px',
                background: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 15px',
                fontSize: '22px',
                color: 'white'
              }}>
                {item.icon}
              </div>
              <div style={{
                color: hoveredIndex === index ? '#059669' : '#10b981',
                fontWeight: 700,
                fontSize: '20px',
                marginBottom: '15px',
                lineHeight: '1.2',
                display: 'block'
              }}>
                {item.title}
              </div>
              <div style={{
                color: hoveredIndex === index ? '#1f2937' : '#374151',
                fontSize: '14px',
                lineHeight: '1.6',
                fontWeight: 400,
                whiteSpace: 'pre-line'
              }}>
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