export default function Reasons() {
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-15">
        <h2 className="text-4xl text-emerald-500 text-center mb-12 font-bold">
          よつばオンラインメディカルが選ばれる理由
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-emerald-500 rounded-xl p-9 text-center transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/15"
            >
              <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center bg-emerald-500 rounded-full">
                <div className="text-white text-4xl">
                  {reason.icon}
                </div>
              </div>
              <div className="text-lg text-gray-800 font-bold mb-3 leading-tight">
                {reason.title}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}