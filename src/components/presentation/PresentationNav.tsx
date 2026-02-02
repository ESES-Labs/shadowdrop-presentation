import { motion } from "framer-motion";

interface PresentationNavProps {
  currentSlide: number;
  totalSlides: number;
}

const PresentationNav = ({ currentSlide, totalSlides }: PresentationNavProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container px-6">
        <div className="flex items-center justify-between h-14">
          <span className="text-lg font-bold">
            Shadow<span className="text-primary">Drop</span>
          </span>

          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted-foreground">
              {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default PresentationNav;
