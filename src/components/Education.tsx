import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
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

  const educationData = [
    {
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      institution: 'Sree Venkateswara College Of Engineering',
      location: 'Nellore, Andhra Pradesh',
      period: '2020 - 2024',

    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Junior College',
      location: 'Nellore, Andhra Pradesh',
      period: '2018 - 2020',
    },
    {
      degree: 'SSC',
      institution: 'Vijetha English Medium High School',
      location: 'Nellore, Andhra Pradesh',
      period: '2017 - 2018',
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-500 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-slate-950 hidden md:block"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-cyan-400 mb-2">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm md:text-right">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
