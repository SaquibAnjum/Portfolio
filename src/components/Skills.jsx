import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "from-purple-500 to-blue-500" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "from-blue-500 to-blue-700" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-yellow-400 to-blue-600" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-300 to-yellow-500" }
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "from-orange-500 to-orange-700" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "from-blue-400 to-blue-600" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-blue-300 to-blue-500" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-green-700" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-gray-400 to-gray-600" },
        { name: "Tailwind CSS", icon: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp", color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      name: "Databases & Cloud",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-400 to-green-600" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "from-blue-300 to-blue-500" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "from-yellow-400 to-orange-500" }
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "from-gray-700 to-gray-900" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "from-orange-500 to-orange-700" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "from-blue-400 to-blue-600" },
        { name: "Excel", icon: "https://tse4.mm.bing.net/th/id/OIP.ibQPA-rdk8i4DrME_fOp4gHaE8?pid=Api&P=0&h=220", color: "from-green-500 to-green-700" }
      ]
    },
    {
      name: "Core Concepts",
      skills: [
        { name: "Data Structures", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png", color: "from-indigo-400 to-indigo-600" },
        { name: "OOP", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", color: "from-red-400 to-red-600" },
        { name: "DBMS", icon: "https://cdn-icons-png.flaticon.com/512/1069/1069094.png", color: "from-blue-400 to-blue-600" },
        { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png", color: "from-green-400 to-green-600" }
      ]
    }
  ];

  return (
    <section name="Experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Technologies</span>
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Here are the tools and technologies I work with to bring ideas to life
        </p>
        
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 pb-2 border-b border-gray-200">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {category.name}
              </span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="relative group flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 -z-10`}></div>
                  
                  {/* Skill icon with enhanced styling */}
                  <div className="w-20 h-20 flex items-center justify-center mb-4 p-3 rounded-full bg-white group-hover:bg-opacity-90 shadow-sm group-hover:shadow-inner transition-all duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Skill name with better typography */}
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-white text-center transition-colors duration-300">
                    {skill.name}
                  </span>
                  
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white group-hover:border-opacity-30 transition-all duration-300 -z-20`}></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;