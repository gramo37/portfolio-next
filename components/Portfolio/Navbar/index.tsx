"use client";

import ThemeButton from "./ThemeButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../../ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { data, navOptions } from "../../../constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useDebouncedScroll from "../../../hooks/useDebounceedScroll";
import { cn } from "../../../lib/utils";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useDebouncedScroll((scrollY) => {
    setScrolled(scrollY > 20);
  }, 10);

  if (!mounted) return null;

  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link
          href="#home"
          className="flex items-center gap-2 font-semibold text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm text-primary-foreground">
            {initials}
          </span>
          <span className="hidden sm:inline text-sm tracking-tight">
            {data.name.split(" ")[0]}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navOptions.map((option) => (
            <Link
              key={option.title}
              href={option.link}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {option.title}
            </Link>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:block"
        >
          <ThemeButton />
        </motion.div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm p-0">
              <SheetHeader className="border-b border-border p-6">
                <p className="text-left font-semibold">{data.name}</p>
              </SheetHeader>
              <SheetDescription asChild>
                <div className="flex flex-col">
                  {navOptions.map((option, i) => (
                    <motion.button
                      key={option.title}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-border px-6 py-4 text-left text-base font-medium text-foreground"
                      onClick={() => {
                        setOpen(false);
                        router.push(option.link);
                      }}
                    >
                      {option.title}
                    </motion.button>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="px-6 py-4"
                  >
                    <ThemeButton
                      type="text"
                      className="text-sm font-medium text-muted-foreground"
                      onClickFunc={() => setOpen(false)}
                    />
                  </motion.div>
                </div>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
