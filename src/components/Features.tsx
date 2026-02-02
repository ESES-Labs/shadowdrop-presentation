import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Zap, Users, FileCheck } from "lucide-react";

const features = [
  {
    icon: EyeOff,
    title: "Hidden Sender",
    description: "Your identity remains completely anonymous. No one can trace airdrops back to you.",
  },
  {
    icon: Lock,
    title: "Encrypted Recipients",
    description: "Recipient lists are never exposed. Only eligible addresses can claim their tokens.",
  },
  {
    icon: Eye,
    title: "Private Amounts",
    description: "Token amounts are hidden from public view using zero-knowledge proofs.",
  },
  {
    icon: Zap,
    title: "Instant Distribution",
    description: "Leverage Solana's speed for near-instant airdrop claims with minimal fees.",
  },
  {
    icon: Users,
    title: "Scalable Claims",
    description: "Handle thousands of recipients efficiently with Light Protocol's compression.",
  },
  {
    icon: FileCheck,
    title: "Verifiable Privacy",
    description: "Noir circuits ensure cryptographic guarantees that privacy claims are real.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
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
            Privacy by <span className="text-primary">Design</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every component of ShadowDrop is engineered for maximum privacy without sacrificing usability.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-6 rounded-xl bg-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
