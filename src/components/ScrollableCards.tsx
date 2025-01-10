'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const CARDS = [
  '/Twittercard1.svg',
  '/Twittercard2.svg',
  '/Twittercard3.svg'
];

const ROTATIONS = ['10deg', '-1deg', '-10deg'];

const ScrollableCards = () => {
  const [cardPositions, setCardPositions] = useState([0, -1, -1]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY.current;
      const viewportHeight = window.innerHeight;
      
      // Calculate section position relative to viewport
      const sectionTop = rect.top + scrollY;
      const scrollInSection = scrollY - sectionTop;
      
      // Only animate cards when section is in view
      if (rect.top > viewportHeight || rect.bottom < 0) {
        lastScrollY.current = scrollY;
        return;
      }

      // Update card positions based on scroll
      setCardPositions(prevPositions => {
        const newPositions = [...prevPositions];
        
        // When scrolling up towards hero section
        if (scrollDelta < 0 && rect.top < viewportHeight * 0.5) {
          // Start retracting cards in reverse order
          for (let i = newPositions.length - 1; i >= 0; i--) {
            if (newPositions[i] > -1) {
              const scrollUnit = viewportHeight * 0.4;
              newPositions[i] = Math.max(-1, Math.min(1, newPositions[i] + (scrollDelta / scrollUnit)));
              break;
            }
          }
        }
        // When scrolling down
        else if (scrollDelta > 0) {
          // Find the next card to animate
          let activeCardIndex = -1;
          for (let i = 0; i < newPositions.length; i++) {
            if (newPositions[i] < 1) {
              activeCardIndex = i;
              break;
            }
          }
          
          if (activeCardIndex !== -1) {
            const scrollUnit = viewportHeight * 0.4;
            const newPosition = Math.max(-1, Math.min(1, newPositions[activeCardIndex] + (scrollDelta / scrollUnit)));
            newPositions[activeCardIndex] = newPosition;
            
            // Prepare next card when current is fully shown
            if (newPosition >= 1 && activeCardIndex < 2) {
              newPositions[activeCardIndex + 1] = -1;
            }
          }
        }

        return newPositions;
      });

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="h-[200vh] relative bg-[#240C39]">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="w-[1355px] mx-auto px-5 justify-start items-start inline-flex">
          {/* Text Content */}
          <div className="w-[773px] py-32 flex-col justify-center items-center gap-2 inline-flex">
            <div className="self-stretch text-[#c3c1f2] text-[64px] font-bold font-['Geist'] leading-[76.80px]">
              It is not easy, at all
            </div>
            <div className="w-[773px] text-[#fcfcfc] text-5xl font-normal font-['Geist'] leading-[57.60px]">
              We heard you and we <br/>want to help
            </div>
          </div>

          {/* Cards Container */}
          <div className="w-[682px] h-[534px] relative">
            {[0, 1, 2].map((index) => {
              const position = cardPositions[index];
              const isFullyVisible = position >= 1;
              const isTransitioning = position > -1 && position < 1;
              
              return (
                <div
                  key={index}
                  className="absolute w-full h-full transition-transform duration-0"
                  style={{
                    transform: `
                      translateY(${isFullyVisible ? '0%' : isTransitioning ? `${(1 - position) * 100}%` : '100%'})
                      rotate(${ROTATIONS[index]})
                    `,
                    opacity: isFullyVisible ? 1 : isTransitioning ? position + 1 : 0,
                    zIndex: index,
                  }}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={CARDS[index]}
                      alt={`Twitter Card ${index + 1}`}
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 682px) 100vw, 682px"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableCards;