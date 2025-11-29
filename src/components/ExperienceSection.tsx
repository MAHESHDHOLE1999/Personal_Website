
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Spinovix Software Pvt Ltd",
      location: "Nagpur, India",
      period: "04/2025 - Present",
      // description: "Working at UNIFINS IT HUB, a distinguished IT services, consulting, and business solutions organization with a decade-long track record of excellence.",
      responsibilities: [
        "Developed and successfully deployed 3+ production-level client projects, optimizing performance and response time by 30–40%.",
        "Mentored and guided 15+ interns by assigning tasks, reviewing code, and improving overall project delivery quality and development standards.",
        "Designed and implemented scalable backend architectures, reducing feature rollout time by 20% and improving system maintainability.",
        "Collaborated with cross-functional teams to gather requirements, plan sprints, and deliver client features within timelines.",
        "Enhanced code quality through structured development, debugging, documentation, and best-practice implementation.",
      ]
    },
    {
      title: "Software Developer",
      company: "UNIFINS IT Hub Pvt. Ltd.",
      location: "Nagpur, India",
      period: "11/2024 - 04/2025",
      // description: "Working at UNIFINS IT HUB, a distinguished IT services, consulting, and business solutions organization with a decade-long track record of excellence.",
      responsibilities: [
        "Developed and maintained full-stack web applications using React.js, PHP (Laravel), MySQL, Tailwind CSS, and Material UI.",
        "Led the development of TechnoGhat Knowledge Solution, an educational platform improving student engagement.",
        "Designed modern, responsive UI and optimized REST APIs and database queries for better performance.",
        "Managed Agile-based project planning, ensuring timely delivery and continuous improvement.",
        "Implemented Git version control, and best practices for scalability and security."
      ]
    },
    {
      title: "Assistant Co-ordinator",
      company: "Technogate Knowledge Solution Private Limited",
      location: "Hinganghat, India",
      period: "08/2024 - 11/2024",
      // description: "Worked at Technogate Knowledge Solution, an educational institute that provides quality education and skill development in programming, IT-JEE preparation, and technical fields.",
      responsibilities: [
        "Planned and managed institutional activities to enhance operations and student engagement.",
        "Taught programming and technical subjects to students, ensuring effective learning.",
        "Developed and implemented marketing strategies to boost admissions.",
        "Led projects, coordinated with teams, and ensured successful execution of initiatives."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "InternMeets Edu. Tech Pvt Ltd",
      location: "Nagpur, Maharashtra",
      period: "03/2024 - 06/2024",
      // description: "Interned at InternMeets Edu. Tech, a training platform that provides students with internship opportunities and hands-on project experience.",
      responsibilities: [
        "Worked on the Events E-Waste Management System, a project focused on collecting, recycling, and reselling e-waste.",
        "Gained experience in teamwork, project leadership, and effective communication with teammates.",
        "Developed practical skills in project execution and collaboration within a professional environment."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-portfolio-navy-blue">{exp.title}</h3>
                  <span className="bg-portfolio-navy-blue text-white text-sm px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">
                    {exp.company}
                  </span>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                {/* <p className="text-gray-700 mb-4">{exp?.description}</p> */}
                
                {exp.responsibilities && (
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
