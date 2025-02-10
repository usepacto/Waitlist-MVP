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
    answer: "Pacto is for anyone who wants to take control of their finances. Whether you're just starting your financial journey or looking to optimize your spending, we're here to help."
  },
  {
    question: "How do I get started with Pacto?",
    answer: "Join our waitlist with your email, Take the survey, wait for your invitation."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className={`
        w-full bg-transparent
        /* PHONE */
        px-4 py-8
        /* TABLET */
        sm:px-6 sm:py-10
        /* DESKTOP */
        md:px-[142px] md:py-12
      `}
    >
      {/* Main Container */}
      <div
        className={`
          mx-auto w-full flex flex-col justify-start items-start
          /* DESKTOP */
          max-w-[1156px]
        `}
      >
        {/* Title */}
        <h2
          className={`
            w-full text-center text-[#303030] font-sans
            /* PHONE */
            text-2xl font-bold leading-[33.60px] mb-8
            /* TABLET */
            sm:text-3xl sm:leading-[38.40px] sm:mb-10
            /* DESKTOP */
            md:text-4xl md:leading-[43.20px] md:mb-12
          `}
        >
          Frequently asked questions
        </h2>

        {/* FAQ Items Container */}
        <div className="flex flex-col justify-start items-start w-full">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`
                w-full flex flex-col justify-start items-start border-b border-[#e2e2e2]
                /* PHONE */
                px-3 py-4 gap-2
                /* TABLET */
                sm:px-4 sm:py-[18px]
              `}
            >
              {/* Question Button */}
              <button
                className={`
                  w-full flex justify-between items-center cursor-pointer text-left
                  /* PHONE */
                  gap-2
                `}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {/* Question Text */}
                <h3
                  className={`
                    text-[#303030] font-sans
                    /* PHONE */
                    text-base font-bold leading-normal
                    /* TABLET */
                    sm:text-lg
                    /* DESKTOP */
                    md:text-xl
                  `}
                >
                  {item.question}
                </h3>

                {/* Toggle Icon */}
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-[#303030] text-xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="w-full">
                  <p
                    className={`
                      text-[#8b8b8b] font-sans
                      /* PHONE */
                      text-sm font-normal leading-tight
                      /* TABLET */
                      sm:text-base
                    `}
                  >
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