import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact'; // Import Contact

function App() {
  return (
    <div className="bg-[#0a192f] min-h-screen text-gray-300 font-sans">
      <Navbar />
      
      <Home />
      <Work />
      <Skills />
      <Contact />
      
    </div>
  );
}

export default App;