'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section className="pt-24 pb-16" id="projects">
      {/* Section Heading - Same style as About */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white">Projects</h2>
      </motion.div>

      {/* Future project content will go here */}
    </section>
  );
};
