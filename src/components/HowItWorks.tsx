import { motion } from "framer-motion";
import { Upload, Shield, Send, Wallet } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Create Airdrop",
    description: "Upload your recipient list and configure token amounts. All data is encrypted client-side.",
  },
  {
    number: "02",
    icon: Shield,
    title: "Generate Proofs",
    description: "Noir circuits create zero-knowledge proofs that verify eligibility without revealing data.",
  },
  {
    number: "03",
    icon: Send,
    title: "Deploy Drop",
    description: "Submit the compressed, private airdrop to Solana via Light Protocol.",
  },
  {
    number: "04",
    icon: Wallet,
    title: "Claim Tokens",
    description: "Eligible recipients prove ownership and claim tokens anonymously.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 relative bg-card/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to complete privacy-preserving token distribution.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex items-start gap-6 mb-12 last:mb-0"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-16 bg-border" />
              )}

              {/* Number Circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-sm font-mono text-primary">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
