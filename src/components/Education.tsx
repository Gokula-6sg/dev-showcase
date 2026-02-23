import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">05.</span>
          Education
          <span className="hidden md:block h-px bg-border flex-1 ml-4" />
        </h2>

        <div className="bg-card border rounded-lg p-8 max-w-2xl hover:glow-border transition-shadow">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-primary font-mono text-sm mb-2">
                National Institute of Technology
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                2023 – 2027 (Expected) • CGPA: 8.5/10
              </p>
              <div>
                <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Operating Systems",
                    "Computer Networks",
                    "Database Management",
                    "Cryptography",
                    "Software Engineering",
                    "Web Technologies",
                  ].map((course) => (
                    <span
                      key={course}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
