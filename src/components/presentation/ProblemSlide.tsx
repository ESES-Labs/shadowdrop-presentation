import { motion } from "framer-motion";
import { AlertTriangle, Eye, Database, Link } from "lucide-react";

const problems = [
  { icon: Eye, text: "Sender identity is public" },
  { icon: Database, text: "Recipient lists are exposed" },
  { icon: Link, text: "Token amounts are traceable" },
];

const ProblemSlide = () => {
  return (
    <div className="container px-6 max-w-5xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-destructive mb-4"
        >
          <AlertTriangle className="w-5 h-5" />
          <span className="text-sm font-mono uppercase tracking-wider">The Problem</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Traditional Airdrops <br />
          <span className="text-muted-foreground">Lack Privacy</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-8 rounded-xl border border-destructive/20 bg-destructive/5 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
              <problem.icon className="w-8 h-8 text-destructive" />
            </div>
            <p className="text-xl font-medium">{problem.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSlide;
