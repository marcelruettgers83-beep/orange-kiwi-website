import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export const Reveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  duration = 0.5,
  y = 75,
  className = ""
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: [0.25, 0.25, 0, 1] }} // Custom easing for "sleek" feel
      >
        {children}
      </motion.div>
    </div>
  );
};
