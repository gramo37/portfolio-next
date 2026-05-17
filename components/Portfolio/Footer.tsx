"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { data, navOptions } from "../../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border bg-muted/30"
    >
      <div className="container-narrow py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <p className="font-semibold text-foreground">{data.name}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {data.profession}
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navOptions.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-muted-foreground">
            <a
              href={`mailto:${data.email}`}
              className="hover:text-foreground transition-colors"
            >
              {data.email}
            </a>
          </div>
        </motion.div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted-foreground">
          <p>
            © {year} {data.name}. All rights reserved.
          </p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
