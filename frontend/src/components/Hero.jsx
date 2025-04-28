import React from 'react';
import profileImage from '../assets/profile.jpg'; // Adjust the path as necessary

const Hero = () => {
  const skills = {
    Frontend: ['React', 'JavaScript/ES6+', 'HTML5/CSS3/Tailwind CSS'],
    Backend: ['Node/Express','SQL/PostgreSQL/MongoDB']
  };

  return (
    <div id="about">
      {/* Blue Hero Section */}
      <div className="bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {/* Profile Section */}
          <div className="flex items-start space-x-8 mb-12">
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-white"
              />
            </div>
            <div>
              <p className="text-blue-100 mb-2 font-serif">Hello, my name is</p>
              <h1 className="text-4xl font-serif font-bold mb-4">Mohammed Sadik</h1>
              <p className="text-blue-100 max-w-2xl font-serif">
                As a passionate full-stack developer, I love creating elegant solutions for complex web applications. 
                With expertise in both frontend and backend technologies, I focus on building scalable, user-friendly 
                applications that solve real-world problems. I'm dedicated to delivering high-quality code and 
                exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* White Skills Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-gray-900">Skills Overview</h2>
          <p className="text-gray-600 mb-6 font-serif">
            I am a passionate fresher with a strong foundation in web development technologies. 
            I'm eager to apply my knowledge and grow as a developer. Below is an overview of my technical skills and tools I use.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  {category === 'Frontend' && (
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {category === 'Backend' && (
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  )}
                  <h3 className="text-xl font-serif font-medium text-gray-900">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                      </svg>
                      <span className="text-gray-600 font-serif">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 