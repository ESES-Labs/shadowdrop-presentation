import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, FileText } from "lucide-react";

const CTASlide = () => {
  return (
    <div className="container px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-7xl font-bold mb-6">
          Ready to <span className="text-primary text-glow">Drop</span>?
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-12">
          Start distributing tokens privately. No traces. No leaks. Just privacy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="xl">
            Launch App
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="xl">
            <FileText className="w-5 h-5" />
            Documentation
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-muted-foreground">
          <a href="#" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <span className="text-border">|</span>
          <span className="font-mono text-sm">Built on Solana</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CTASlide;
