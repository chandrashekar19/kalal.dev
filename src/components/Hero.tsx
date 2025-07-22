import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const roles = ['React Developer', 'Frontend Engineer', 'UI/UX Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = roles[currentRole];
    let currentIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      if (!isDeleting && currentIndex <= currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex));
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        setDisplayText(currentText.slice(0, currentIndex));
        currentIndex--;
      } else if (!isDeleting && currentIndex > currentText.length) {
        setTimeout(() => { isDeleting = true; }, 1500);
      } else if (isDeleting && currentIndex < 0) {
        isDeleting = false;
        setCurrentRole((prev) => (prev + 1) % roles.length);
        currentIndex = 0;
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [currentRole, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(108, 99, 255, 0.9), rgba(56, 189, 248, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary-glow/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-foreground">Hello, I'm</span>
            <span className="block gradient-text">Alex Johnson</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-2xl md:text-4xl text-muted-foreground">
              I'm a <span className="text-accent font-semibold typing-cursor">{displayText}</span>
            </p>
          </div>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional user experiences with modern web technologies. 
            Specializing in React, TypeScript, and innovative frontend solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-primary">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-3 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-accent transition-colors p-3 rounded-full hover:bg-accent/10">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;