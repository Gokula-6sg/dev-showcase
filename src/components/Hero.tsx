import { ArrowDown, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <p className="font-mono text-primary text-sm md:text-base mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Harish Prashath<span className="text-primary">.</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-muted-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
          I build things for the web.
        </h2>
        <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Pre-final year Computer Science Student
        </p>
        <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          I'm a passionate CS student specializing in building software. Currently seeking internship opportunities to grow and contribute to impactful projects.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            <ArrowDown size={16} />
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1NAa3BQ79ybgIZfN8YTCBLwQvP1TEwWfr/view?usp=drive_link"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm hover:opacity-90 transition-opacity"
          >
            <FileDown size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
