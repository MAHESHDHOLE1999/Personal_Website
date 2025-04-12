
import { ArrowDown } from 'lucide-react';
import cv from '../../public/lovable-uploads/Mahesh_cv.png'

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-portfolio-navy-blue text-white flex items-center relative">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-3/5 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">MAHESH Tarachand DHOLE</h1>
            <h2 className="text-2xl md:text-3xl text-portfolio-yellow font-medium mb-6">FULL STACK DEVELOPER</h2>
            <p className="text-lg mb-8 max-w-2xl">
              Passionate Software Developer who loves learning new technologies and applying them to real-world projects.
              Skilled in full-stack development with expertise in MERN Stack.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:dholemahesh199@gmail.com" 
                className="bg-white text-portfolio-navy-blue px-6 py-3 rounded-md font-medium hover:bg-portfolio-yellow transition-colors"
              >
                Contact Me
              </a>
              <a 
                href={cv} 
                target="_blank" 
                className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-portfolio-navy-blue transition-colors"
                download={true}
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center animate-fade-in">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-portfolio-yellow">
              <img 
                src="/lovable-uploads/Mahesh.png" 
                alt="Mahesh Dhole" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
