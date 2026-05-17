"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const STORAGE_KEY = "sidebar-expanded";

type SidebarContextValue = {
  expanded: boolean;
  mobileOpen: boolean;
  isDesktop: boolean;
  isCollapsed: boolean;
  sidebarWidth: number;
  setExpanded: (value: boolean) => void;
  toggleExpanded: () => void;
  setMobileOpen: (value: boolean) => void;
  closeMobile: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export const SIDEBAR_WIDTH_EXPANDED = 240;
export const SIDEBAR_WIDTH_COLLAPSED = 72;

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [expanded, setExpandedState] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setExpandedState(stored === "true");
    }
    setHydrated(true);
  }, []);

  const setExpanded = useCallback((value: boolean) => {
    setExpandedState(value);
    localStorage.setItem(STORAGE_KEY, String(value));
  }, []);

  const toggleExpanded = useCallback(() => {
    setExpandedState((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (isDesktop) setMobileOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    if (!mobileOpen || isDesktop) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen, isDesktop]);

  const isCollapsed = isDesktop && !expanded;
  const sidebarWidth = isDesktop
    ? expanded
      ? SIDEBAR_WIDTH_EXPANDED
      : SIDEBAR_WIDTH_COLLAPSED
    : 0;

  const value = useMemo(
    () => ({
      expanded: hydrated ? expanded : true,
      mobileOpen,
      isDesktop,
      isCollapsed: isDesktop && !(hydrated ? expanded : true),
      sidebarWidth: hydrated ? sidebarWidth : SIDEBAR_WIDTH_EXPANDED,
      setExpanded,
      toggleExpanded,
      setMobileOpen,
      closeMobile,
    }),
    [
      expanded,
      mobileOpen,
      isDesktop,
      hydrated,
      sidebarWidth,
      setExpanded,
      toggleExpanded,
      closeMobile,
    ],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return ctx;
}
