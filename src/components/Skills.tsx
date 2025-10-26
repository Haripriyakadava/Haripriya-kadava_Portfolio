import { useEffect, useRef, useState } from 'react';
import { Code2, Database, GitBranch } from 'lucide-react';

const Skills = () => {
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

  const skills = [
    {
      name: 'HTML',
      icon: Code2,
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'CSS',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Bootstrap',
      icon: Code2,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'JavaScript',
      icon: Code2,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'Python',
      icon: Code2,
      color: 'from-blue-600 to-yellow-500',
    },
    {
      name: 'MySQL',
      icon: Database,
      color: 'from-blue-400 to-cyan-600',
    },
    {
      name: 'PostgreSQL',
      icon: Database,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'Git',
      icon: GitBranch,
      color: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 text-center">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
