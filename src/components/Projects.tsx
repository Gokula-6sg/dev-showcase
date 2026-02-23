import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "College Forum Platform",
    description:
      "A full-stack discussion forum for college students to share knowledge, ask questions, and collaborate on projects. Features real-time updates and role-based access.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Network Monitor",
    description:
      "An AI-powered dashboard for monitoring network traffic, detecting anomalies, and generating security reports. Built with machine learning models for intrusion detection.",
    tech: ["Python", "Flask", "TensorFlow", "React"],
    github: "#",
    live: "#",
  },
  {
    title: "Timetable Scheduler",
    description:
      "An intelligent scheduling system that generates conflict-free timetables using constraint satisfaction algorithms. Supports multiple departments and resource management.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    github: "#",
    live: "#",
  },
  {
    title: "MiniBootOS",
    description:
      "A minimal operating system bootloader written in x86 Assembly. Boots from BIOS, initializes protected mode, and provides a basic command-line interface.",
    tech: ["Assembly", "C", "NASM", "QEMU"],
    github: "#",
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
