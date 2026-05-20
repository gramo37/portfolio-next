"use client";

import { motion } from "framer-motion";
import { data } from "../../constants";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { fadeInUp, staggerContainer } from "../../lib/motion";

function skillBarVariants(proficiency: number) {
  return {
    hidden: { width: 0 },
    visible: {
      width: `${proficiency}%`,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.15,
      },
    },
  };
}

function AnimatedSkill({
  skill_name,
  proficiency,
}: {
  skill_name: string;
  proficiency: number;
}) {
  return (
    <motion.div variants={fadeInUp} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">
          {skill_name}
        </span>
        <motion.span
          variants={fadeInUp}
          className="text-xs text-muted-foreground tabular-nums"
        >
          {proficiency}%
        </motion.span>
      </div>
      <div className="relative h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          variants={skillBarVariants(proficiency)}
          className="absolute inset-y-0 left-0 rounded-full bg-primary"
        />
      </div>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <ScrollReveal className="container-narrow">
        <SectionHeading
          label="Skills"
          title="Technical expertise"
          subtitle="Core technologies I use to design, build, and ship production-ready applications."
        />

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl"
        >
          {data.skills.map(({ skill_name, proficiency }) => (
            <AnimatedSkill
              key={skill_name}
              skill_name={skill_name}
              proficiency={proficiency}
            />
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  );
};

export default Skills;
