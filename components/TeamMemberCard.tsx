import React from 'react';
import Image from 'next/image';

interface TeamMemberCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  description,
  imageUrl
}) => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl">
      {/* Left Section - Profile Image and Social */}
      <div className="relative sm:w-1/3 bg-gradient-to-br from-[#00B341] to-[#00A038]">
        {/* Profile Image Container */}
        <div className="p-8 sm:p-12 flex flex-col items-center justify-center h-full">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6">
            <div className="absolute inset-0 bg-white rounded-full p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#EFE9E2]">
                <Image
                  src={imageUrl}
                  alt={`${name} profile`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* LinkedIn Icon */}
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/scottzerby"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-md hover:scale-110 hover:shadow-lg linkedin-shake"
              aria-label="LinkedIn Profile"
            >
              <svg 
                className="w-6 h-6 text-[#0077B5]" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 p-8 sm:p-12 bg-[#EFE9E2]">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
          {name}
        </h3>
        <p className="text-xl text-[#00B341] font-semibold mb-6">
          {title}
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard; 