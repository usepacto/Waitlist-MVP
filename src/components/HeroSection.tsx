'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="h-[879.97px] px-5 flex-col justify-start items-start gap-2.5 inline-flex bg-[#240C39]">
      {/* Logo Section */}
      <div className="h-[74px] flex-col justify-center items-start gap-2.5 flex overflow-hidden">
        <div className="w-[178px] h-[74px] relative overflow-hidden">
          <div className="w-[150px] h-[74px] left-[25px] top-0 absolute">
            <Image
              src="/Pacto Logo 3.svg"
              alt="Pacto Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[1355px] justify-start items-start gap-3 inline-flex">
        {/* Text Content */}
        <div className="w-[773px] py-32 flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch text-[#c3c1f2] text-7xl font-bold font-['Geist'] leading-[86.40px]">
            Personal and smart,
          </div>
          <div className="self-stretch text-[#fcfcfc] text-5xl font-normal font-['Geist'] leading-[57.60px]">
            Manage your money and grow your wealth with Pacto
          </div>
        </div>

        {/* Image Grid */}
        <div className="justify-start items-end gap-[17.90px] flex">
          {/* Left Column */}
          <div className="pb-[68px] flex-col justify-start items-start gap-[17.90px] inline-flex">
            <div className="w-[292.55px] h-[355.04px] bg-black/10 rounded-[18.94px] relative">
              <Image
                src="/Using Phone Pictures.svg"
                alt="Feature 1"
                fill
                className="object-contain"
                sizes="(max-width: 292px) 100vw, 292px"
              />
            </div>
            <div className="w-[292.55px] h-[355.04px] bg-black/10 rounded-[18.94px] shadow-[0px_4.231431484222412px_4.231431484222412px_0px_rgba(0,0,0,0.25)] relative">
              <Image
                src="/Having Coffee Unsplash.svg"
                alt="Feature 2"
                fill
                className="object-contain"
                sizes="(max-width: 292px) 100vw, 292px"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="pt-[65px] flex-col justify-center items-start gap-[17.90px] inline-flex">
            <div className="w-[292.55px] h-[355.04px] bg-black/10 rounded-[18.94px] relative">
              <Image
                src="/Using Phone Pictures (2).svg"
                alt="Feature 3"
                fill
                className="object-contain"
                sizes="(max-width: 292px) 100vw, 292px"
              />
            </div>
            <div className="w-[292.55px] h-[355.04px] bg-black/10 rounded-[18.94px] relative">
              <Image
                src="/Using Phone Pictures (4).svg"
                alt="Feature 4"
                fill
                className="object-contain"
                sizes="(max-width: 292px) 100vw, 292px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 