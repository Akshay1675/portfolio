import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id='projects' className="py-16 text-black bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isReversed={index % 2 !== 0} // Alternate layout based on index
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
