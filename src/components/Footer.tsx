import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/chandrashekar19",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chandrashekar19/",
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:chandra.kalal1901@gmail.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-3xl font-bold gradient-text hover:scale-105 transition-transform mb-6 inline-block"
          >
            Chandrashekar kalal
          </button>

          {/* Quote */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            "Code is like humor. When you have to explain it, it's bad." - Cory
            House
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/20 transition-all hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Chandrashekar kalal. Made with
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              and passion for coding.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
