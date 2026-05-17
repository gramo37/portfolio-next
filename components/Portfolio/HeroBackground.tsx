"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    className:
      "left-[5%] top-[10%] h-72 w-72 bg-primary/25 blur-[100px] dark:bg-primary/20",
    animate: { x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] },
    duration: 14,
  },
  {
    className:
      "right-[0%] top-[20%] h-80 w-80 bg-violet-500/20 blur-[110px] dark:bg-violet-500/15",
    animate: { x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] },
    duration: 18,
  },
  {
    className:
      "bottom-[5%] left-[30%] h-64 w-64 bg-cyan-400/15 blur-[90px] dark:bg-cyan-400/10",
    animate: { x: [0, 30, 0], y: [0, -25, 0], scale: [1, 1.08, 1] },
    duration: 16,
  },
];

export default function HeroBackground() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(var(--primary)/0.12),transparent)]" />
      <motion.div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.className}`}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
