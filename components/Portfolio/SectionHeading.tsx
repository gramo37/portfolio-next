"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
