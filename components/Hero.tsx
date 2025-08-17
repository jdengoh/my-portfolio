'use client';

import React from 'react';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TypeAnimation } from 'react-type-animation';
import { socialLinks } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export const Hero = () => {
  const { ref } = useSectionInView('Home', 0.5);
  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Main Content Container */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-12 sm:gap-0 items-center w-full max-w-5xl">
          {/* Image Container */}
          <motion.div
            className="col-span-1 sm:col-span-4 flex justify-center order-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Image
              src="/JdenGoh.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover border-[0.2rem] rounded-full border-black dark:border-white"
            />
          </motion.div>

          {/* Text Container*/}
          <div className="col-span-1 sm:col-span-8 place-self-center text-center sm:text-left order-2">
            <motion.h1
              className="mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold text-black dark:text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              Hi, I&apos;m Jden!
            </motion.h1>

            <motion.div
              className="mb-6 font-mono bg-black/5 dark:bg-white/5 rounded-md p-3 border-l-4 border-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center">
                <span className="text-green-400 mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                <TypeAnimation
                  sequence={[2000, 'Software Engineer', 2000, 'AI Enthusiast', 2000, 'Full Stack Developer', 2000, 'Builder', 2000]}
                  wrapper="span"
                  speed={30}
                  className="text-lg sm:text-xl text-[#ADB7BE]"
                  repeat={Infinity}
                  cursor={true}
                />
              </div>
            </motion.div>

            {/* Social Buttons */}
            <div className="flex gap-4 justify-center sm:justify-start">
              {socialLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: item.delay, type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded block"
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.3, type: 'spring' }}
                      >
                        <Image src={item.icon} alt={item.label} width={40} height={40} className={item.label === 'Email' ? '-translate-y-1' : ''} />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="-translate-y-3">
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="flex flex-col items-center gap-3 pb-8 landscape:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 font-light">Scroll down</span>
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};
