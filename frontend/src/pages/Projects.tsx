import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';
import blockChainImage from '/public/assets/blockChain_image.jpeg';
import bookStoreImage from '/public/assets/bookStore_image.jpeg';
import tetrisImage from '/public/assets/tetris.jpg';
import nlpImage from '/public/assets/NLP_project_image.jpeg';

const Projects: React.FC = () => {
  // Sample projects (you should replace these with your actual projects)
  const projects = [
    {
      id: 1,
      title: 'Blockchain-Simulation',
      description: 'A simplified blockchain simulation that implements a multi-process miner-server system written in C.',
      technologies: ['C', 'Makefile', 'Linux', 'Docker'],
      imageUrl: blockChainImage,
      githubUrl: 'https://github.com/Rom7699/Blockchain-Simulation',
    },
    {
      id: 2,
      title: 'Book-Store',
      description: 'Book Store is a beginner-friendly project that demonstrates the fundamentals of the MERN (MongoDB, Express, React, Node.js) stack.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      imageUrl: bookStoreImage,
      githubUrl: 'https://github.com/yourusername/project2',
    },
    {
      id: 3,
      title: 'Tetris',
      description: 'Classic Tetris game simulation in C++ using object-oriented programming principles.',
      technologies: ['C++', 'OOP'],
      imageUrl: tetrisImage,
      githubUrl: 'https://github.com/Rom7699/Tetris_cpp',
      demoUrl: 'https://demo.project3.com',
    },
    {
      id: 4,
      title: 'NLP Clustering',
      description: 'This project aims to automatically cluster user requests based on their semantic meaning, select representative requests from each cluster, and generate meaningful labels for each cluster.',
      technologies: ['Python', 'NLTK', 'sklearn', 'numpy'],
      imageUrl: nlpImage,
      githubUrl: 'https://github.com/Rom7699/NLP_Final_Project',
    },
  ];

  return (
    <div className="projects-page">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on. Feel free to check them out!</p>
      </section>
      
      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
