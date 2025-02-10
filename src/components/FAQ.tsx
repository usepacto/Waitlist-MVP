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
    <div className="h-[617px] px-16 py-12 bg-[#fbfbfe] justify-start items-start gap-10 inline-flex overflow-hidden">
      {/* Title Section */}
      <div className="w-[415px] py-[18px] flex-col justify-center items-start gap-3 inline-flex">
        <div className="text-[#303030] text-4xl font-bold font-['Geist'] leading-[43.20px]">
          Frequently asked questions
        </div>
        <div className="text-[#303030] text-2xl font-normal font-['Geist'] leading-[28.80px]">
          Have questions or need some Help?
        </div>
      </div>

      {/* FAQ Items Section */}
      <div className="w-[866px] flex-col justify-start items-start gap-3 inline-flex">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="self-stretch px-4 py-[18px] border-b border-[#e2e2e2] flex-col justify-start items-start gap-2 flex cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 text-[#303030] text-xl font-bold font-['Geist'] leading-normal">
                {item.question}
              </div>
              <div className="w-5 h-5 relative overflow-hidden">
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
              className={`self-stretch justify-center items-center transition-all duration-300 ${
                openIndex === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
              }`}
            >
              <div className="grow shrink basis-0 text-[#8b8b8b] text-base font-normal font-['Geist'] leading-tight">
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