import { useEffect, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-animate");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("in-view");
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
      title: "Business Analytics Dashboard",
      description:
        "A responsive and performance-focused admin dashboard for tracking business KPIs, visualizing analytics, and managing users and activity data. Built with a focus on speed, usability, and real-time insights.",
      image: "/images/buisness.png",
      technologies: [
        "React",
        "Zustand",
        "Tailwind CSS",
        "Recharts",
        "JWT Auth",
      ],
      liveUrl: "https://your-live-link.com",
      githubUrl: "https://github.com/your-repo-business-dashboard",
      featured: true,
    },

    {
      title: "Task Manager",
      description:
        "A real-time Kanban-style task management app with drag-and-drop boards, live sync via Firebase, and offline persistence using Redux. Designed for teams to collaborate and organize work visually.",
      image: "/images/task-board.png",
      technologies: ["React", "Redux", "Firebase", "Tailwind CSS", "dnd-kit"],
      liveUrl: "https://nimble-boards.vercel.app/",
      githubUrl: "https://github.com/chandrashekar19/nimble-boards",
      featured: true,
    },
    {
      title: "Job Tracker & Resume Builder",
      description:
        "An all-in-one job application tracker with resume builder and AI-powered cover letter generator. Built to help job seekers manage applications and create personalized career documents efficiently.",
      image: "/images/Job-board.png",
      technologies: [
        "React",
        "Zustand",
        "Tailwind CSS",
        // "OpenAI API",
        "html2pdf",
      ],
      liveUrl: "https://apply-and-build.vercel.app/",
      githubUrl: "https://github.com/chandrashekar19/apply-and-build",
      featured: true,
    },
    {
      title: "Snapgram",
      description:
        "A modern social media app with a native mobile feel, infinite scroll, and smooth performance. Built using React, TypeScript, Appwrite, and React Query for real-time updates and seamless UX.",
      technologies: [
        "React",
        "TypeScript",
        "Appwrite",
        "Tailwind CSS",
        "React Query",
      ],
      image: "/images/snapgram.png",
      liveUrl: "https://snapgram-orcin-nu.vercel.app/",
      githubUrl: "https://github.com/chandrashekar19/social-media-app",
      featured: true,
    },
    {
      title: "Chatter fusion",
      description:
        "A real-time chat application built using React, Tailwind CSS, Zustand, and Socket.IO. Users can join rooms and send messages instantly.",
      technologies: [
        "React js",
        "JavaScript",
        "tailwind css",
        "node js",
        "zustand",
        "socket.io",
      ],
      image: "images/chatter.png",
      liveUrl: "https://chatter-stream.vercel.app/",
      githubUrl: "https://github.com/chandrashekar19/chatter-fusion",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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
              <Card
                key={project.title}
                className="card-glow bg-card border-border overflow-hidden scroll-animate group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button variant="secondary" size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-foreground/20 text-foreground hover:bg-foreground/10"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
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
            <h3 className="text-3xl font-bold mb-8 text-center scroll-animate">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="card-glow bg-card border-border overflow-hidden scroll-animate group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary"
                        >
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
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
