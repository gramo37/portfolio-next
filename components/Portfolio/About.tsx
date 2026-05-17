"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { data } from "../../constants";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "../../lib/motion";

export const About = () => {
  const tabs = Object.keys(data.about);
  const [tab, setTab] = useState(tabs[0]);

  return (
    <section id="about" className="section-padding border-t border-border">
      <motion.div
        className="container-narrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionHeading
          label="About"
          title="What I bring to the table"
          subtitle="Focused on delivering reliable, maintainable software with clear communication and attention to detail."
        />

        <div className="grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-12">
          <motion.div
            variants={fadeInUp}
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
          >
            {tabs.map((item) => {
              const Icon = data.about[item].icon;
              const isActive = item === tab;
              return (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all whitespace-nowrap lg:whitespace-normal",
                    isActive
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                  )}
                >
                  <Icon
                    className="h-5 w-5 shrink-0"
                    style={{ color: data.about[item].color }}
                  />
                  <span className="text-sm font-medium">{item}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-border bg-card p-6 md:p-8"
              >
                <motion.div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
                  <h3 className="text-xl font-semibold">{tab}</h3>
                  <span className="text-sm text-muted-foreground">
                    {data.about[tab].projectsCompleted}+ projects
                  </span>
                </motion.div>

                <ul className="space-y-5">
                  {data.about[tab].points.map((point, index) => {
                    const colonIndex = point.indexOf(":");
                    const title =
                      colonIndex > -1 ? point.slice(0, colonIndex) : point;
                    const description =
                      colonIndex > -1 ? point.slice(colonIndex + 1).trim() : "";

                    return (
                      <li key={index} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <motion.div
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <p className="font-medium text-foreground">{title}</p>
                          {description && (
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                              {description}
                            </p>
                          )}
                        </motion.div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
