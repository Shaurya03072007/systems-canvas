import { motion } from "framer-motion";
import { 
  Target, 
  Dumbbell, 
  Lightbulb, 
  Flame,
  Eye,
  Shield
} from "lucide-react";
import { personalInfo } from "@/data/personal";

const traits = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "Self-directed learner. Breaks systems to first principles. Will debug for hours without giving up."
  },
  {
    icon: Dumbbell,
    title: "Discipline",
    description: "Competitive basketball player. Gym consistency. High physical endurance translates to cognitive stamina."
  },
  {
    icon: Lightbulb,
    title: "Ideation",
    description: "Startup-oriented thinking. Constant prototyping. Builds tools for personal use first."
  },
  {
    icon: Flame,
    title: "Intensity",
    description: "High standards. Low tolerance for shallow answers. Values depth over breadth."
  },
  {
    icon: Eye,
    title: "Focus",
    description: "Prefers isolation when it improves output. Deep work over meetings."
  },
  {
    icon: Shield,
    title: "Autonomy",
    description: "Values privacy and independence. Designs systems that respect both."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            <span className="text-primary">#</span> About
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            The traits that drive how I work and what I build.
          </p>
        </motion.div>

        {/* Traits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <trait.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-foreground mb-2">
                    {trait.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-mono text-foreground/80 italic">
            "Interested in <span className="text-primary">revolutionary</span>, not incremental ideas."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
