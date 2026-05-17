"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { ContactForm } from "./Contact";
import Typewriter from "../Typewriter";
import HeroBackground from "./HeroBackground";
import { data, professions } from "../../constants";
import { fadeInUp, staggerContainer } from "../../lib/motion";

const techTags = ["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL"];

const highlights = [
  { label: "Experience", value: data.totalExperience },
  { label: "Projects", value: `${data.project.length}+` },
  { label: "Based in", value: "India" },
];

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const socialLinks = [
    { href: data.github_link, icon: FaGithub, label: "GitHub" },
    { href: data.linkedin_link, icon: FaLinkedin, label: "LinkedIn" },
    { href: data.twitter_link, icon: FaTwitter, label: "Twitter" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-x-hidden border-b border-border py-12 pt-20 md:py-16 md:pt-16"
    >
      <HeroBackground />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[640px]">
          <DialogHeader>
            <h2 className="text-2xl font-semibold">Get in touch</h2>
            <p className="text-sm text-muted-foreground">
              Prefer email?{" "}
              <a
                href={`mailto:${data.email}`}
                className="font-medium text-primary hover:underline"
              >
                {data.email}
              </a>
            </p>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>

      <motion.div
        className="container-narrow relative z-10 w-full"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
          {/* Profile — first on mobile */}
          <motion.div
            variants={fadeInUp}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="z-50 absolute -left-6 top-8 hidden rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 text-xs font-medium text-primary shadow-lg backdrop-blur-md sm:block"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="mr-1 inline h-3 w-3" />
                Open to work
              </motion.div>

              <motion.div
                className="hero-photo-frame relative rounded-[1.35rem] p-[3px]"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="relative aspect-square w-[220px] overflow-hidden rounded-[1.2rem] bg-background sm:w-[260px] lg:w-[300px]">
                  <Image
                    src={data.profile_photo}
                    alt={data.name}
                    fill
                    className="object-cover object-[center_18%]"
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -right-3 rounded-xl border border-border bg-card/90 px-3 py-2 shadow-lg backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Building
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Web Products
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="order-2 min-w-0 lg:order-1">
            <motion.div
              variants={fadeInUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]"
            >
              <span className="hero-gradient-text">{data.name}</span>
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="mt-3 flex flex-wrap items-baseline gap-x-2 text-2xl font-semibold sm:text-3xl"
            >
              <Typewriter
                words={professions}
                interval={80}
                delay={1800}
                className="text-primary"
              />
              <span className="text-foreground">Developer</span>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I craft immersive digital experiences with {data.totalExperience}{" "}
              of shipping full-stack products — from pixel-perfect UIs to
              scalable backends that scale with your users.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-wrap gap-2"
            >
              {techTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 grid grid-cols-3 gap-3 max-w-md"
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/80 bg-card/50 px-3 py-3 text-center backdrop-blur-sm"
                >
                  <p className="text-lg font-bold text-foreground sm:text-xl">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="group shadow-lg shadow-primary/20"
              >
                Let&apos;s talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="backdrop-blur-sm"
              >
                <a
                  href={data.resume_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-6 flex items-center gap-3"
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
              <span className="ml-2 hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex">
                <MapPin className="h-3.5 w-3.5" />
                Pune, India
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
