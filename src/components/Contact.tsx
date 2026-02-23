import { useState, FormEvent } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // placeholder — connect to backend later
    alert("Message sent! (placeholder)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <span className="font-mono text-primary text-lg">06.</span>
          Get In Touch
          <span className="hidden md:block h-px bg-border flex-1 ml-4" />
        </h2>

        <p className="text-muted-foreground max-w-lg mb-12">
          I'm currently looking for internship opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <a
              href="mailto:alex.johnson@email.com"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-card border flex items-center justify-center group-hover:glow-border transition-shadow">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">Email</p>
                <p className="text-sm text-foreground">alex.johnson@email.com</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-card border flex items-center justify-center group-hover:glow-border transition-shadow">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">LinkedIn</p>
                <p className="text-sm text-foreground">linkedin.com/in/alexjohnson</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-card border flex items-center justify-center group-hover:glow-border transition-shadow">
                <Github size={20} />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground">GitHub</p>
                <p className="text-sm text-foreground">github.com/alexjohnson</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-mono text-muted-foreground block mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md bg-card border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground block mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md bg-card border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
            </div>
            <div>
              <label className="text-sm font-mono text-muted-foreground block mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-md bg-card border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
