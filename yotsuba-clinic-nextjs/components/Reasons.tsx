import { useState } from 'react';

export default function Reasons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      icon: "📅",
      title: "予約が直ぐとれる",
      description: ""
    },
    {
      icon: "⏰",
      title: "診察を直ぐに受けられる",
      description: ""
    },
    {
      icon: "🔒",
      title: "海外旅行保険適用",
      description: ""
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
        <h2 style={{ 
          fontSize: '34px', 
          color: '#10b981', 
          textAlign: 'center', 
          marginBottom: '50px', 
          fontWeight: 'bold' 
        }}>
          よつばオンラインメディカルが選ばれる理由
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '30px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {reasons.map((reason, index) => (
            <div 
              key={index}
              style={{
                background: 'white',
                border: '2px solid #10b981',
                borderRadius: '12px',
                padding: '35px 25px',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredIndex === index ? '0 8px 20px rgba(16, 185, 129, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#10b981',
                borderRadius: '50%'
              }}>
                <div style={{
                  color: 'white',
                  fontSize: '40px'
                }}>
                  {reason.icon}
                </div>
              </div>
              <div style={{
                fontSize: '18px',
                color: '#333',
                fontWeight: 'bold',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}>
                {reason.title}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                {reason.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}