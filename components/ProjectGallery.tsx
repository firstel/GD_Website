"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
          {/* Custom Navigation Arrows */}
          <div className="gallery-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#00B341] hover:bg-[#009935] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 shadow-lg">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="gallery-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#00B341] hover:bg-[#009935] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 shadow-lg">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="gallery-swiper h-44 sm:h-56 md:h-64 lg:h-80"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="gallery-slide">
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
