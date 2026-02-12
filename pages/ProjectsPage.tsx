
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import AnimateOnScroll from '../components/AnimateOnScroll';

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-aura-black/80 backdrop-blur-sm"></div>
      <div
        className="relative bg-aura-beige max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-aura-black text-aura-beige flex items-center justify-center hover:bg-aura-accent transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="aspect-[16/10] overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-8 md:p-12">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-widest text-aura-accent font-bold">{project.category}</span>
            {project.year && <span className="text-aura-accent font-bold italic">{project.year}</span>}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{project.title}</h2>
          {project.description && (
            <p className="text-aura-black/70 leading-relaxed mb-8">{project.description}</p>
          )}
          {project.tech && project.tech.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 bg-aura-black text-aura-beige text-xs font-bold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-aura-black text-aura-beige text-xs font-bold uppercase tracking-widest hover:bg-aura-accent transition-all duration-300"
            >
              Visit Live Site →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const categories = ['All', 'E-commerce', 'Web Application'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-12">Recent Works.</h1>

          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-aura-black/5 pb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-widest font-bold transition-all ${
                  activeCategory === cat ? 'text-aura-accent underline underline-offset-8' : 'text-aura-black/40 hover:text-aura-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {filteredProjects.map((p, index) => (
            <AnimateOnScroll key={p.id} delay={index * 100}>
              <div
                className="group cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                <div className="aspect-[16/10] overflow-hidden mb-8 bg-aura-beige relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-aura-black/0 group-hover:bg-aura-black/20 transition-all duration-500 flex items-center justify-center">
                    <span className="text-aura-beige text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Project</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif font-bold">{p.title}</h3>
                    <p className="text-aura-black/40 text-sm mt-1 uppercase tracking-widest font-bold">{p.category}</p>
                  </div>
                  <div className="text-aura-accent font-bold italic">{p.year || new Date().getFullYear()}</div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default ProjectsPage;
