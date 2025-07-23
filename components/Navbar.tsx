"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className="container-fluid px-12">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/#founder" 
              className="nav-link font-black text-sm transition-all duration-300"
              onClick={handleLinkClick}
            >
              MEET THE FOUNDER
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block logo-hover-effect" onClick={handleLinkClick}>
              <Image
                src="/logo.svg"
                alt="Gamers Digital Logo"
                width={80}
                height={24}
                className="object-contain transition-all duration-300 brightness-0 invert"
                priority
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-8">
            <Link 
              href="/#projects" 
              className="nav-link font-black text-sm transition-all duration-300"
              onClick={handleLinkClick}
            >
              PROJECTS
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <Link href="/" className="relative block logo-hover-effect-mobile" onClick={handleLinkClick}>
              <Image
                src="/logo.svg"
                alt="Gamers Digital Logo"
                width={120}
                height={36}
                className="object-contain transition-all duration-300 brightness-0 invert"
                priority
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none transition-all duration-300 text-white hover:text-gray-200 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="pb-4 bg-black/80 backdrop-blur-sm rounded-b-lg transition-all duration-300">
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <Link 
                  href="/#founder" 
                  className="nav-link font-black text-sm transition-all duration-300"
                  onClick={handleLinkClick}
                >
                  MEET THE FOUNDER
                </Link>
                <Link 
                  href="/#projects" 
                  className="nav-link font-black text-sm transition-all duration-300"
                  onClick={handleLinkClick}
                >
                  PROJECTS
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 