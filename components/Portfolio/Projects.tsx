"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { data } from "../../constants";
import ScrollReveal from "./ScrollReveal";
import { fadeInUp, staggerContainer } from "../../lib/motion";

interface Project {
  project_name: string;
  category: string;
  description: string[];
  background_img_url: string;
  project_link: string;
  project_date: string;
}

function ProjectCard({
  project_name,
  category,
  description,
  background_img_url,
  project_link,
  project_date,
}: Project) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={background_img_url}
          alt={project_name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {project_name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{project_date}</p>
          </div>
          <Badge variant="secondary" className="shrink-0 text-xs">
            {category}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
          {description[0]}
        </p>

        <Link
          href={project_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          View project
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export const Projects = () => {
  const categories = Array.from(new Set(data.project.map((pr) => pr.category)));
  const [filter, setFilter] = React.useState("all");

  const filtered =
    filter === "all"
      ? data.project
      : data.project.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding border-t border-border">
      <ScrollReveal className="container-narrow">
        <motion.div variants={fadeInUp} className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
                Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Selected work
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl text-base md:text-lg">
                A sample of products and contributions across full-stack,
                frontend, and open source.
              </p>
            </div>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px] shrink-0">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={`${project.project_name}-${index}`}
              {...project}
            />
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  );
};
