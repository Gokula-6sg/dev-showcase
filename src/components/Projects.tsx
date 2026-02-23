import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SpamShield– Machine Learning Based Email Spam Detection\n",
    description:
      " Built an email spam detection system using NLP preprocessing and TF-IDF feature extraction.",
    tech: ["Python", "NLP", "LSTM", "Naive bayes"],
    github: "https://github.com/Harishprashath/mini_project",
    live: null,
  },
  {
    title: "Student Smart Ai",
    description:
      "Built an system for students to know about core details specific Topics",
    tech: ["python", "C", "NASM", "QEMU"],
    github: "https://github.com/Harishprashath/StudySmart-AI",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">03.</span>
          Projects
          <span className="hidden md:block h-px bg-border flex-1 ml-4" />
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border rounded-lg p-6 flex flex-col hover:glow-border hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-primary/80 bg-primary/10 px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
