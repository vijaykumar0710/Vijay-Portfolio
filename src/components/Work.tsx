import { FaGithub, FaExternalLinkAlt, FaFolder, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Work = () => {
  const experiences = [
    {
      company: 'ITJOBXS',
      role: 'Frontend Developer Intern',
      period: 'June 2025 - July 2025',
      type: 'Remote',
      tech: ['Vite', 'React.js', 'Tailwind'],
      points: [
        'Contributed to core UI development, building the Dashboard and Navbar.',
        'Built modules to streamline content delivery and uploading.',
        'Improved performance using React Hooks like useState, useRef, and useEffect.'
      ]
    },
    {
      company: 'Afame Technologies',
      role: 'SDE Intern',
      period: 'May 2025 - June 2025',
      type: 'Remote',
      tech: ['React.js', 'Node.js', 'Git'],
      points: [
        'Collaborated within a team to test code, debug issues, and manage version control.',
        'Redesigned UI using Tailwind CSS with responsive layouts.',
        'Gained exposure to full-stack integration using Express.js.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Imagify - AI SaaS',
      description: 'A full-stack AI text-to-image generator. Features credit system, Stripe payments, and Clipdrop API.',
      techStack: ['MERN', 'Stripe', 'Redux'],
      githubLink: 'https://github.com/vijaykumar0710', 
      liveLink: '#',
    },
    {
      title: 'Brainly - Second Brain',
      description: 'Content aggregation platform for links and tweets. Features RESTful APIs and content sharing.',
      techStack: ['TypeScript', 'MongoDB', 'React'],
      githubLink: 'https://github.com/vijaykumar0710',
      liveLink: '#',
    },
  ];

  return (
    <div id="work" className="min-h-screen bg-[#0a192f] text-gray-300 py-20 px-6 sm:px-24">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Experience Section */}
        <div className="mb-24">
            <div className="flex items-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mr-6 flex items-center gap-4">
                    <FaBriefcase className="text-cyan-400" /> Experience
                </h2>
                <div className="h-1px bg-gray-600 grow max-w-50"></div>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    // Responsive Flex: Column on mobile, Row on desktop
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-10 border-l-2 border-gray-700 pl-6 ml-2 relative">
                        <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
                        
                        <div className="md:w-1/4 shrink-0">
                             <div className="flex items-center gap-2 text-sm font-mono mb-2 text-gray-400">
                                <FaCalendarAlt className="text-cyan-400" /> {exp.period}
                             </div>
                             <span className="inline-block px-2 py-1 text-xs font-bold text-cyan-300 bg-cyan-900/30 rounded border border-cyan-900/50">
                                {exp.type}
                             </span>
                        </div>

                        <div className="md:w-3/4">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-100">{exp.role}</h3>
                            <h4 className="text-lg text-cyan-400 font-mono mb-4">@ {exp.company}</h4>
                            
                            <ul className="list-disc ml-4 text-gray-400 text-sm sm:text-base space-y-2 mb-4">
                                {exp.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-mono rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Projects Section */}
        <div>
            <div className="flex items-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mr-6 flex items-center gap-4">
                    <FaFolder className="text-cyan-400" /> Projects
                </h2>
                <div className="h-1px bg-gray-600 grow max-w-50"></div>
            </div>

            {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="bg-[#112240] p-8 rounded-xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-6">
                        <FaFolder className="text-4xl text-cyan-400" />
                        <div className="flex gap-4 text-gray-300">
                            <a href={project.githubLink} target="_blank" className="hover:text-cyan-400"><FaGithub size={22} /></a>
                            <a href={project.liveLink} target="_blank" className="hover:text-cyan-400"><FaExternalLinkAlt size={20} /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-6">{project.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-400">
                        {project.techStack.map((tech) => <li key={tech}>{tech}</li>)}
                    </ul>
                </div>
            ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Work;