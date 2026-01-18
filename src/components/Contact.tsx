import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';

const Contact = () => {
  return (
    <div 
      id="contact" 
      className="min-h-screen flex flex-col justify-center items-center bg-[#0a192f] text-gray-300 px-6 py-20"
    >
      <div className="max-w-4xl w-full text-center">
        
        {/* Header Section */}
        <p className="text-cyan-400 font-mono mb-4 text-xl">
          What's Next?
        </p>

        <h2 className="text-5xl sm:text-6xl font-bold text-gray-100 mb-8">
          Get In Touch
        </h2>

        <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          I am actively looking for **SDE-1 (Fresher)** opportunities. 
          Whether you have a question, a job opportunity, or just want to say hi, 
          my inbox is always open!
        </p>

        {/* --- CONTACT FORM START --- */}
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="flex flex-col gap-4 max-w-lg mx-auto text-left mb-16"
        >
          {/* Access Key for Web3Forms */}
          <input type="hidden" name="access_key" value="6e293cf4-36e1-4e5d-8c68-84b52c793b4e" />

          <h3 className="text-2xl font-bold text-gray-100 mb-2">Email Me 🚀</h3>

          {/* Email Input */}
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            required
            className="w-full p-4 rounded bg-[#112240] text-gray-300 border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
          />

          {/* Name Input */}
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            required
            className="w-full p-4 rounded bg-[#112240] text-gray-300 border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
          />

          {/* Subject Input */}
          <input 
            type="text" 
            name="subject"
            placeholder="Subject" 
            required
            className="w-full p-4 rounded bg-[#112240] text-gray-300 border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
          />

          {/* Message Input */}
          <textarea 
            name="message"
            rows={5}
            placeholder="Message" 
            required
            className="w-full p-4 rounded bg-[#112240] text-gray-300 border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
          ></textarea>

          {/* Send Button */}
          <button 
            type="submit"
            className="w-full py-4 bg-cyan-400 text-[#0a192f] font-bold text-xl rounded hover:bg-cyan-300 transition-colors duration-300"
          >
            Send
          </button>
        </form>
        {/* --- CONTACT FORM END --- */}


        {/* Direct Contact Details */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400 font-mono text-lg mb-16">
            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <a href="mailto:vijaykumar20cy@gmail.com">vijaykumar20cy@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                <FaPhone className="text-cyan-400 text-xl" />
                <a href="tel:+917667822841">+91-7667822841</a>
            </div>
        </div>

        {/* Footer Socials */}
        <div className="flex gap-10 justify-center">
            <a href="https://github.com/vijaykumar0710" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-4xl">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vijay-kumar-profile/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-4xl">
                <FaLinkedin />
            </a>
            <a href="https://leetcode.com/VJYK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-4xl">
                <SiLeetcode />
            </a>
            <a href="https://codeforces.com/profile/Vijay_Kumar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-4xl">
                <SiCodeforces />
            </a>
        </div>

        {/* Copyright */}
        <p className="mt-12 text-xl font-mono text-gray-600">
            Designed & Built by Vijay Kumar
        </p>

      </div>
    </div>
  );
};

export default Contact;