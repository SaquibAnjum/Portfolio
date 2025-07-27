import React from "react";

const Project = () => {
  const project = [
    {
      id: 1,
      title: "Imbot",
      description: "AI chatbot builder that allows users to train bots using custom PDF or text data.",
      image: "https://i.ytimg.com/vi/qRpOfKGbapk/maxresdefault.jpg",
      liveLink: "https://imbot-saquib.vercel.app/",
      codeLink: "https://github.com/SaquibAnjum/Imbot-frontend.git"
    },
    {
      id: 2,
      title: "Chateopia",
      description: "A real-time multilingual chat application with Firebase authentication and Socket.IO-based secure group messaging support.",
      image: "https://tse2.mm.bing.net/th/id/OIP.jeRDiLg7ZezKZWULULbsQwHaEo?pid=Api&P=0&h=220",
      liveLink: "https://chateopia-saquib.vercel.app/",
      codeLink: "https://github.com/SaquibAnjum/chateopia123.git"
    },
    {
      id: 3,
      title: "Codeforge",
      description: "An online coding platform supporting C, C++, Java, JavaScript, and more with real-time execution.",
      image: "https://blog.zegocloud.com/wp-content/uploads/2023/02/coding-platform.jpg",
      liveLink: "https://codeforge-saquib.vercel.app/",
      codeLink: "https://github.com/SaquibAnjum/Codeforge.git"
    },
    {
      id: 4,
      title: "INotebook",
      description: "A full-stack secure note-taking app with JWT authentication and complete CRUD operations for user notes.",
      image: "https://notionhub.b-cdn.net/templates/notion-notes-manager/notes-manager-ge-thumb.webp",
      liveLink: "https://docify-saquib.vercel.app/loginsignup",
      codeLink: "https://github.com/SaquibAnjum/Inottebook-Frontend.git"
    },
   
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing projects and skills with clean animations.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section name="Portfolio" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((projects) => (
            <div 
              key={projects.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
            >
              <img 
                src={projects.image} 
                alt={projects.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{projects.title}</h3>
                <p className="text-gray-600 mb-4">{projects.description}</p>
                <div className="flex space-x-3">
                  <a 
                    href={projects.liveLink}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  <a 
                    href={projects.codeLink}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-300 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
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

export default Project;