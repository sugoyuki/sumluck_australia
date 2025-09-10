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
    <div className="text-center -my-5 ml-11">
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5 L20 30 M12 22 L20 30 L28 22" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4"/>
      </svg>
    </div>
  );

  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 md:px-15">
        <h2 className="text-3xl md:text-4xl text-emerald-500 text-center mb-15 font-bold">
          初めての方でも簡単！オンライン診療の流れ
        </h2>
        
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex items-start gap-8">
                <div className="bg-emerald-500 text-white rounded-full w-22 h-22 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  <div className="text-center">
                    <div className="text-xs">STEP</div>
                    <div className="text-2xl font-bold">{step.number}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-emerald-500 mb-4 font-bold">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
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