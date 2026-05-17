"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { data } from "../../constants";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "../../lib/motion";

function AnimatedSkill({
  skill_name,
  proficiency,
}: {
  skill_name: string;
  proficiency: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref} variants={fadeInUp} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">
          {skill_name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-xs text-muted-foreground"
        >
          {proficiency}%
        </motion.span>
      </div>
      <div className="relative h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <motion.div
        className="container-narrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
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
      </motion.div>
    </section>
  );
};

export default Skills;
