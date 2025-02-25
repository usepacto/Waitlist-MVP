'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Pacto?",
    answer: "Pacto helps you manage your money wisely by locking funds for specific needs and releasing them as planned. It's like having a personal financial assistant that ensures you spend with intention."
  },
  {
    question: "Is my money safe with Pacto?",
    answer: "100%. We don't touch your cash - we just tell it where to go. Your money, your accounts, your instructions."
  },
  {
    question: "How does Pacto work?",
    answer: "Set your spending plan, lock your funds, and we handle the rest. Pacto auto-distributes funds, allocates flexibly, and ensures you never miss a bill, helping you stay on track without manual effort."
  },
  {
    question: "Who is Pacto for?",
    answer: "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
  },
  {
    question: "How do I get started with Pacto?",
    answer: "Join our waitlist with your email, Take the survey, wait for your invitation."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto px-6 md:px-16 py-[60px] md:py-[120px] bg-[#fbfbfe] flex flex-col md:flex-row justify-start items-start gap-10 md:gap-20">
      {/* Title Section */}
      <div className="w-full md:w-[415px] flex flex-col justify-center items-center md:items-start gap-3">
        <div className="text-[#303030] text-2xl sm:text-3xl md:text-4xl font-bold font-sans leading-tight text-center md:text-left">
          Frequently asked questions
        </div>
        <div className="text-[#303030] text-lg sm:text-xl md:text-2xl font-normal font-sans leading-normal text-center md:text-left">
          Have questions or need some Help?
        </div>
      </div>

      {/* FAQ Items Section */}
      <div className="w-full md:w-[866px] flex flex-col justify-start items-start gap-3">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="w-full px-4 py-[18px] border-b border-[#e2e2e2] flex flex-col justify-start items-start gap-2 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="w-full flex justify-between items-center gap-2">
              <div className="grow text-[#303030] text-base sm:text-lg md:text-xl font-bold font-sans leading-normal">
                {item.question}
              </div>
              <div className="w-5 h-5 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="block w-4 h-0.5 bg-[#303030]" />
                  <span 
                    className={`absolute block w-0.5 h-4 bg-[#303030] transition-all duration-300 ${
                      openIndex === index ? 'opacity-0 rotate-90' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
            <div 
              className={`w-full transition-all duration-300 ${
                openIndex === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
              }`}
            >
              <div className="text-[#8b8b8b] text-sm sm:text-base md:text-lg font-normal font-sans leading-normal">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 
