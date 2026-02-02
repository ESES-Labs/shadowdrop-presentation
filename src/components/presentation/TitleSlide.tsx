import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const TitleSlide = () => {
  return (
    <div className="container px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8"
      >
        <Shield className="w-4 h-4 text-primary" />
        <span className="text-sm text-muted-foreground font-mono">Private Airdrops on Solana</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
      >
        <span className="text-foreground">Shadow</span>
        <span className="text-primary text-glow">Drop</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
      >
        Anonymous & Private Token Distribution
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 flex items-center justify-center gap-2 text-muted-foreground/50"
      >
        <span className="text-sm font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TitleSlide;
