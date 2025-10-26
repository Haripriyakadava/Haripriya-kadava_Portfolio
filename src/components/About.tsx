import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import photo from '../assets/photo.jpg';


const About = () => {
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

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful, intuitive user interfaces',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing for speed and efficiency',
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Building experiences people love to use',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* --- Left Side: Text --- */}
        <div
          className={`flex-1 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl">
            I'm a passionate developer who loves building amazing web experiences.
            With a focus on modern technologies and clean design, I bring ideas to life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-5 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-100">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Side: Photo --- */}
        <div
          className={`flex-1 flex justify-center transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
        >
          <img
            src={photo} // 👈 Replace with your actual photo path (e.g. "/images/haripriya.jpg")
            alt="Haripriya Kadava"
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg border-4 border-cyan-500/40 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
