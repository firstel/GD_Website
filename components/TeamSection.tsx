import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: "Scott Zerby",
    title: "Gamers Digital",
    description: "with decades of experience in the video game business, and a deep network of relationships. This is the second company Scott has started, previously working with industry leaders including GameStop, Target, and Best Buy. We are a reliable source for consistently strong casual entertainment products for every aspect of the industry from downloadable computer games to home console accessories, and even mobile product.",
    imageUrl: "/founder.png"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section id="founder" className="w-full py-16 md:py-20 bg-white mt-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
        <h1 className="font-bold text-[#00B341] leading-none text-4xl md:text-5xl lg:text-6xl">
         MEET THE FOUNDER
        </h1>
        </div>

        {/* Team Members Grid */}
        <div className="flex flex-col items-center gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 