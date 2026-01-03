import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { allProjects } from "@/data/allProjects";
import Navigation from "@/components/Navigation";
import type { SkillLevel, ImpactLevel } from "@/data/projects";

const AllProjects = () => {
  // Group projects by skill level
  const groupedProjects = {
    expert: allProjects.filter(p => p.skillLevel?.level === "expert"),
    intermediate: allProjects.filter(p => p.skillLevel?.level === "intermediate"),
    beginner: allProjects.filter(p => p.skillLevel?.level === "beginner"),
    unlabeled: allProjects.filter(p => !p.skillLevel),
  };

  const getLevelBadgeColor = (level: SkillLevel) => {
    switch (level) {
      case "expert":
        return "bg-warning/20 text-warning border-warning/30";
      case "intermediate":
        return "bg-primary/20 text-primary border-primary/30";
      case "beginner":
        return "bg-terminal/20 text-terminal border-terminal/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getImpactBadgeColor = (impact: ImpactLevel) => {
    switch (impact) {
      case "high":
        return "bg-destructive/20 text-destructive border-destructive/30";
      case "medium":
        return "bg-primary/20 text-primary border-primary/30";
      case "low":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getLevelLabel = (level: SkillLevel) => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  const getImpactLabel = (impact: ImpactLevel) => {
    return impact.charAt(0).toUpperCase() + impact.slice(1);
  };

  const renderProjectCard = (project: typeof allProjects[0], index: number) => {
    const skillLevel = project.skillLevel;

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group relative rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
      >
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            {/* Icon */}
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <project.icon className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3">
              {/* Title and Level Badges */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
                {skillLevel && (
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-full border ${getLevelBadgeColor(
                        skillLevel.level
                      )}`}
                    >
                      {getLevelLabel(skillLevel.level)} Level
                    </span>
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded-full border ${getImpactBadgeColor(
                        skillLevel.impact
                      )}`}
                    >
                      {getImpactLabel(skillLevel.impact)} Impact
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs font-mono px-2 py-1 bg-secondary text-muted-foreground rounded border border-border"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 bg-secondary/50 text-muted-foreground rounded border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {project.links.map((link) => {
                  const IconComponent = link.type === "github" ? Github : ExternalLink;
                  return (
                    <a
                      key={link.url}
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                      {link.label}
                    </a>
                  );
                })}
                {project.publishedApps && project.publishedApps.length > 0 && (
                  <a
                    href={project.publishedApps[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live App
                  </a>
                )}
              </div>

              {/* Status Badge */}
              {project.status && (
                <div className="pt-2">
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded ${
                      project.status === "completed"
                        ? "bg-terminal/20 text-terminal"
                        : project.status === "in-progress"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {project.status === "in-progress" ? "In Progress" : project.status}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-24">
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="text-primary">#</span> All Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Complete collection of projects with skill level and impact ratings. 
              Each project represents a learning journey and problem-solving challenge.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground font-mono">
              <span>Total Projects: {allProjects.length}</span>
              <span>•</span>
              <span>Expert: {groupedProjects.expert.length}</span>
              <span>•</span>
              <span>Intermediate: {groupedProjects.intermediate.length}</span>
              <span>•</span>
              <span>Beginner: {groupedProjects.beginner.length}</span>
            </div>
          </motion.div>

          {/* Projects by Level */}
          <div className="space-y-16">
            {/* Expert Level */}
            {groupedProjects.expert.length > 0 && (
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-mono mb-2">
                    <span className="text-warning">Expert Level</span>{" "}
                    <span className="text-muted-foreground">(High Impact)</span>
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Advanced implementations requiring deep technical knowledge and system-level understanding.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {groupedProjects.expert.map((project, index) =>
                    renderProjectCard(project, index)
                  )}
                </div>
              </section>
            )}

            {/* Intermediate Level */}
            {groupedProjects.intermediate.length > 0 && (
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-mono mb-2">
                    <span className="text-primary">Intermediate Level</span>{" "}
                    <span className="text-muted-foreground">(Medium-High Impact)</span>
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Production-ready projects with moderate complexity and practical applications.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {groupedProjects.intermediate.map((project, index) =>
                    renderProjectCard(project, index)
                  )}
                </div>
              </section>
            )}

            {/* Beginner Level */}
            {groupedProjects.beginner.length > 0 && (
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-mono mb-2">
                    <span className="text-terminal">Beginner Level</span>{" "}
                    <span className="text-muted-foreground">(Learning & Exploration)</span>
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Learning projects and simple implementations that demonstrate foundational understanding.
                  </p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {groupedProjects.beginner.map((project, index) =>
                    renderProjectCard(project, index)
                  )}
                </div>
              </section>
            )}

            {/* Unlabeled Projects */}
            {groupedProjects.unlabeled.length > 0 && (
              <section>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-mono mb-2">
                    Other Projects
                  </h2>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {groupedProjects.unlabeled.map((project, index) =>
                    renderProjectCard(project, index)
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

