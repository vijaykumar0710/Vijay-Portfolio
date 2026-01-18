import { FaGithub, FaExternalLinkAlt, FaFolder, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Work = () => {
  // 1. Internship Data
  const experiences = [
    {
      company: 'ITJOBXS',
      role: 'Frontend Developer Intern',
      period: 'June 2025 - July 2025',
      type: 'Remote',
      tech: ['Vite', 'React.js', 'Tailwind CSS'],
      points: [
        'Contributed to core UI development, building the application’s Dashboard and Navbar.',
        'Built modules to streamline content delivery, including lecture and question uploading functionalities.',
        'Collaborated with the team on the design, development, and integration of APIs.',
        'Improved performance of existing codebase using React Hooks like useState, useRef, and useEffect.'
      ]
    },
    {
      company: 'Afame Technologies',
      role: 'Software Engineer Intern',
      period: 'May 2025 - June 2025',
      type: 'Remote',
      tech: ['React.js', 'Tailwind CSS', 'Git', 'Node.js'],
      points: [
        'Collaborated within a team to test code, debug issues, and manage version control using Git.',
        'Redesigned UI using Tailwind CSS with responsive layouts and animations to improve engagement.',
        'Gained exposure to full-stack integration using Express.js and Node.js.'
      ]
    }
  ];

  // 2. Project Data
  const projects = [
    {
      title: 'Imagify - AI SaaS App',
      description: 'A full-stack AI text-to-image generation platform. Features include a credit system with secure payments, 20% Clipdrop API integration for synthesis, and secure authentication.',
      techStack: ['MERN Stack', 'Clipdrop API', 'Stripe', 'Redux'],
      githubLink: 'https://github.com/vijaykumar0710', 
      liveLink: '#',
    },
    {
      title: 'Brainly - Second Brain',
      description: 'A content aggregation platform for organizing tweets, videos, and links. Features RESTful APIs for content CRUD operations, sharing mechanisms, and a responsive React interface.',
      techStack: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
      githubLink: 'https://github.com/vijaykumar0710',
      liveLink: '#',
    },
  ];

  return (
    <div 
      id="work" 
      className="min-h-screen bg-[#0a192f] text-gray-300 py-20 px-6 sm:px-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        
        {/* --- SECTION 1: PROFESSIONAL EXPERIENCE --- */}
        <div className="mb-24">
            <div className="flex items-center mb-16">
                {/* Increased Heading Size */}
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mr-6 flex items-center gap-4">
                    <FaBriefcase className="text-cyan-400 text-3xl" />
                    Experience
                </h2>
                <div className="h-1px bg-gray-600 grow max-w-75"></div>
            </div>

            <div className="space-y-16">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 border-l-4 border-gray-700 pl-10 ml-2 relative">
                        {/* Timeline Dot */}
                        <div className="absolute -left-2.75 top-0 w-5 h-5 rounded-full bg-cyan-400"></div>
                        
                        {/* Date & Location Column */}
                        <div className="md:w-1/4 shrink-0 mb-4 md:mb-0">
                             <div className="flex items-center gap-3 text-gray-300 font-mono text-base mb-3">
                                <FaCalendarAlt className="text-cyan-400 text-lg" /> {exp.period}
                             </div>
                             
                             {/* Remote Badge - Larger */}
                             <span className="inline-block px-3 py-1 text-sm font-bold text-cyan-300 bg-cyan-900/30 rounded border border-cyan-900/50">
                                {exp.type}
                             </span>
                        </div>

                        {/* Content - Right Side */}
                        <div className="md:w-3/4">
                            {/* Role Title - Larger */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-1">{exp.role}</h3>
                            <h4 className="text-xl text-cyan-400 font-mono mb-6">@ {exp.company}</h4>
                            
                            {/* Bullet Points - Larger Text */}
                            <ul className="list-disc list-outside space-y-3 mb-8 ml-5 text-gray-400 text-lg leading-relaxed">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            {/* Tech Tags - Larger */}
                            <div className="flex flex-wrap gap-3">
                                {exp.tech.map((t) => (
                                    <span key={t} className="px-4 py-1.5 bg-cyan-400/10 text-cyan-400 text-sm font-mono border border-cyan-400/20 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


        {/* --- SECTION 2: PROJECTS --- */}
        <div>
            <div className="flex items-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mr-6 flex items-center gap-4">
                    <FaFolder className="text-cyan-400 text-3xl" />
                    Featured Projects
                </h2>
                <div className="h-1px bg-gray-600 grow max-w-75"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
                <div 
                key={index} 
                className="bg-[#112240] p-10 rounded-xl shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between group"
                >
                
                <div className="flex justify-between items-center mb-8">
                    <FaFolder className="text-5xl text-cyan-400" />
                    <div className="flex gap-6">
                    <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                        <FaExternalLinkAlt size={24} />
                    </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                    </h3>
                    <p className="text-gray-400 mb-8 text-base leading-relaxed">
                    {project.description}
                    </p>
                </div>

                <ul className="flex flex-wrap gap-4 text-sm font-mono text-gray-400 mt-auto">
                    {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
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

export default Work;