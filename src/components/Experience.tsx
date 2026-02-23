const experiences = [


  {
    role: "Python programming intern",
    org: "Codetech IT Solutions\n",
    duration: "jun 2025 - july 2025",
    contributions: [
      "Completed 4 AI-based Python tasks and implemented real-world problem solutions.",

    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">04.</span>
          Experience
          <span className="hidden md:block h-px bg-border flex-1 ml-4" />
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.role + exp.org} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="bg-card border rounded-lg p-6 hover:glow-border transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold">
                      {exp.role}{" "}
                      <span className="text-primary">@ {exp.org}</span>
                    </h3>
                    <span className="font-mono text-sm text-muted-foreground mt-1 sm:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {exp.contributions.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
