import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

const SlideWrapper = ({ children, className = "" }: SlideWrapperProps) => {
  return (
    <section className={`min-h-screen w-full flex items-center justify-center snap-start snap-always relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SlideWrapper;
