"use client";

import React from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content - two rows on mobile, side by side on larger screens */}
        <div className="flex flex-col  md:flex-row md:justify-between md:items-center gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-bold text-[#00B341]!">
              Gamers Digital
            </Link>
            <p className="text-gray-600! text-sm mt-1 text-center md:text-left">
              Making fun instantly accessible
            </p>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Email */}
            <a
              href="mailto:hello@gamersdigital.com"
              className="flex items-center gap-2 text-gray-600! hover:text-[#00B341]! transition-colors"
            >
              <HiOutlineMail className="w-5 h-5" />
              <span>hello@gamersdigital.com</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-5 ">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00B341] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 text-gray-400 hover:text-[#00B341] transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-gray-400 hover:text-[#00B341] transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5 text-gray-400 hover:text-[#00B341] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright line */}
        <div className="text-center text-gray-500 text-sm border-t border-gray-100 pt-6 mt-2">
          © {currentYear} Gamers Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;