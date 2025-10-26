import { useEffect, useRef, useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Web Development',
      issuer: 'Internshala Trainings',
      date: 'June 2023',
      credentialId: 'gfx1k9us98u',
      description: 'Completed an 8-week Web Development training from Internshala with 97% score, covering HTML, CSS, Bootstrap, JS, PHP, DBMS, and React.',
      link: 'https://drive.google.com/file/d/1dUokKgOSiizWh7wjdzxDxeQh58N-trsK/view?usp=sharing',
    },
    {
      title: 'Python Programming',
      issuer: 'Pantech e Learning',
      date: 'May 2023',
      credentialId: 'PEL_PYMCPAT_1654',
      description: 'Completed 30 days masterclass on Python Programming.',
      link: 'https://drive.google.com/file/d/1ueeME8rZSu0up84nxPCF0SY_QU0gxQcr/view?usp=sharing',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Coursera',
      date: 'September 2023',
      credentialId: 'COURSERA-789',
      description: 'Gained proficiency in Python programming for data analysis and visualization.',
      link: 'https://www.coursera.org/',
    },
    
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-1">{cert.title}</h3>
                  <p className="text-cyan-400 font-medium">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>

              <p className="text-slate-300 mb-4">{cert.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <span className="text-sm text-slate-400">
                  ID: <span className="text-slate-300">{cert.credentialId}</span>
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span className="text-sm">View</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
