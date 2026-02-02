import { motion } from "framer-motion";
import { Upload, Shield, Send, Wallet, ArrowRight } from "lucide-react";

const steps = [
  { icon: Upload, title: "Create", desc: "Upload encrypted recipient list" },
  { icon: Shield, title: "Prove", desc: "Generate ZK proofs with Noir" },
  { icon: Send, title: "Deploy", desc: "Submit to Light Protocol" },
  { icon: Wallet, title: "Claim", desc: "Recipients claim anonymously" },
];

const HowItWorksSlide = () => {
  return (
    <div className="container px-6 max-w-6xl">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-primary uppercase tracking-wider"
        >
          How It Works
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Four Simple Steps
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center"
          >
            <div className="p-6 rounded-xl border border-border bg-card text-center min-w-[180px]">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">{step.title}</div>
              <div className="text-sm text-muted-foreground">{step.desc}</div>
            </div>
            
            {i < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-muted-foreground mx-4 hidden lg:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSlide;
