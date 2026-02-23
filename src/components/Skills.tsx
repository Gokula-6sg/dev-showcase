const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "HTML", "Python", "C" , "SQL"],
  },
  {
    title: "Concepts",
    skills: ["DBMS", "OOP", "Computer Networks", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: [ "HTML", "CSS", "Tailwind CSS"],
  },

  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vs code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">02.</span>
          Skills
          <span className="hidden md:block h-px bg-border flex-1 ml-4" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border rounded-lg p-6 hover:glow-border transition-shadow group"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-md font-mono group-hover:bg-primary/10 transition-colors"
                  >
                    {skill}
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

export default Skills;
