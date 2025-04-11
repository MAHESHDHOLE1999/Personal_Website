
import { GraduationCap, Briefcase, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate Full Stack Developer based in Maharashtra, India, with expertise in both frontend and backend technologies. 
              I focus on building efficient, scalable solutions and leading teams to success.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My journey in software development has equipped me with a diverse skill set including React.js, Laravel, PHP, MySQL, and modern frontend frameworks. 
              I'm enthusiastic about creating exceptional user experiences while ensuring robust backend functionality.
            </p>
            <p className="text-lg text-gray-700">
              Always eager to innovate and improve with the latest technologies, I approach each project with dedication and a problem-solving mindset. 
              I thrive in collaborative environments and am committed to delivering high-quality, maintainable code.
            </p>
          </div>

          <div className="w-full md:w-1/2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Briefcase size={24} className="text-portfolio-yellow" />, 
                  title: "Experience", 
                  value: "1+ Years",
                  description: "Full Stack Development"
                },
                { 
                  icon: <GraduationCap size={24} className="text-portfolio-yellow" />, 
                  title: "Education", 
                  value: "MCA",
                  description: "Datta Meghe Institute"
                },
                { 
                  icon: <Award size={24} className="text-portfolio-yellow" />, 
                  title: "Completed", 
                  value: "5+ Projects",
                  description: "Web Applications"
                },
                { 
                  icon: <Globe size={24} className="text-portfolio-yellow" />, 
                  title: "Languages", 
                  value: "3 Languages",
                  description: "English, Hindi, Marathi"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <h3 className="ml-2 font-medium text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-2xl font-bold text-portfolio-navy-blue">{item.value}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
