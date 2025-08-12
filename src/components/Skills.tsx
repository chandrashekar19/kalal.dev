import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
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
              }, index * 100);
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

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 60 },
      ],
    },
    {
      title: "Tools & Libraries",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Webpack/Vite", level: 75 },
        { name: "Redux/Zustand", level: 80 },
        { name: "React Query", level: 65 },
        { name: "Jest/Testing", level: 70 },
        { name: "Figma", level: 75 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 50 },
        { name: "Express.js", level: 50 },
        { name: "PostgreSQL", level: 50 },
        { name: "MongoDB", level: 60 },
        { name: "REST APIs", level: 80 },
        { name: "GraphQL", level: 60 },
      ],
    },
  ];

  const additionalSkills = [
    "Responsive Design",
    "Performance Optimization",
    "SEO",
    "Accessibility",
    "Agile/Scrum",
    "Code Review",
    "CI/CD",
    "AWS Basics",
    "Docker Basics",
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 scroll-animate">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground scroll-animate">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="card-glow bg-card border-border scroll-animate"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${
                                (categoryIndex * 6 + skillIndex) * 0.1
                              }s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="card-glow bg-card border-border scroll-animate">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-center">
                Additional Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {additionalSkills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
