import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">01.</span>
          About Me
          <span className="hidden md:block h-px bg-border flex-1 ml-4" />
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm Harish Prashath, a Computer Science student with a deep passion for Software developer. I enjoy solving complex problems and building scalable systems that make a difference.
            </p>
            <p>
                I’m a pre-final year Computer Science Engineering student passionate about coding and problem solving. I enjoy building practical projects and continuously improving my skills in Python, Java, and software development.
            </p>

          </div>

          <div className="md:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg bg-card border-2 border-primary/30 flex items-center justify-center overflow-hidden group-hover:border-primary transition-colors">
                <User size={80} className="text-muted-foreground/30" />
              </div>
              <div className="absolute inset-0 rounded-lg border-2 border-primary translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
