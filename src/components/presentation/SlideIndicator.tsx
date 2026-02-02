import { motion } from "framer-motion";

interface SlideIndicatorProps {
  total: number;
  current: number;
  onSlideClick: (index: number) => void;
}

const SlideIndicator = ({ total, current, onSlideClick }: SlideIndicatorProps) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onSlideClick(i)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === current 
              ? "bg-primary w-2 h-6" 
              : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
          }`}
          whileHover={{ scale: 1.2 }}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default SlideIndicator;
