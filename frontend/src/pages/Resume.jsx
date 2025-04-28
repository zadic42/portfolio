import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">MOHAMMED SADIK</h1>
            <p className="text-xl">Full Stack Developer</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                zadic42@gmail.com
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +919074435902
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Pattambi, Palakkad, Kerala, 679303, India
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Summary Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Summary</h2>
              <p className="text-gray-600">
                A creative and detail-oriented Web Developer with a strong foundation in building responsive websites and web applications. 
                Skilled in front-end technologies like HTML, CSS, JavaScript, and back-end technologies such as Node.js and Express.js. 
                Familiar with frameworks like React.js, as well as databases like MySQL and MongoDB. Passionate about improving user experience, 
                optimizing performance, and writing clean, efficient code. Eager to contribute problem-solving skills to a collaborative team 
                and deliver high-quality web solutions.
              </p>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-700">Junior Web Developer</h3>
                  <p className="text-gray-600">Strokx Technologies, Ernakulam, India | Feb 2025 - Present</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Gained hands-on experience in building and enhancing web applications using the MERN stack</li>
                    <li>Collaborated with team members to implement responsive user interfaces</li>
                    <li>Developed RESTful APIs to support seamless data communication</li>
                    <li>Managed database operations using MongoDB for efficient data storage and retrieval</li>
                    <li>Applied modern coding practices to ensure optimal performance, scalability, and user experience</li>
                    <li>Actively participated in debugging, testing, and improving application features</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-700">MERN Stack Developer</h3>
                  <p className="text-gray-600">Techmaghi, Ernakulam, India | Jul 2024 - Jan 2025</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Developed a full-stack web application using the MERN stack</li>
                    <li>Designed and implemented both frontend and backend to ensure seamless integration</li>
                    <li>Integrated user authentication with secure login and registration functionality</li>
                    <li>Managed data using MongoDB, ensuring efficient querying and storage</li>
                    <li>Utilized modern development practices such as RESTful API design and modular architecture</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">BE, Computer Science</h3>
                  <p className="text-gray-600">Vinayaka Missions Kirupananda Variyar Engineering College, Salem, India</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Studied core subjects such as Data Structures, Algorithms, Database Management Systems, Web Development, and Software Engineering</li>
                    <li>Gained practical experience through hands-on projects, coding assignments, and technical workshops</li>
                    <li>Developed proficiency in programming languages like JavaScript, Python, C++, and Java</li>
                    <li>Actively participated in the National Service Scheme (NSS)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-700">Role Based Authentication</h3>
                  <p className="text-gray-600">Apr 2025</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Designed and implemented Role-Based Access Control (RBAC) for Admin, User, and Trainer roles</li>
                    <li>Integrated Multi-Factor Authentication (MFA) using Google OAuth 2.0 and JWT</li>
                    <li>Developed Admin Dashboard with Audit Logs and System Performance Monitoring</li>
                    <li>Enabled Admins to add and manage Trainers</li>
                    <li>Secured APIs with role validation middleware in Node.js/Express</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-700">Doctor Appointment Web Application</h3>
                  <p className="text-gray-600">Dec 2024 - Jan 2025</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Enhanced a Doctor Appointment Web Application using the MERN stack</li>
                    <li>Implemented real-time appointment updates and secure user authentication</li>
                    <li>Developed role-based access system for patients, doctors, and admins</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-700">Video Streaming Platform</h3>
                  <p className="text-gray-600">Oct 2024</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Built a full-stack Video Streaming Platform with user authentication and profile management</li>
                    <li>Added advanced features such as watchlists and personalized recommendations</li>
                    <li>Ensured platform scalability and responsiveness across devices</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-700">Expense Tracker</h3>
                  <p className="text-gray-600">Aug 2024</p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Developed a full-stack web application for tracking personal expenses</li>
                    <li>Implemented features for adding, updating, deleting, and filtering expenses</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">JavaScript</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">React.js</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Express.js</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Database Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">MongoDB</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">MySQL</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Development Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Git</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Postman</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Deployment</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Web Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">HTML5</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Tailwind CSS</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">English</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Malayalam</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Tamil</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h2>
              <div className="space-y-2">
                <p className="text-gray-600">• Postman API Fundamentals Student Expert - Postman</p>
                <p className="text-gray-600">• Introduction to Career Skills in Software Development - LinkedIn Learning</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 