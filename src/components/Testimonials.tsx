'use client';

import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#181564] text-5xl font-bold text-center mb-16">
          What our early users are saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[#F8F8FF] p-8 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#EBDCF8]" />
              <div>
                <h3 className="text-[#181564] font-semibold">Sarah Johnson</h3>
                <p className="text-[#616161] text-sm">Freelance Designer</p>
              </div>
            </div>
            <p className="text-[#616161] leading-relaxed">
              "Finally, a financial tool that doesn't make me feel overwhelmed! The automated budgeting has been a game-changer for my freelance income."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#F8F8FF] p-8 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#EBDCF8]" />
              <div>
                <h3 className="text-[#181564] font-semibold">Michael Chen</h3>
                <p className="text-[#616161] text-sm">Small Business Owner</p>
              </div>
            </div>
            <p className="text-[#616161] leading-relaxed">
              "The insights I get from this platform have helped me make better financial decisions for both my business and personal life."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#F8F8FF] p-8 rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#EBDCF8]" />
              <div>
                <h3 className="text-[#181564] font-semibold">Emma Thompson</h3>
                <p className="text-[#616161] text-sm">Project Manager</p>
              </div>
            </div>
            <p className="text-[#616161] leading-relaxed">
              "I love how it simplifies complex financial planning. The goal tracking feature keeps me motivated and on track with my savings."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 