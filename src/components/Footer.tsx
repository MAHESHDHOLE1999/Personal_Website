
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-navy-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-bold text-xl mb-2">Mahesh Dhole</h3>
            <p className="text-gray-300">Full Stack Developer</p>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="flex items-center justify-center">
              Made with by Mahesh Dhole
            </p>
            <p className="text-sm text-gray-300 mt-1">© {new Date().getFullYear()} - All Rights Reserved</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-white text-portfolio-navy-blue p-3 rounded-full hover:bg-portfolio-yellow transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
