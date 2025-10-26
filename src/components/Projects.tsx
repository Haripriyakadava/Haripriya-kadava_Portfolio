import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'Developed a functional e-commerce website that allows users to browse products, manage cart, and purchase items, with an admin panel for product management.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
      image: '/Project-images/home.png',
      github: 'https://github.com/Haripriyakadava/E-commerce-Website-Using-Php',
    },
    {
      title: 'Temperature Converter Web App',
      description: 'Built a simple yet interactive web application to convert temperature values between Celsius, Fahrenheit, and Kelvin.',
      technologies: ['Python (Flask)', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      image: '/Project-images/Temperature converter.png',
      github: 'https://github.com/Haripriyakadava/Temperature-Converter',
      
    },
    {
      title: 'To-Do List Web App',
      description: 'Built a simple and interactive web application to manage daily tasks efficiently. Users can add, complete, and delete tasks with a responsive and clean interface.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/Project-images/TO-DO List.png',
      github: 'https://github.com/Haripriyakadava/To-Do-List-Web-App',
      
    },
    {
      title: 'Iot Manhole Monitoring & street Light control system',
      description: 'Designed and implemented a smart IoT solution for municipalities to monitor underground manholes and control streetlights with fault detection and real-time reporting. This system enhances public safety, automation, and smart city infrastructure.',
      technologies: ['IoT Sensors (Ultrasonic, LDR)', 'Arduino Uno', 'GPS Module', 'Wi-Fi Module (IoT communication)', 'Embedded C', 'Cloud Storage'],
      image: '/Project-images/Iot.jpg',
      github: 'https://github.com',
  
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-slate-700 text-cyan-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
