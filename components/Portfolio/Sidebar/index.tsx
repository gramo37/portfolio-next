"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code2,
  FolderKanban,
  Home,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { data, navOptions } from "../../../constants";
import { cn } from "../../../lib/utils";
import ThemeButton from "../Navbar/ThemeButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { useSidebar } from "./sidebar-context";

const navIcons: Record<string, React.ElementType> = {
  Home,
  About: UserRound,
  Experience: Briefcase,
  Projects: FolderKanban,
  Skills: Code2,
  Contact: Mail,
};

function NavLink({
  title,
  link,
  collapsed,
  onNavigate,
}: {
  title: string;
  link: string;
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  const Icon = navIcons[title] ?? Home;

  const content = (
    <Link
      href={link}
      onClick={onNavigate}
      className={cn(
        "group flex items-center rounded-lg text-sm font-medium transition-colors",
        "text-muted-foreground hover:bg-muted hover:text-foreground",
        collapsed
          ? "h-11 w-11 justify-center mx-auto"
          : "h-11 gap-3 px-3 w-full",
      )}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden />
      <AnimatePresence mode="wait">
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="truncate overflow-hidden whitespace-nowrap"
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );

  if (collapsed) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent side="right" sideOffset={12}>
          {title}
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
}

function SidebarPanel({
  collapsed,
  showLabels,
  onNavigate,
  onToggle,
  showToggle,
}: {
  collapsed: boolean;
  showLabels: boolean;
  onNavigate?: () => void;
  onToggle?: () => void;
  showToggle: boolean;
}) {
  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          "flex items-center border-b border-border shrink-0",
          collapsed ? "justify-center px-2 py-5" : "gap-3 px-4 py-5",
        )}
      >
        <Link
          href="#home"
          onClick={onNavigate}
          className={cn(
            "flex items-center",
            collapsed ? "justify-center" : "gap-3 min-w-0",
          )}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
            {initials}
          </span>
          <AnimatePresence>
            {showLabels && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className="min-w-0 overflow-hidden"
              >
                <p className="truncate text-sm font-semibold text-foreground">
                  {data.name.split(" ")[0]}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {data.profession}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {navOptions.map((option) => (
          <NavLink
            key={option.title}
            title={option.title}
            link={option.link}
            collapsed={collapsed && !showLabels}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div
        className={cn(
          "border-t border-border p-3 space-y-2 shrink-0",
          collapsed && !showLabels && "flex flex-col items-center",
        )}
      >
        <div
          className={cn(
            "flex items-center my-2",
            collapsed && !showLabels
              ? "justify-center"
              : "justify-between gap-2 px-1",
          )}
        >
          {!collapsed || showLabels ? (
            <span className="text-xs font-medium text-muted-foreground">
              Theme
            </span>
          ) : null}
          <ThemeButton />
        </div>

        {showToggle && onToggle && (
          <button
            type="button"
            onClick={onToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className={cn(
              "flex items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              collapsed && !showLabels
                ? "h-11 w-11 justify-center mx-auto"
                : "h-10 w-full justify-center gap-2 px-3 text-sm",
            )}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" />
                <span>Collapse</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Sidebar() {
  const {
    expanded,
    mobileOpen,
    isDesktop,
    sidebarWidth,
    toggleExpanded,
    setMobileOpen,
    closeMobile,
  } = useSidebar();

  const desktopCollapsed = isDesktop && !expanded;
  return (
    <TooltipProvider delayDuration={0}>
      {/* Mobile menu toggles — hamburger left, close right */}
      {!isDesktop && (
        <>
          <AnimatePresence>
            {!mobileOpen && (
              <motion.button
                key="menu-open"
                type="button"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation"
                className="fixed top-4 left-4 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background shadow-md transition-colors hover:bg-muted md:hidden"
              >
                <Menu className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {mobileOpen && (
              <motion.button
                key="menu-close"
                type="button"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={closeMobile}
                aria-label="Close navigation"
                aria-expanded
                className="fixed top-4 right-4 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 bg-muted shadow-md transition-colors hover:bg-muted/80 md:hidden"
              >
                <X className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Mobile full-screen sidebar */}
      <AnimatePresence>
        {!isDesktop && mobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex h-full w-full flex-col bg-card md:hidden"
          >
            <SidebarPanel
              collapsed={false}
              showLabels
              onNavigate={closeMobile}
              showToggle={false}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      {isDesktop && (
        <motion.aside
          initial={false}
          animate={{ width: sidebarWidth }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-y-0 left-0 z-40 hidden border-r border-border bg-card md:flex flex-col"
          style={{
            width: sidebarWidth,
            minWidth: sidebarWidth,
          }}
        >
          <SidebarPanel
            collapsed={desktopCollapsed}
            showLabels={!desktopCollapsed}
            onToggle={toggleExpanded}
            showToggle
          />
        </motion.aside>
      )}
    </TooltipProvider>
  );
}

export function SidebarInset({ children }: { children: React.ReactNode }) {
  const { sidebarWidth, isDesktop } = useSidebar();

  return (
    <motion.div
      initial={false}
      animate={{
        marginLeft: isDesktop ? sidebarWidth : 0,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen min-w-0 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
