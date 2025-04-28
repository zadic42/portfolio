import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Doctor Appointment Web Application',
      description: 'A comprehensive healthcare appointment system built with MERN stack. Features include appointment scheduling, doctor profiles, secure payments via Stripe, and real-time notifications.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
      image: '/projects/doctor-appointment.png',
      liveLink: 'https://prescripto-b0fj.onrender.com',
      githubLink: 'https://github.com/zadic42/Prescripto'
    },
    {
      title: 'Video Streaming Platform',
      description: 'A modern video streaming platform built with React and Firebase. Includes features like user authentication, video upload/playback, real-time comments, and responsive video player.',
      tech: ['React', 'Firebase', 'Cloud Storage', 'Authentication'],
      image: '/projects/video-streaming.png',
      liveLink: 'https://netflixclone-xo6e.onrender.com/',
      githubLink: 'https://github.com/zadic42/Netflix-Clone'
    },
    {
      title: 'Alumni Portal',
      description: 'Built with React, this portal connects alumni and students through features like job postings, an interview scheduler, a placement timeline, and a mentorship system — all designed for a smooth and interactive user experience.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      image: '/projects/alumin-portal.png',
      liveLink: 'https://alumni-portal-74u5.onrender.com',
      githubLink: 'https://github.com/zadic42/Alumni_Portal'
    },
    {
      title: 'Authentication System',
      description: 'A robust authentication system implementing JWT and OAuth 2.0 using MERN stack. Includes social login, role-based access control, and secure password management.',
      tech: ['MERN', 'JWT', 'OAuth 2.0', 'Security'],
      image: '/projects/auth.png',
      githubLink: 'https://github.com/zadic42/Role_based_Auth'
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-serif">
            Here are some of my key projects that demonstrate my expertise in full-stack development,
            particularly with the MERN stack and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/projects/project-placeholder.jpg.png';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 font-serif">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-serif"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center text-blue-500 hover:text-blue-600 font-serif"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 hover:text-gray-900 font-serif"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 