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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-15">
        <h2 className="text-4xl text-emerald-500 text-center mb-5 font-bold">
          皆様にご利用いただいています！
        </h2>
        <p className="text-base text-gray-600 text-center mb-15">
          オーストラリアで日本語医療サポートが必要なすべての方へ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 text-4xl">
                {user.icon}
              </div>
              <div>
                <h3 className="text-xl text-emerald-500 mb-3 font-bold">
                  {user.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {user.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-emerald-50 border-2 border-emerald-500 rounded-full py-4 px-10">
            <p className="text-base text-emerald-500 font-bold">
              🌏 オーストラリア全土から診療可能です
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;