import React from 'react';
import { motion } from 'framer-motion';
import { Github, Link } from 'lucide-react';

const ProjectCard = ({ project, isReversed }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`flex flex-col md:flex-row ${
        isReversed ? 'md:flex-row-reverse' : ''
      } items-center md:items-start gap-6 bg-white p-6 rounded-lg shadow-md`}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
      />

      {/* Project Details */}
      <div className="flex-1">
        <h3 className="text-2xl text-black font-bold mb-4">{project.title}</h3>
        <p className="text-gray-900 font-bold mb-4">{project.description}</p>
        <div className='flex'>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 mr-4"
          >
            <Link />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black "
          >
            <Github />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
