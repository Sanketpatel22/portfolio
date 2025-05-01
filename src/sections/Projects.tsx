"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Prasang",
    description: "A comprehensive web platform offering various services including event management, digital marketing, and more.",
    image: "/placeholder-project1.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    liveLink: "https://theprasang.com",
    githubLink: ""
  },
  {
    id: 2,
    title: "Nexide Pharma",
    description: "A pharmaceutical company website with product catalog, company information, and contact features.",
    image: "/placeholder-project2.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://nexidepharma.vercel.app",
    githubLink: ""
  },
  // Add more projects as needed
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project was a unique challenge and learning experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg border border-border hover:border-primary/50 transition-colors">
                <div className="relative h-64 w-full bg-muted flex items-center justify-center">
                  <span className="text-foreground/30">Project Image</span>
                  {/* Uncomment when you have project images */}
                  {/* <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  /> */}
                </div>
                
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-6 text-white text-center">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={activeProject === project.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex flex-wrap justify-center mb-6 gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 text-xs rounded-full bg-primary/20 border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-primary hover:bg-primary/90 rounded-full transition-colors"
                        >
                          <FiExternalLink size={18} />
                        </a>
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                          >
                            <FiGithub size={18} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-6 bg-background">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 line-clamp-2">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-border hover:border-primary hover:text-primary rounded-md transition-colors"
          >
            <FiGithub className="mr-2" /> More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 