import React from 'react';

const ConsultationFlow: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'ご予約',
      description: 'お電話もしくはLINEでご予約いただけます'
    },
    {
      number: 2,
      title: '医師の決定',
      description: 'ご希望の日時を伺った上で症状から最適な医師を予約。\n医師の決定をその日時に合わせて通訳士をアサインします'
    },
    {
      number: 3,
      title: 'オンライン診察',
      description: '通訳士が立ち合いし、サポート致します'
    },
    {
      number: 4,
      title: '診察後',
      description: '診察後は処方箋をお渡しし、\n費用精算と保険金請求のサポートをいたします'
    },
    {
      number: 5,
      title: 'お薬の受け取り',
      description: 'ご自身でお薬をご購入いただき、\n保険会社への費用請求をサポートします'
    }
  ];

  const ArrowIcon = () => (
    <div style={{ textAlign: 'center', margin: '-20px 0 -20px 45px' }}>
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M20 5 L20 30 M12 22 L20 30 L28 22" 
          stroke="#10b981" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.4"
        />
      </svg>
    </div>
  );

  return (
    <section style={{ padding: '80px 0', background: '#ecfdf5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 60px' }}>
        <h2 style={{ 
          fontSize: '34px', 
          color: '#10b981', 
          textAlign: 'center', 
          marginBottom: '60px' 
        }}>
          初めての方でも簡単！オンライン診療の流れ
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '30px' }}>
                <div style={{
                  background: '#10b981',
                  color: 'white',
                  borderRadius: '50%',
                  width: '90px',
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  flexShrink: 0
                }}>
                  <div>
                    <div style={{ fontSize: '12px' }}>STEP</div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{step.number}</div>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontSize: '24px', 
                    color: '#10b981', 
                    marginBottom: '15px' 
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.8', 
                    fontSize: '16px',
                    whiteSpace: 'pre-line'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && <ArrowIcon />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationFlow;