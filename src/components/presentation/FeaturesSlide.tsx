import { motion } from "framer-motion";
import { EyeOff, Lock, Zap, Users } from "lucide-react";

const features = [
  { icon: EyeOff, title: "Anonymous", value: "100%" },
  { icon: Lock, title: "Encrypted", value: "E2E" },
  { icon: Zap, title: "Finality", value: "<1s" },
  { icon: Users, title: "Recipients", value: "∞" },
];

const FeaturesSlide = () => {
  return (
    <div className="container px-6 max-w-5xl">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-mono text-primary uppercase tracking-wider"
        >
          Key Metrics
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Built for Scale
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-xl border border-border bg-card text-center"
          >
            <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{feature.value}</div>
            <div className="text-muted-foreground">{feature.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSlide;
