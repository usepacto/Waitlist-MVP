'use client';

import Image from 'next/image';

const Features = () => {
  const features = [
    {
      title: "Automated Budgeting",
      description: "Let our AI create and adjust your budget based on your spending patterns and goals.",
      image: "/Feature1.svg"
    },
    {
      title: "Smart Savings",
      description: "Automatically set aside money for your goals without thinking about it.",
      image: "/Feature2.svg"
    },
    {
      title: "Intelligent Insights",
      description: "Get personalized recommendations to improve your financial health.",
      image: "/Feature3.svg"
    }
  ];

  return (
    <section id="features" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#181564] text-5xl font-bold text-center mb-16">
          Features that make money management easy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-64 h-64 mb-8 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-[#181564] text-2xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-[#616161] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 