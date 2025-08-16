'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Highlight } from '@/components/ui/hero-highlight';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { useSectionInView } from '@/lib/hooks';

export const About = () => {
  const { ref } = useSectionInView('About', 0.7);
  return (
    <section className="py-16" id="about">
      <motion.div
        ref={ref}
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* About Me - Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white">About Me</h2>
      </motion.div>

      {/* About Me - Content */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white dark:bg-transparent p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50 dark:hover:bg-white/2 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="text-gray-700 dark:text-gray-300 text-lg mb-6 lg:text-xl leading-relaxed">
            Final-year Computer Science student with hands-on experience developing production-ready backend systems and integrating AI capabilities into
            scalable services. I specialize in building robust API architectures with advanced AI orchestration frameworks like Semantic Kernel and LangGraph,
            creating intelligent systems that bridge cutting-edge AI agents with practical, deployable applications.
          </div>
          <div className="text-gray-700 dark:text-gray-300 text-lg lg:text-xl leading-relaxed">
            I am currently an{' '}
            <PointerHighlight pointerClassName="text-purple-400 opacity-80" containerClassName="inline-block">
              <span>
                <b>AI and Full-Stack Developer Intern</b>
              </span>
            </PointerHighlight>{' '}
            at{' '}
            <Highlight>
              <b>Synapxe</b>
            </Highlight>{' '}
            since January 2025, developing AI-driven healthcare solutions that enhances accessibility to health-related resources and information.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
