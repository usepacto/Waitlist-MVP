'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ScrollableCards = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const offsetTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;

      // How far we've scrolled into the section
      const scrolledIntoSection = (scrollY + viewportHeight) - offsetTop;

      // Normalize progress [0..1]
      let progress = scrolledIntoSection / sectionHeight;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // Adjust the thresholds for a slower reveal
      let newIndex = 0;
      if (progress < 0.2) {
        newIndex = 0;
      } else if (progress < 0.5) {
        newIndex = 1;
      } else if (progress < 0.8) {
        newIndex = 2;
      } else {
        newIndex = 2;
      }

      if (newIndex !== activeCardIndex) {
        setActiveCardIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeCardIndex]);

  return (
    // You can adjust [250vh] if you want more or less scrolling
    <div ref={sectionRef} className="h-[250vh] relative">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="mx-auto px-5 flex justify-start items-start">
          
          {/* Left Text */}
          <div className="w-[773px] py-32 flex flex-col gap-2">
            <div className="text-[#181564] text-[64px] font-bold leading-[77px]">
              It is not easy, at all
            </div>
            <div className="text-[#616161] text-2xl leading-loose">
              You remember when you said "I wish I had a second chance
              with all the money I wasted!". We can't bring that money back,
              but we can help you stop wasting it.
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative w-[600px] h-[400px] overflow-hidden">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="absolute w-full h-full transition-all duration-700 ease-in-out bg-white"
                style={{
                  transform:
                    index <= activeCardIndex
                      ? 'translateY(0%)'
                      : 'translateY(100%)',
                  opacity: index <= activeCardIndex ? 1 : 0,
                  zIndex: index,
                }}
              >
                <Image
                  src={`/Twittercard${index + 1}.svg`}
                  alt={`Card ${index + 1}`}
                  width={600}
                  height={400}
                  style={{ objectFit: 'contain' }}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScrollableCards;