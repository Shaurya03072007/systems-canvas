import { motion } from "framer-motion";
import { 
  Cpu, 
  Server, 
  Database, 
  Shield, 
  Code2, 
  Wrench,
  Brain,
  Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Low-Level ML & GPU",
    icon: Zap,
    color: "text-warning",
    skills: [
      "CUDA Programming",
      "Transformer Architecture (from scratch)",
      "GPU Memory Management",
      "Kernel Optimization",
      "Matrix Operations",
      "Parallel Computing"
    ],
    highlight: true
  },
  {
    title: "Frontend",
    icon: Code2,
    color: "text-primary",
    skills: [
      "React (Hooks)",
      "HTML / CSS / JavaScript",
      "TypeScript",
      "Responsive Design",
      "Vite"
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-primary",
    skills: [
      "Node.js / Express",
      "REST APIs",
      "WebSocket / Socket.io",
      "Real-time Systems",
      "Session Management"
    ]
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "text-primary",
    skills: [
      "File-based Persistence",
      "Supabase",
      "Scaling Considerations",
      "Data Modeling"
    ]
  },
  {
    title: "Embedded & Hardware",
    icon: Cpu,
    color: "text-terminal",
    skills: [
      "STM32 (Register-level)",
      "ESP32 / ESP32-S3",
      "Arduino UNO R4 / Q",
      "Raspberry Pi",
      "C / C++ for MCUs",
      "SPI / I2C / UART",
      "LoRa (RA-02)"
    ]
  },
  {
    title: "DevOps & Deployment",
    icon: Wrench,
    color: "text-primary",
    skills: [
      "Git & Version Control",
      "Render",
      "Environment Config",
      "Vite Builds",
      "Free-tier Constraints"
    ]
  },
  {
    title: "Security & Privacy",
    icon: Shield,
    color: "text-destructive",
    skills: [
      "Anonymous System Design",
      "E2E Encryption Concepts",
      "Threat Modeling",
      "Broker-based Routing",
      "nmap Basics"
    ]
  },
  {
    title: "Mathematics",
    icon: Brain,
    color: "text-primary",
    skills: [
      "Probability & Statistics",
      "Bayes' Theorem",
      "Combinatorics",
      "ML Foundations",
      "Abstract Reasoning"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
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
            <span className="text-primary">#</span> Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Systems-level curiosity across the full stack—from GPU kernels to embedded firmware to real-time web applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border transition-all duration-300 hover:border-primary/50 ${
                category.highlight 
                  ? "border-warning/50 bg-warning/5 col-span-1 md:col-span-2" 
                  : "border-border bg-card/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-secondary ${category.color}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-mono font-semibold text-foreground">
                  {category.title}
                </h3>
                {category.highlight && (
                  <span className="text-xs font-mono px-2 py-0.5 bg-warning/20 text-warning rounded">
                    RARE
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Engineering mindset callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-xl border border-primary/30 bg-primary/5"
        >
          <h3 className="font-mono font-bold text-xl mb-4 text-foreground">
            Engineering Mindset
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Tradeoff analysis (latency vs reliability vs cost)",
              "Understands scaling realities (1 → 10k → 1M users)",
              "Questions assumptions aggressively",
              "Thinks in bottlenecks, not buzzwords"
            ].map((trait, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1">→</span>
                <span className="text-sm text-muted-foreground">{trait}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
