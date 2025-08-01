import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Consultant - (rayvector technologies)",
      location: "Banglore , India",
      period: "June 2024 - Present",
      type: "Contract",
      description: "",
      achievements: [
        "Engineered interactive GIS features using React and Google Maps API for enhanced map usability.",
        "Integrated KML layers to display custom geospatial data on maps",
        "Added Google Street View to support detailed land-use and location insights.",
        "Built interactive dashboards to help clients make better real-time decisions with visualized map data",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Zustand",
        "Google Maps API",
        "Bootstrap",
        "Material-UI",
        "KML",
      ],
    },
    {
      title: "React Developer",
      company: "Infinity Learn.",
      location: "Hyderabad, Telangana",
      period: "Jun 2023 - Dec 2023",
      type: "Full-time",
      description: "",
      achievements: [
        "Improved login and OTP flow using Formik, Yup, and React Query, reducing failure rates by 40%.",
        "Ensured full mobile responsiveness for a high-traffic student-focused platform.",
        "Took a short professional break for personal reasons while actively contributing to side projects.",
        "Continued improving frontend skills through hands-on practice with React and JavaScript.",
      ],
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "Material-UI",
        "Git",
        "Figma",
      ],
    },
    {
      title: "UI Engineer",
      company: "Banyan Cloud",
      location: "Banglore, India",
      period: "May 2022 - Mar 2023",
      type: "Full Time",
      description: "",
      achievements: [
        "Assisted in developing admin dashboards with CRUD operations using React and Redux to support internal workflows.",
        "Contributed to building reusable components and implemented basic code splitting for better maintainability.",
        "Used Storybook to develop and test UI components, helping maintain design consistency.",
        "Gained hands-on experience with JavaScript, focusing on clean and scalable frontend practices.",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Redux",
        "Formik",
        "Yup",
        "Storybook",
        "Bootstrap",
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 scroll-animate">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground scroll-animate">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative scroll-animate">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block shadow-glow"></div>

                  <Card className="card-glow bg-card border-border md:ml-16">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-2" />
                              <span className="font-medium">
                                {experience.company}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{experience.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{experience.period}</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary w-fit"
                        >
                          {experience.type}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start"
                              >
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-muted-foreground">
                                  {achievement}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-primary/20 text-primary bg-primary/5"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
