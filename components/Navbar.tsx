'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import ModeToggle from './ui/mode-toggle';

export const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.nav
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[999] w-full max-w-7xl px-2 sm:px-4 py-2 sm:py-4 
                 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md 
                 border-b border-gray-200/20 dark:border-gray-700/20 
                 shadow-lg shadow-black/5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {/* Container for left/right layout */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-2 sm:gap-0">
        {/* Left: Navigation Links */}
        <ul className="flex items-center flex-wrap justify-center sm:justify-start gap-1 sm:gap-2 text-[0.8rem] sm:text-[0.9rem] font-medium text-gray-500 dark:text-gray-400">
          {links.map(link => (
            <motion.li className="relative" key={link.hash} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <Link
                className={clsx('px-2 py-1 sm:px-3 sm:py-2 hover:text-gray-950 transition dark:hover:text-gray-300 relative whitespace-nowrap', {
                  'text-gray-950 dark:text-gray-200': activeSection === link.name
                })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* View CV Button - Matching navbar style */}
          <motion.a
            href="/JdenGoh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 sm:px-3 sm:py-2 text-[0.8rem] sm:text-[0.9rem] font-medium 
               text-gray-500 dark:text-gray-400 hover:text-gray-950 dark:hover:text-gray-300
               bg-transparent border border-gray-300 dark:border-gray-600 rounded-full
               transition whitespace-nowrap"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            View CV
          </motion.a>

          {/* Mode Toggle */}
          <ModeToggle />
        </div>
      </div>
    </motion.nav>
  );
};
