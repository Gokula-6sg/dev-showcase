import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:alex.johnson@email.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by Alex Johnson
        </p>
      </div>
    </footer>
  );
};

export default Footer;
