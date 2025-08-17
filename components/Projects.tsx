'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.3);

  return (
    <section ref={ref} className="py-8" id="projects">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white">Projects</h2>
      </motion.div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto space-y-8 p-4">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              transition={{
                duration: 0.1,
                ease: 'linear',
                type: 'tween'
              }}
              className="
                bg-gray-50 relative group
                dark:bg-black dark:border-white/[0.2]
                hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] 
                border-black/[0.1] w-full rounded-xl border
                p-6 transition-all duration-300
                flex flex-col lg:flex-row h-auto gap-6
              "
            >
              {/* Project Image - Left Side */}
              <div className="lg:w-2/5 relative w-full h-64 lg:h-80 overflow-hidden rounded-xl">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content - Right Side */}
              <div className="lg:w-3/5 w-full flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Project Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-neutral-600 dark:text-white">{project.title}</h3>

                  {/* Project Description */}
                  <p className="text-neutral-500 text-base lg:text-lg max-w-full dark:text-neutral-300 leading-relaxed">{project.description}</p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + techIndex * 0.05
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        {typeof tech === 'string' ? tech : tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="mt-8 flex justify-between items-center"
                >
                  {/* Live Demo Button */}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-6 py-3 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 flex items-center gap-2"
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}

                  {/* GitHub Button */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-6 py-3 rounded-lg bg-white dark:bg-black text-black dark:text-white text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg ml-auto"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
