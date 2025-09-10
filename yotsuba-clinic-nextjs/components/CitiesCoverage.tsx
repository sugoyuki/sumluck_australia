import React from 'react';

const CitiesCoverage: React.FC = () => {
  const cities = [
    'シドニー',
    'メルボルン',
    'ブリスベン',
    'パース',
    'アデレード',
    'キャンベラ',
    'ゴールドコースト',
    'ケアンズ',
    'ダーウィン',
    'ホバート'
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
          対応都市一覧
        </h2>
        <p style={{ 
          fontSize: '16px', 
          color: '#666', 
          textAlign: 'center', 
          marginBottom: '60px' 
        }}>
          オンライン診療に特化した当社では下記のような様々な主要都市から受付しております。
        </p>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '80px', 
          justifyContent: 'center' 
        }}>
          {/* オーストラリア地図 */}
          <div style={{ flex: '0 0 350px' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag-map_of_Australia.svg/400px-Flag-map_of_Australia.svg.png"
              alt="オーストラリア地図"
              style={{
                width: '100%',
                height: 'auto',
                filter: 'hue-rotate(90deg) saturate(1.5) brightness(0.9)'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<div style="background: #10b981; width: 100%; height: 300px; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">オーストラリア地図</div>';
                }
              }}
            />
          </div>

          {/* 都市リスト */}
          <div style={{ flex: 1 }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '25px 60px' 
            }}>
              {cities.map((city, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px' 
                }}>
                  <span style={{ color: '#10b981', fontSize: '20px' }}>📍</span>
                  <span style={{ fontSize: '18px', color: '#333' }}>{city}</span>
                </div>
              ))}
            </div>

            <div style={{ 
              marginTop: '40px', 
              padding: '20px', 
              background: '#ecfdf5', 
              borderRadius: '8px', 
              textAlign: 'center' 
            }}>
              <h3 style={{ 
                fontSize: '20px', 
                color: '#10b981', 
                marginBottom: '10px' 
              }}>
                オーストラリア全土対応
              </h3>
              <p style={{ 
                fontSize: '15px', 
                color: '#666', 
                margin: 0 
              }}>
                上記以外の都市でも対応可能です
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesCoverage;