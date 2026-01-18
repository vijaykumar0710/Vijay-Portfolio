import { FaArrowRight } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode, SiGithub } from 'react-icons/si';

const Home = () => {
  return (
    <div 
      id="home" 
      // CHANGED: Increased pt-20 to pt-40 to force content down below the navbar
      // Also kept min-h-screen to ensure full height
      className="min-h-screen flex flex-col justify-center items-center bg-[#0a192f] text-gray-300 px-6 pt-40 sm:pt-20"
    >
      <div className="max-w-4xl text-center animate-fade-in-up">
        
        {/* Intro Text */}
        <p className="text-cyan-400 font-mono mb-4 text-base sm:text-lg">
          Hi, my name is
        </p>

        {/* Name - Adjusted size and margin */}
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-100 mb-6 leading-tight">
          VIJAY KUMAR
        </h1>

        {/* Sub-headline */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
          I am a driven and adaptable professional with a strong commitment to learning and excellence. 
          Equipped with a positive mindset, I embrace challenges as opportunities for growth.
        </h2>

        {/* Stats / Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 mb-10 leading-relaxed">
          I am a final-year student at <span className="text-cyan-400">IIT BHU</span>. 
          I specialize in the <span className="text-cyan-400">MERN Stack</span> and have a strong grasp of Data Structures, 
          having solved <span className="text-cyan-400">2000+ DSA problems</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center w-full">
            <a 
              href="#work" 
              className="w-full sm:w-auto px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-all duration-300 font-mono flex justify-center items-center gap-2 group"
            >
              Check out my work
              <span className="group-hover:rotate-90 transition-transform duration-300">
                <FaArrowRight size={14} />
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-[#0a192f] rounded font-bold hover:bg-cyan-300 transition-colors duration-300 font-mono text-center"
            >
              Contact Me
            </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-8 text-gray-400">
            <a href="https://github.com/vijaykumar0710" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <SiGithub size={28} /> 
            </a>
            <a href="https://leetcode.com/VJYK" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <SiLeetcode size={28} /> 
            </a>
            <a href="https://codeforces.com/profile/Vijay_Kumar" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <SiCodeforces size={28} /> 
            </a>
        </div>

      </div>
    </div>
  );
};

export default Home;