import React from 'react';

const TargetUsers: React.FC = () => {
  const users = [
    {
      icon: '🧑‍🎓',
      title: '留学生',
      description: '日本語で症状を伝えるのが不安…現地で病院にかかる前に相談したい方'
    },
    {
      icon: '👩‍💼',
      title: 'ワーキングホリデー滞在者',
      description: '急な体調不良やけがのとき、日本語で安心して医師とつながりたい方'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: '駐在員・帯同家族',
      description: '小さなお子様やご家族の健康不安を、信頼できる医師と通訳付きで相談したい方'
    },
    {
      icon: '👵',
      title: '観光客',
      description: '旅行中の急な体調不良やケガでも、日本語で医師に相談したい方'
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
        <h2 style={{ 
          fontSize: '34px', 
          color: '#10b981', 
          textAlign: 'center', 
          marginBottom: '20px', 
          fontWeight: 'bold' 
        }}>
          皆様にご利用いただいています！
        </h2>
        <p style={{ 
          fontSize: '16px', 
          color: '#666', 
          textAlign: 'center', 
          marginBottom: '60px' 
        }}>
          オーストラリアで日本語医療サポートが必要なすべての方へ
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '30px', 
          maxWidth: '1000px', 
          margin: '0 auto' 
        }}>
          {users.map((user, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '30px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px'
              }}
            >
              <div style={{ fontSize: '40px', flexShrink: 0 }}>
                {user.icon}
              </div>
              <div>
                <h3 style={{ 
                  fontSize: '20px', 
                  color: '#10b981', 
                  marginBottom: '10px', 
                  fontWeight: 'bold' 
                }}>
                  {user.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: '#666', 
                  lineHeight: '1.6', 
                  margin: 0 
                }}>
                  {user.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{ 
            display: 'inline-block', 
            background: '#ecfdf5', 
            border: '2px solid #10b981', 
            borderRadius: '50px', 
            padding: '15px 40px' 
          }}>
            <p style={{ 
              fontSize: '16px', 
              color: '#10b981', 
              fontWeight: 'bold', 
              margin: 0 
            }}>
              🌏 オーストラリア全土から診療可能です
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;