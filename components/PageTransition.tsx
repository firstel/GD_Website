"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

// Simple, smooth fade transition
const pageVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const LoadingBar = () => (
  <motion.div
    className="page-loading"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  />
);

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="page-transition-wrapper">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingBar key="loading" />}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 