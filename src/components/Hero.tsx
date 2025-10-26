import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Hi, I'm Haripriya Kadava
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            Software Developer
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            I craft beautiful digital experiences with clean code and elegant design.
            Passionate about turning ideas into reality.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://github.com/Haripriyakadava"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/haripriyakadava/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:haripriyakadava56@gmail.com"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
  <button
    onClick={() => scrollToSection('contact')}
    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
  >
    Contact me
  </button>

  <a
    href="https://drive.google.com/file/d/171UdZGTXsAnHu1C3Uvo2P07nTXlddAC7/view?usp=sharing"
    download
    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
  >
    Get Resume
  </a>
</div>

        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
