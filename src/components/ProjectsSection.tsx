
import { ExternalLink, Github, Calendar, MapPin, Image } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProjectsSection = () => {
  const mainProjects = [
    {
      title: "PDF QR SOFTWARE",
      description: "Developed a web app that generates a unique QR code for uploaded PDFs, allowing admins to update documents without changing the QR code or link.",
      period: "03/03/2025-12/03/2025",
      location: "Nagpur, Maharashtra",
      highlights: [
        "Built using React (Frontend) & Laravel 10 (Backend).",
        "Ensured QR code persistence while allowing document updates.",
        "Implemented secure file upload & management.",
        "Enabled QR code download as PNG.",
        "Deployed on Hostinger."
      ],
      techStack: "React, Laravel, PHP 8.3, Endroid, MySQL, GitHub.",
      image: "/lovable-uploads/pdfqrsoftware.png" // Using placeholder image
    },
    {
      title: "TechnoGate Knowledge Solution",
      description: "Educational platform focused on improving student engagement and learning experience.",
      period: "12/2024 - 01/2025",
      location: "Nagpur, Maharashtra",
      role: "Full-Stack Developer",
      highlights: [
        "Developed a responsive frontend using React.js, Tailwind CSS, and Material UI",
        "Built a secure backend with Laravel and MySQL for authentication and user management",
        "Implemented RESTful APIs for smooth communication between frontend and backend",
        "Optimized performance and database queries for faster loading and scalability"
      ],
      techStack: "React.js, Laravel, MySQL, Tailwind CSS, Material UI",
      image: "/lovable-uploads/tgks.png" // Using placeholder image
    },
    {
      title: "E-Waste Management System",
      description: "Project focused on collecting, recycling, and reselling e-waste to promote environmental sustainability.",
      period: "03/2024 - 06/2024",
      location: "Nagpur, Maharashtra",
      highlights: [
        "Worked on a team-based project for managing electronic waste",
        "Developed features for collection tracking and recycling workflows",
        "Implemented user management and reporting functionalities",
        "Gained experience in environmental sustainability technology"
      ],
      techStack: "HTML, CSS, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB",
      image: "/lovable-uploads/evensewaste.png" // Using placeholder image
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden">
                <AspectRatio ratio={16/9} className="bg-gray-100">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                      <Image size={48} className="opacity-40" />
                    </div>
                  )}
                </AspectRatio>
              </div>
              
              <div className="bg-portfolio-navy-blue text-white p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.role && <p className="text-sm text-portfolio-yellow mt-1">Role: {project.role}</p>}
              </div>
              
              <div className="p-6">
                <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-portfolio-navy-blue" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-portfolio-navy-blue" />
                    <span>{project.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <h4 className="font-semibold text-portfolio-navy-blue mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm">{highlight}</li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-portfolio-navy-blue mb-2">Tech Stack:</h4>
                  <p className="text-sm text-gray-700">{project.techStack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            I've published research on AI and transfer learning in medical imaging at the 2024 International Conference on Healthcare Innovations.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-portfolio-navy-blue mb-3">Publication</h3>
            <p className="text-gray-700 mb-2">
              "Leveraging Artificial Intelligence and Transfer Learning in Medical Imaging"
            </p>
            <p className="text-sm text-gray-600">
              2024 International Conference on Healthcare Innovations, Software and Engineering Technologies (HISET), Karad, India, 2024, pp. 414-417, doi: 10.1109/HISET67196.2024.00120.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
