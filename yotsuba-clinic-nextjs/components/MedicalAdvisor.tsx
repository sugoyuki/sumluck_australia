import React from 'react';

const MedicalAdvisor: React.FC = () => {
  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
        {/* 医療顧問紹介 */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '50px 40px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          maxWidth: '900px',
          margin: '60px auto 0'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            color: '#10b981', 
            textAlign: 'center', 
            marginBottom: '30px' 
          }}>
            医療顧問紹介
          </h3>
          <p style={{ 
            fontSize: '15px', 
            color: '#666', 
            textAlign: 'center', 
            marginBottom: '40px' 
          }}>
            専門的な知見で医療サービスの質を支える医療顧問
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            {/* 医師写真 */}
            <div style={{ flexShrink: 0 }}>
              <img 
                src="yahiro-doctor.jpg"
                alt="八尋隆明医師"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #10b981'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<div style="width: 150px; height: 150px; background: #f9fafb; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #9ca3af; font-size: 14px; border: 2px dashed #d1d5db;">八尋隆明医師</div>';
                  }
                }}
              />
            </div>

            {/* 医師情報 */}
            <div style={{ flex: 1 }}>
              <h4 style={{ 
                fontSize: '20px', 
                color: '#333', 
                marginBottom: '10px' 
              }}>
                八尋隆明
              </h4>
              <p style={{ 
                fontSize: '14px', 
                color: '#10b981', 
                marginBottom: '15px', 
                fontWeight: 600 
              }}>
                医療顧問(大分大学医学部講師)
              </p>
              <p style={{ 
                fontSize: '13px', 
                color: '#10b981', 
                marginBottom: '20px' 
              }}>
                専門: 感染症
              </p>

              {/* 顧問からのメッセージ */}
              <div style={{
                background: '#f9fafb',
                borderLeft: '3px solid #10b981',
                padding: '20px',
                borderRadius: '4px'
              }}>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#666', 
                  lineHeight: '1.7', 
                  fontStyle: 'italic' 
                }}>
                  「私はこれまでデング熱をはじめとする感染症の研究に長年携わってきました。
                  いままでの知見と経験を活かし、当地にお住まいの日本人の皆様が安心して暮
                  らせるよう、顧問として運営をサポートしています。」
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 大分大学連携 */}
        <div style={{
          background: '#ecfdf5',
          border: '2px solid #10b981',
          borderRadius: '12px',
          padding: '40px',
          marginTop: '60px',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            color: '#10b981', 
            marginBottom: '25px' 
          }}>
            大分大学連携
          </h3>
          <h4 style={{ 
            fontSize: '16px', 
            color: '#666', 
            marginBottom: '30px' 
          }}>
            学術コンサルティング制度適用事業
          </h4>
          <p style={{ 
            fontSize: '15px', 
            color: '#333', 
            lineHeight: '1.8', 
            maxWidth: '800px', 
            margin: '0 auto' 
          }}>
            当社は、<span style={{ color: '#10b981', fontWeight: 'bold' }}>大分大学による学術コンサルティング制度</span>の適用事業として、<br/>
            医療顧問による助言体制を整え、提供サービスの品質向上と<br/>
            安定的な運用を継続的に推進しています。
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedicalAdvisor;