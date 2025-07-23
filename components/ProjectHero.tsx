"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '../types/product';

interface ProjectHeroProps {
  product: Product;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ product }) => {
  // Animation variants for slide-up effect
  const slideUpVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="w-full relative pb-[60px] lg:pb-[80px]">
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px] 2xl:min-h-[700px] hero-diagonal-cut">
        {/* Mobile: Image First with diagonal cut */}
        <div className="lg:hidden relative">
          <div className="relative h-96">
            <Image
              src={product.posterImage}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
            {/* Diagonal cut overlay */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
              <svg className="relative block w-full h-[30px]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,120 L1200,0 L1200,120 Z" className="fill-[#00B341]"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content with Green Background */}
        <div className="relative flex-1 lg:flex-[2] bg-[#00B341] overflow-hidden">
          {/* Diagonal Element */}
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-black/10 to-transparent transform skew-y-1"></div>
          
          <div className="relative z-10 pt-20 md:pt-30 lg:pt-40 xl:pt-48 pb-12 lg:pb-20 xl:pb-24 text-white h-full flex flex-col justify-center">
            <div className="w-full max-w-[740px] mx-auto px-4 lg:px-8">
               <motion.h1 
                 className="text-7xl md:text-8xl font-black leading-none mb-10 md:mb-16"
                 variants={slideUpVariants}
                 initial="hidden"
                 animate="visible"
                 transition={{
                   duration: 0.5,
                   ease: "easeOut",
                 }}
               >
                {product.title}
              </motion.h1>
              {/* Description paragraph is hidden as requested */}
            </div>
          </div>
        </div>

        {/* Desktop: Image on Right */}
        <div className="hidden lg:block flex-1 bg-white relative">
          <Image
            src={product.posterImage}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectHero; 