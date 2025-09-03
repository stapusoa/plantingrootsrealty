import React, { useState } from 'react';
import { Badge } from "@/components/badge/badge";
import { Button } from "@/components/button";
import type { PageType } from "@/components/navigation/types";
import imgImgOurStory1 from "@/assets/img1.jpg";

function ModernCarousel({ children, currentSlide, totalSlides, onNext, onPrev, onSlideSelect }: {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSlideSelect: (index: number) => void;
}) {
  return (
    <div className="relative h-[560px] rounded-[24px] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl group">
      {/* Main Content */}
      <div className="relative h-full">
        {children}
      </div>

      {/* Modern Controls */}
      <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={onPrev}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group/btn"
        >
          <svg className="w-5 h-5 text-gray-700 transform group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button 
          onClick={onNext}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group/btn"
        >
          <svg className="w-5 h-5 text-gray-700 transform group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Modern Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideSelect(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-3 bg-white shadow-lg' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function OurStorySection({ onNavigate }: { onNavigate: (page: PageType) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[80px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="max-w-inherit relative size-full">
              <div className="box-border content-stretch flex flex-row gap-12 items-start justify-start max-w-inherit px-0 py-2.5 relative w-full">
                {/* Content Side */}
                <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0 animate-fade-in-left">
                  <div className="relative size-full flex flex-col justify-center space-y-8">
                    {/* About Badge */}
                    <Badge variant="filled" color="secondary" className="w-fit bg-[#45a9a7]/10 text-[#45a9a7] border-0">
                      About
                    </Badge>
                    
                    {/* Heading */}
                    <h2 className="font-['Merriweather:Bold',_sans-serif] text-[32px] text-[#1a1a1a] leading-tight">
                      Learn Our Story
                    </h2>

                    {/* Story Content */}
                    <div className="space-y-6 text-[#606060] text-[16px] leading-relaxed">
                      <p>
                        At the heart of our work is a commitment to putting families first. With nearly six years of experience in real estate, I strive to offer more than just transactions—I aim to provide genuine care, guidance, and support to every client.
                      </p>
                      <p>
                        From starting in the front office to becoming an agent and now running my own practice, my journey has given me a deep understanding of the industry. I am dedicated to upholding kindness, compassion, service, and honesty in every interaction, ensuring my clients feel valued and empowered as they navigate buying, building, or selling their homes.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={() => onNavigate('our-story')}
                      className="w-fit bg-gradient-to-r from-[#5e4684] to-[#7a5ba8] hover:from-[#4a3570] hover:to-[#65487c] text-white px-8 py-3 rounded-xl font-semibold"
                    >
                      BE A PART OF OUR STORY
                    </Button>
                  </div>
                </div>

                {/* Image Carousel Side */}
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 animate-fade-in-right">
                  <ModernCarousel
                    currentSlide={currentSlide}
                    totalSlides={totalSlides}
                    onNext={nextSlide}
                    onPrev={prevSlide}
                    onSlideSelect={setCurrentSlide}
                  >
                    <div
                      className="absolute inset-0 bg-center bg-cover bg-no-repeat rounded-[24px] transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), url('${imgImgOurStory1}')`,
                      }}
                    />
                  </ModernCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}