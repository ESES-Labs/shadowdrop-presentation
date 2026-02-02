import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";

const solutions = [
  "Hidden sender identity",
  "Encrypted recipient lists",
  "Private token amounts",
  "Verifiable claims with ZK proofs",
];

const SolutionSlide = () => {
  return (
    <div className="container px-6 max-w-5xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary mb-4"
          >
            <Shield className="w-5 h-5" />
            <span className="text-sm font-mono uppercase tracking-wider">The Solution</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Shadow<span className="text-primary">Drop</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Zero-knowledge proof powered airdrops that keep everything private—from sender to recipient to amount.
          </p>

          <div className="space-y-4">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-lg">{solution}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl border border-border bg-card p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl font-bold text-primary text-glow mb-4">100%</div>
              <div className="text-2xl text-muted-foreground">Private</div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionSlide;
