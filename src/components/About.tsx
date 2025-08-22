import { useEffect, useRef } from "react";
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices and industry standards.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Creative solutions to complex challenges with attention to detail and performance.",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Collaborative approach to development with excellent communication skills.",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description:
        "Quickly adapting to new technologies and frameworks in the ever-evolving tech landscape.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 scroll-animate">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground scroll-animate">
              Passionate developer with 3+ years of experience crafting digital
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-animate">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated React developer with 3+ years of experience
                building modern web applications. My journey started with a
                fascination for how websites work, and it's evolved into a
                passion for creating seamless user experiences through clean,
                efficient code.
              </p>
            </div>

            <div className="scroll-animate">
              <Card className="card-glow bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Quick Facts
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-semibold">3+ Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-semibold">
                        Hyderabad, Telangana
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Specialty:</span>
                      <span className="font-semibold">
                        Frontend Development
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interests:</span>
                      <span className="font-semibold">
                        React & Next.js , UI/UX
                        Design
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="card-glow bg-card border-border scroll-animate text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
