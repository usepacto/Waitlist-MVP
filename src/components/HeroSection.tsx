'use client';

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeroSection(): React.ReactElement {
  const router = useRouter();

  const handleSurveyClick = () => {
    router.push('/survey');
  };

  return (
    <div className="w-[1440px] h-[1328px] pb-[325px] bg-[#fbfbfe] justify-center items-center inline-flex overflow-hidden">
      <div className="grow shrink basis-0 self-stretch px-24 pt-24 bg-gradient-to-b from-[#fbfbfe] via-[#f0f0ff] to-[#DAD9F1] flex-col justify-start items-center gap-32 inline-flex">
        <div className="self-stretch h-[907px] flex-col justify-start items-center gap-[60px] flex">
          <div className="self-stretch h-[322px] flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[247px] flex-col justify-start items-center gap-3 flex">
              <div className="self-stretch text-center text-[#303030] text-8xl font-bold font-sans leading-[96px]">
                The easiest way to manage money.
              </div>
              <div className="text-[#616161] text-4xl font-normal font-sans leading-[43.20px]">
                Stay in control of your finances because we make it easy.
              </div>
            </div>
            <button
              onClick={handleSurveyClick}
              className="px-7 py-4 bg-[#7773e1] rounded-2xl justify-center items-center inline-flex hover:bg-[#7773e1]/90 transition-colors"
            >
              <div className="text-[#fbfbfe] text-base font-medium font-sans leading-tight">
                Join the waitlist
              </div>
            </button>
          </div>
          <div className="self-stretch h-[525px] px-40 flex-col justify-start items-center gap-2.5 flex">
            <Image
              src="/HeroImage.svg"
              alt="Hero Image"
              width={1024}
              height={640}
              className="w-[1024px] h-[640px] rounded-xl shadow-[0px_50px_50px_0px_rgba(0,0,0,0.03)] border border-[#e2e2e2]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}