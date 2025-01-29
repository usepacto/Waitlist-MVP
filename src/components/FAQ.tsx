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

  return (
    <section className="w-full px-4 sm:px-6 md:px-[142px] py-12 bg-[#fafcfe]">
      <div className="max-w-[1156px] mx-auto">
        <h2 className="text-center text-[#303030] text-3xl sm:text-4xl font-bold leading-[43.20px] mb-12">
          Frequently asked questions
        </h2>
        <div className="flex flex-col justify-start items-start w-full">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="w-full px-4 py-[18px] border-b border-[#e2e2e2] flex flex-col justify-start items-start gap-2"
            >
              <button 
                className="w-full flex justify-between items-center gap-2 cursor-pointer text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-[#303030] text-lg sm:text-xl font-bold leading-normal">
                  {item.question}
                </h3>
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-[#303030] text-xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="w-full">
                  <p className="text-[#8b8b8b] text-sm sm:text-base font-normal leading-tight">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 