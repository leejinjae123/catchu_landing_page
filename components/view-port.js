import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ViewPort = ({ children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        root: null,
        threshold: 0.7,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: hasAnimated ? 1 : 0, // Keep opacity at 1 if animated
        y: hasAnimated ? 0 : 100,     // Keep y at 0 if animated
      }}
      transition={{ duration: 0.5 }} // Optional: Add a transition duration
    >
      {children}
    </motion.div>
  );
};

export default ViewPort;
