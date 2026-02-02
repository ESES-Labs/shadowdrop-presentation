import { motion } from "framer-motion";

const technologies = [
  {
    name: "Solana",
    tag: "L1",
    description: "Sub-second finality, minimal fees",
  },
  {
    name: "Noir",
    tag: "ZK",
    description: "Zero-knowledge proof circuits",
  },
  {
    name: "Light Protocol",
    tag: "Privacy",
    description: "State compression & privacy layer",
  },
];

const TechStackSlide = () => {
  return (
    <div className="container px-6 max-w-5xl">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-primary uppercase tracking-wider"
        >
          Technology
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Built on the Best
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {technologies.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-xl border border-border bg-card text-center card-hover"
          >
            <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
              {tech.tag}
            </span>
            <h3 className="text-3xl font-bold mb-3">{tech.name}</h3>
            <p className="text-muted-foreground">{tech.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Flow diagram */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 p-6 rounded-xl border border-border bg-card/50"
      >
        <div className="flex items-center justify-center gap-4 flex-wrap font-mono text-sm">
          <span className="text-foreground">Client</span>
          <span className="text-primary">→</span>
          <span className="text-primary">Noir Proofs</span>
          <span className="text-primary">→</span>
          <span className="text-foreground">Light Protocol</span>
          <span className="text-primary">→</span>
          <span className="text-foreground">Solana</span>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackSlide;
