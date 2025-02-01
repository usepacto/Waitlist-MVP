'use client';

import React from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Spend Confidently',
    description: "Once you’ve set your budget, Pacto does the heavy lifting.",
    icon: '/Feature0.svg',
  },
  {
    title: 'Easy Budget Creation.',
    description: 'Set up a highly personalized spending plan in a few clicks.',
    icon: '/Feature1.svg',
  },
  {
    title: 'Automated Budgeting',
    description:
      'Set aside funds in advance for your monthly bills and subscription fees.',
    icon: '/Feature2.svg',
  },
];

const FeatureShowcase: React.FC = () => {
  return (
    <section className="w-full bg-[#fbfbfe] flex justify-center items-center">
      <div
        className={`
          w-full flex flex-col gap-10
          /* PHONE */
          h-[706px] px-[15px] py-10
          /* MEDIUM */
          md:h-[415px] md:px-6 md:py-10
          /* LARGE */
          lg:h-[641px] lg:py-20
          md:max-w-[1440px]
        `}
      >
        {/* Header Section */}
        <div
          className={`
            self-stretch flex flex-col gap-4
            /* PHONE */
            h-[115px] items-center justify-start
            /* MEDIUM */
            md:h-[71px] md:gap-9 md:justify-center md:items-center
            /* LARGE */
            lg:h-[107px] lg:px-20 lg:justify-center lg:items-center
          `}
        >
          <h2
            className={`
              self-stretch text-center text-[#303030] font-['Geist']
              /* PHONE */
              text-xl font-medium leading-normal
              /* MEDIUM */
              md:text-xl md:font-semibold
              /* LARGE */
              lg:text-4xl lg:font-bold lg:leading-[43.20px]
            `}
          >
            Pacto is built to give you control over your money
          </h2>
          <p className="self-stretch text-center">
            <span
              className={`
                text-[#616161] font-['Geist']
                /* PHONE */
                text-sm font-light leading-[16.80px]
                /* MEDIUM */
                md:text-base md:leading-tight
                /* LARGE */
                lg:text-xl lg:font-normal lg:leading-normal
              `}
            >
              Managing money should be effortlessly easy easy, all you should need to do is{' '}
            </span>
            <span
              className={`
                text-[#303030]/90 font-['Geist']
                /* PHONE */
                text-sm font-light leading-[16.80px]
                /* MEDIUM */
                md:text-base md:leading-tight
                /* LARGE */
                lg:text-xl lg:font-normal lg:leading-normal
              `}
            >
              think about what you want and plan for it.
            </span>
          </p>
        </div>

        {/* Features Section */}
        <div
          className={`
            self-stretch flex flex-col gap-5
            /* PHONE */
            h-[471px] justify-start items-start
            /* MEDIUM */
            md:h-[224px] md:gap-16 md:items-center
            /* LARGE */
            lg:h-[334px] lg:py-10 lg:gap-7 lg:items-center
          `}
        >
          <h3
            className={`
              self-stretch text-center text-[#303030] font-['Geist']
              /* PHONE */
              text-xl font-semibold leading-normal
              /* LARGE */
              lg:text-4xl lg:font-bold lg:leading-[43.20px] mx-auto
            `}
          >
            Features
          </h3>
          <div
            className={`
              self-stretch flex
              /* PHONE: vertical column */
              flex-col h-[427px] gap-2 justify-start items-start
              /* MEDIUM: row layout */
              md:flex-row md:h-auto md:gap-4 md:justify-start md:items-start
              /* LARGE: row layout */
              lg:flex-row lg:gap-7 lg:justify-start lg:items-center
            `}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                  /* PHONE */
                  inline-flex flex-col overflow-hidden
                  h-[137px] px-4 py-3 rounded-md gap-6 justify-center items-center
                  /* MEDIUM */
                  md:grow md:shrink md:basis-0 md:py-7 md:rounded-xl md:gap-5 md:justify-start md:items-center
                  /* LARGE */
                  lg:w-[450px] lg:px-4 lg:py-3 lg:rounded-[20px] lg:gap-1 lg:justify-start lg:items-center
                `}
              >
                <div
                  className={`
                    relative overflow-hidden
                    w-[50px] h-[50px]
                    md:w-[70px] md:h-[70px]
                    lg:w-[120px] lg:h-[120px]
                  `}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div
                  className={`
                    self-stretch flex flex-col
                    /* PHONE */
                    h-[56px] gap-1 justify-start items-center
                    /* MEDIUM */
                    md:h-[61px] md:gap-1 md:justify-center md:items-center
                    /* LARGE */
                    lg:h-[106px] lg:gap-0 justify-start lg:items-start
                  `}
                >
                  <h4
                    className={`
                      self-stretch text-center text-[#303030] font-['Geist']
                      /* PHONE */
                      text-lg font-medium underline leading-snug
                      /* LARGE */
                      lg:text-2xl lg:font-medium lg:underline lg:leading-loose
                    `}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className={`
                      self-stretch text-center text-[#616161] font-['Geist']
                      /* PHONE */
                      text-sm font-light leading-[16.80px]
                      /* MEDIUM */
                      md:text-base md:font-normal md:leading-tight
                      /* LARGE */
                      lg:text-xl lg:font-normal lg:leading-normal
                    `}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;