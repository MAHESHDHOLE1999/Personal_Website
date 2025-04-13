
import { useEffect, useRef, useState } from 'react';

type SkillCategory = {
  category: string;
  skills: { name: string; level: number }[];
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories: SkillCategory[] = [
    {
      category: "Technical Skills",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "ReactJS", level: 90 },
        { name: "NodeJS", level: 80 },
        { name: "PHP", level: 50 },
        { name: "Laravel", level: 60 },
        { name: "TailwindCSS", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "ExpressJS", level: 75 },
        { name: "CI/CD", level : 80 },
        { name: "APIs", level : 80 },
        { name: "Agile", level : 90 },
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Collaboration", level: 85 },
        { name: "Leadership", level: 80 },
        { name: "Time Management", level: 85 },
        { name: "Adaptability", level: 90 },
        { name: "Good Listener", level: 90 },
        { name: "Quick Learner", level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}>
              <h3 className="text-xl font-semibold text-portfolio-navy-blue mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: `width 1s ease-out ${0.3 + skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-portfolio-navy-blue mb-6">Education & Training</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-medium text-portfolio-navy-blue mb-2">Education</h4>
              <div className="mb-4">
                <h5 className="font-medium">MCA</h5>
                <p className="text-gray-700">Datta Meghe Institute of Higher Education and Research</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600">2022-2024</span>
                  <span className="font-medium">CGPA: 8.4/10</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-lg font-medium text-portfolio-navy-blue mb-2">Training & Courses</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Agile Software Development</li>
                <li>• Introduction to Front-end Development with ReactJS</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-medium text-portfolio-navy-blue mb-4">Languages</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { language: "English", proficiency: "Proficient", level: 90 },
                { language: "Hindi", proficiency: "Proficient", level: 95 },
                { language: "Marathi", proficiency: "Native", level: 100 }
              ].map((lang, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{lang.language}</span>
                    <span className="text-sm text-gray-600">{lang.proficiency}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: isVisible ? `${lang.level}%` : '0%',
                        transition: `width 1s ease-out ${0.5 + index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
