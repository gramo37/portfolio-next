"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";
import { scrollViewport, staggerContainer } from "../../lib/motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * useInView + animate is more reliable than whileInView on mobile browsers.
 */
export default function ScrollReveal({
  children,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, scrollViewport);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
