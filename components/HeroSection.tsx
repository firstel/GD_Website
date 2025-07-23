"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  // Animation variants for slide-up effect
  const slideUpVariants = {
    hidden: {
      opacity: 0,
      y: 40, // Reduced from 60 for more subtle movement
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6, // Slightly reduced for smoother flow
      }
    },
  };

  return (
    <section className="w-full relative pb-[60px] lg:pb-[80px]">
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px] 2xl:min-h-[700px] hero-diagonal-cut">
        {/* Mobile: Image First with diagonal cut */}
        <div className="lg:hidden relative">
          <div className="relative h-96">
            <Image
              src="/hero-desktop.jpg"
              alt="gamers digital"
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
            <motion.div 
              className="w-full max-w-[740px] mx-auto px-4 lg:px-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* "Gamers" appears first */}
              <motion.div 
                className="text-7xl md:text-8xl font-black leading-none"
                variants={slideUpVariants}
                transition={{
                  duration: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom smooth cubic-bezier
                }}
              >
                Gamers
              </motion.div>
              
              {/* "Digital" appears second */}
              <motion.div 
                className="text-7xl md:text-8xl font-black leading-none mb-10 md:mb-16"
                variants={slideUpVariants}
                transition={{
                  duration: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom smooth cubic-bezier
                }}
              >
                Digital
              </motion.div>
              
              {/* Paragraph appears third */}
              <motion.p 
                className="text-lg md:text-xl leading-snug max-w-3xl"
                variants={slideUpVariants}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom smooth cubic-bezier
                }}
              >
              As a team of experienced game creators behind dynamic, proven hits featuring engaging and colorful characters, we design casual games with one goal in mind: to make fun instantly accessible to everyone—whether they consider themselves gamers or not. Our games are easy to jump into and rewarding enough to keep players coming back. They don’t require a big time investment or special skills—just a few moments and a playful spirit. We draw inspiration from timeless, familiar mechanics that evoke the charm of classic arcades, and we bring them to life with fresh energy, vibrant worlds, and characters full of personality. At their best, casual games offer pure, low-pressure fun for everyone.              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Desktop: Image on Right */}
        <div className="hidden lg:block flex-1 bg-white relative">
          <Image
            src="/hero.jpg"
            alt="Gamers Digital Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;  
