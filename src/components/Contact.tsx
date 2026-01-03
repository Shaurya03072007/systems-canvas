import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/personal";

const Contact = () => {
  const { contact, social } = personalInfo;

  return (
    <section id="contact" className="py-24 relative bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">#</span> Get In Touch
          </h2>
          <p className="text-muted-foreground mb-12">
            Interested in systems engineering, embedded development, or privacy-first architectures? 
            Let's talk.
          </p>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-mono font-semibold hover:glow transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4">
              {social.github && (
                <a
                  href={social.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.github.name}
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.linkedin.name}
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-mono">
            <p>© {new Date().getFullYear()} — Built with precision.</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-terminal rounded-full animate-pulse" />
              <span>Systems Thinking</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
