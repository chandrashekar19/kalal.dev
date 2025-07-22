import { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('in-view');
              }, index * 200);
            });
          }
        });
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
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with drag-and-drop functionality, team collaboration features, and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Redux", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work and skills with modern animations and dark/light theme support.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Recipe Finder",
      description: "A recipe discovery platform with advanced search filters, meal planning features, and nutritional information.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      technologies: ["React", "Context API", "Spoonacular API", "Local Storage"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with group messaging, file sharing, and emoji reactions built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["React", "Socket.io", "Express.js", "JWT", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 scroll-animate">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground scroll-animate">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={project.title} className="card-glow bg-card border-border overflow-hidden scroll-animate group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button variant="secondary" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="border-foreground/20 text-foreground hover:bg-foreground/10">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center scroll-animate">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={project.title} className="card-glow bg-card border-border overflow-hidden scroll-animate group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-muted">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex space-x-2 w-full">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
