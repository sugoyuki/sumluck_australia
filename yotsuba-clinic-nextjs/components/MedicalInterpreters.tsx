import React from 'react';

const MedicalInterpreters: React.FC = () => {
  const interpreters = [
    {
      name: '大野 優里',
      nameEn: 'Yuri Ono',
      description: '長年の医療通訳経験'
    },
    {
      name: '丹羽 崇 医師（内科）',
      nameEn: 'Dr.Takashi Niwa',
      description: '日本人医師ならではのメリット'
    },
    {
      name: '山田 太郎',
      nameEn: 'Taro Yamada',
      description: '医療専門知識に基づく通訳'
    },
    {
      name: '佐藤 花子',
      nameEn: 'Hanako Sato',
      description: '500名の日本人医師が対応'
    },
    {
      name: '鈴木 一郎',
      nameEn: 'Ichiro Suzuki',
      description: '安心感のあるコミュニケーション'
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
        <h2 style={{ 
          fontSize: '34px', 
          color: '#10b981', 
          marginBottom: '20px', 
          fontWeight: 'bold', 
          textAlign: 'center' 
        }}>
          充実した日本語医療通訳体制
        </h2>
        <p style={{ 
          fontSize: '16px', 
          color: '#666', 
          marginBottom: '60px', 
          lineHeight: '1.6', 
          textAlign: 'center' 
        }}>
          言葉の心配なく、安心して診療を受けていただけます
        </p>

        {/* 医療通訳者リスト */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '25px', 
          marginBottom: '60px' 
        }}>
          {interpreters.map((interpreter, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '30px',
                background: 'white',
                borderRadius: '12px',
                padding: '30px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '120px',
                height: '120px',
                background: '#f9fafb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af',
                fontSize: '14px',
                border: '2px dashed #d1d5db'
              }}>
                写真
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  color: '#333', 
                  marginBottom: '5px' 
                }}>
                  {interpreter.name}
                </h3>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#999', 
                  marginBottom: '10px' 
                }}>
                  {interpreter.nameEn}
                </p>
                <p style={{ 
                  fontSize: '15px', 
                  color: '#666', 
                  lineHeight: '1.6' 
                }}>
                  {interpreter.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalInterpreters;