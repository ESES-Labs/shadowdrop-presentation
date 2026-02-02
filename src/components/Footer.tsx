import { motion } from "framer-motion";
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              Shadow<span className="text-primary">Drop</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Discord</a>
            <a href="#" className="hover:text-foreground transition-colors">Blog</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>© 2024 ShadowDrop. Privacy-first token distribution on Solana.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
