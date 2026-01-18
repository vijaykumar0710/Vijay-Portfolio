import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';
import { 
  SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiCss3, 
  SiReact, SiVite, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
  SiGit, SiGithub, SiPostman 
} from 'react-icons/si';

// Ensure you have installed: npm install react-icons
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "SQL", icon: <FaDatabase className="text-gray-400" /> }
      ]
    },
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> }
      ]
    },
    {
      title: "Backend & Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }
      ]
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> }
      ]
    },
    {
      title: "Core Concepts",
      icon: <FaBrain />,
      skills: [
        { name: "DSA", icon: <FaBrain className="text-pink-400" /> },
        { name: "OOPs", icon: <FaCode className="text-purple-400" /> },
        { name: "OS", icon: <FaLaptopCode className="text-orange-400" /> },
        { name: "DBMS", icon: <FaDatabase className="text-green-400" /> }
      ]
    }
  ];

  return (
    <div 
      id="skills" 
      className="min-h-screen flex flex-col justify-center bg-[#0a192f] text-gray-300 px-6 sm:px-24 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex items-center mb-16">
           <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mr-4">
             <span className="text-cyan-400 font-mono text-2xl mr-2"></span> 
             Technical Skills
           </h2>
           <div className="h-1px bg-gray-600 grow max-w-75"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#112240] p-6 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300 border-t-4 border-cyan-400/50 hover:border-cyan-400"
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-cyan-400 text-3xl">
                  {category.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with Logos */}
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 px-4 py-2 bg-cyan-900/30 text-cyan-300 text-lg font-mono rounded-full border border-cyan-900/50 hover:bg-cyan-900/50 transition-colors cursor-default"
                  >
                    <span className="text-2xl">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;