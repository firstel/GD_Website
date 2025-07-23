'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }
  
  return (
    <div className="w-full py-16 overflow-hidden mb-10 md:mb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#00B341] text-center mb-6 md:mb-12 tracking-wider">
          GALLERY
        </h2>
        
        <div className="gallery-container relative">
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="gallery-swiper h-44 sm:h-56 md:h-64 lg:h-80"
          >
            {images.map((image, index) => (
              <SwiperSlide 
                key={index} 
                className="gallery-slide"
              >
                {/* Green card container - 30% smaller */}
                <div className="w-48 sm:w-56 md:w-64 lg:w-96 xl:w-[560px] h-44 sm:h-56 md:h-64 lg:h-80 bg-[#00B341] rounded-lg shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-[1.02] mx-auto">
                  {/* Image container - 80% width, 90% height */}
                  <div className="relative rounded-lg overflow-hidden shadow-lg w-4/5 h-[90%]">
                    <Image
                      src={image}
                      alt={`${title} gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 384px, 560px"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
} 