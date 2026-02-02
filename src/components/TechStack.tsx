import { motion } from "framer-motion";

const technologies = [
  {
    name: "Solana",
    description: "High-performance blockchain with sub-second finality and minimal fees.",
    tag: "L1 Blockchain",
  },
  {
    name: "Noir",
    description: "Domain-specific language for writing zero-knowledge circuits with Rust-like syntax.",
    tag: "ZK Framework",
  },
  {
    name: "Light Protocol",
    description: "State compression layer enabling scalable private state on Solana.",
    tag: "Privacy Layer",
  },
];

const TechStack = () => {
  return (
    <section className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built on the <span className="text-primary">Best</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ShadowDrop combines cutting-edge cryptography with Solana's performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-xl border border-border bg-card overflow-hidden group card-hover"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
                  {tech.tag}
                </span>
                <h3 className="text-2xl font-bold mb-3">{tech.name}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                <span className="font-mono text-sm">User Client</span>
              </div>
              <span className="text-muted-foreground">→</span>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary/70" />
                <span className="font-mono text-sm">Noir Proofs</span>
              </div>
              <span className="text-muted-foreground">→</span>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary/50" />
                <span className="font-mono text-sm">Light Protocol</span>
              </div>
              <span className="text-muted-foreground">→</span>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary/30" />
                <span className="font-mono text-sm">Solana</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
