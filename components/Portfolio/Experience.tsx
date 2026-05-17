"use client";

import { motion } from "framer-motion";
import { data } from "../../constants";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { fadeInUp, scaleIn, staggerContainer } from "../../lib/motion";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  duration: string;
  meta?: string;
  description: string[];
}

function TimelineItem({
  title,
  subtitle,
  duration,
  meta,
  description,
}: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-6 border-l-2 border-border"
    >
      <motion.div
        variants={scaleIn}
        className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background"
      />

      <motion.div className="rounded-xl border border-border bg-card p-5 md:p-6 transition-shadow hover:shadow-md">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <span className="text-xs text-muted-foreground">{duration}</span>
        </div>
        <h4 className="font-medium text-foreground">{subtitle}</h4>
        {meta && <p className="text-sm text-primary mt-0.5">{meta}</p>}
        <ul className="mt-4 space-y-2">
          {description.map((point, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground leading-relaxed flex gap-2"
            >
              <span className="text-primary shrink-0">—</span>
              <span>{point.replace(/^-\s*/, "")}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <ScrollReveal className="container-narrow">
        <SectionHeading
          label="Experience"
          title="Professional journey"
          subtitle={`${data.totalExperience} building products for startups and enterprise clients.`}
        />

        <motion.div variants={staggerContainer} className="space-y-8">
          {data.workExperience.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.company_name}
              subtitle={item.profession}
              duration={item.duration}
              meta={item.totalExperience}
              description={item.description}
            />
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-20">
          <SectionHeading label="Education" title="Academic background" />
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {data.education.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <motion.div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.degree_name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.university_name}
                    </p>
                  </div>
                  {item.cgpa && (
                    <span className="text-sm font-medium text-primary shrink-0">
                      {item.cgpa}
                    </span>
                  )}
                </motion.div>
                <p className="text-xs text-muted-foreground mb-4">
                  {item.duration}
                </p>
                <ul className="space-y-2">
                  {item.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
};

export default Experience;
