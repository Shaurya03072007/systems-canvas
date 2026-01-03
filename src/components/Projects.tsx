import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "@/data/allProjects";

const Projects = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
                <span className="text-primary">#</span> Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Real systems built to understand internals, not just call APIs. Each project represents genuine problem-solving and engineering depth.
              </p>
            </div>
            <Link
              to="/all-projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 font-mono text-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden ${
                project.featured
                  ? "border-warning/50 bg-gradient-to-br from-warning/10 via-card to-card"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 bg-warning/20 text-warning rounded-full border border-warning/30">
                    FLAGSHIP PROJECT
                  </span>
                </div>
              )}

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl ${
                    project.featured ? "bg-warning/20" : "bg-primary/10"
                  } shrink-0`}>
                    <project.icon className={`w-8 h-8 ${
                      project.featured ? "text-warning" : "text-primary"
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            project.featured ? "bg-warning" : "bg-primary"
                          }`} />
                          <span className="text-foreground/80">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1.5 bg-secondary text-muted-foreground rounded-md border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      {project.links.map((link) => {
                        const IconComponent = link.type === "github" ? Github : ExternalLink;
                        return (
                          <a
                            key={link.url}
                            href={link.url}
                            target={link.url.startsWith("http") ? "_blank" : undefined}
                            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                          >
                            <IconComponent className="w-4 h-4" />
                            {link.label}
                          </a>
                        );
                      })}
                    </div>
                    
                    {/* Published Apps */}
                    {project.publishedApps && project.publishedApps.length > 0 && (
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-xs font-mono text-muted-foreground mb-2">Published:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.publishedApps.map((app) => (
                            <a
                              key={app.url}
                              href={app.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 bg-primary/10 text-primary rounded border border-primary/20 hover:bg-primary/20 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>{app.platform}</span>
                              <span className="text-muted-foreground">•</span>
                              <span>{app.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
