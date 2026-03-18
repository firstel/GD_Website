'use client';

import React from 'react';
import { Calendar, Users, Gamepad2, Monitor, Zap, Building2, Eye, BookOpen, HardDrive, Shield } from 'lucide-react';

interface GameDetailsProps {
  details: any;
}

const GameDetails: React.FC<GameDetailsProps> = ({ details }) => {
  const detailsArray = [
    { label: 'Release date:', value: details.releaseDate, icon: Calendar },
    { label: 'Players:', value: details.players, icon: Users },
    { label: 'Genre:', value: details.genre, icon: Gamepad2 },
    { label: 'Platform:', value: details.platform, icon: Monitor },
    { label: 'Gameplay:', value: details.gameplay, icon: Zap },
    { label: 'Publisher:', value: details.publisher, icon: Building2 },
    { label: 'Developer:', value: details.developer, icon: Eye },
    { label: 'Perspective:', value: details.perspective, icon: BookOpen },
    { label: 'Narrative:', value: details.narrative, icon: BookOpen },
    { label: 'Game file size:', value: details.fileSize, icon: HardDrive },
    { label: 'ESRB Rating:', value: details.esrbRating, icon: Shield },
  ];

  // ✅ FILTER OUT EMPTY VALUES
  const filteredDetails = detailsArray.filter(
    (detail) =>
      detail.value && String(detail.value).trim() !== ''
  );

  return (
    <section className="py-8 md:py-12 px-4 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {filteredDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div 
              key={index} 
              className="flex items-start gap-4 p-3 rounded-lg bg-[#00B341]"
            >
              <div className="mt-1 p-2 rounded">
                <Icon className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 min-w-0 text-white">
                <dt className="font-bold text-sm md:text-lg">
                  {detail.label}
                </dt>

                <dd className="text-white/85 text-sm md:text-base mt-1 break-words">
                  {detail.value}
                </dd>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GameDetails;