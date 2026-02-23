const experiences = [
  {
    role: "Backend Developer Intern",
    org: "TechStart Solutions",
    duration: "Jun 2025 – Aug 2025",
    contributions: [
      "Developed RESTful APIs using Node.js and Express.js serving 10K+ daily requests",
      "Implemented JWT-based authentication and role-based access control",
      "Optimized database queries reducing response times by 40%",
    ],
  },
  {
    role: "Cybersecurity Team Lead",
    org: "University CTF Club",
    duration: "Sep 2024 – Present",
    contributions: [
      "Led a team of 8 members in national-level CTF competitions",
      "Conducted weekly workshops on network security and penetration testing",
      "Achieved top 10 ranking in 3 inter-university competitions",
    ],
  },
  {
    role: "Full Stack Developer",
    org: "HackathonX – Smart Campus Hackathon",
    duration: "Mar 2025",
    contributions: [
      "Built a real-time campus navigation system in 24 hours",
      "Integrated Google Maps API with custom indoor mapping",
      "Won 2nd place among 50+ participating teams",
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
