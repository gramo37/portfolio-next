"use client";

import ThemeButton from "./ThemeButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../../ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { navOptions } from "../../../constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useViewportHeight from "../../../hooks/useViewPortHeight";
import useDebouncedScroll from "../../../hooks/useDebounceedScroll";
import { cn } from "../../../lib/utils";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
    setMounted(true);
  }, []);

  useViewportHeight();
  useDebouncedScroll((scrollY) => {
    if (scrollY === lastScrollY) {
      return;
    } else if (scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(scrollY);
  }, 10);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed w-[100vw] top-0 z-40 transition-all translate-y-0",
        `${isVisible ? "md:translate-y-0" : "md:-translate-y-full"}`,
      )}
    >
      <div className="flex justify-between items-center px-0 md:px-5 py-5 md:py-7 bg-transparent md:bg-accent md:mx-10 md:my-3 md:rounded-full">
        <div className="ml-9 text-transparent">Logo</div>
        <div className="hidden md:block">
          <ul className="flex gap-10">
            {navOptions.map((option) => {
              return (
                <li
                  key={option.title}
                  className="font-bold text-muted-foreground cursor-pointer"
                >
                  <Link href={option.link}>{option.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:block mr-9">
          <ThemeButton />
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="bg-secondary-foreground mr-7 p-2 rounded-md border">
              <GiHamburgerMenu className="h-8 w-8 text-secondary" />
            </SheetTrigger>
            <SheetContent side="top" className="p-0 bg-muted">
              <SheetHeader>
                <SheetDescription className="h-screen-custom overflow-auto">
                  <div className="flex flex-col justify-between items-center h-full">
                    {navOptions.map((option) => {
                      return (
                        <div
                          key={option.title}
                          className="text-3xl border-muted-foreground/20 border border-x-0 border-t-0 border-b-1 w-full text-center py-10 font-semibold text-muted-foreground cursor-pointer"
                          onClick={() => {
                            setOpen(false);
                            router.push(option.link);
                          }}
                        >
                          {option.title}
                        </div>
                      );
                    })}
                    <ThemeButton
                      type="text"
                      className="md:hidden text-3xl border-muted-foreground/20 border border-x-0 border-t-0 border-b-1 w-full text-center py-10 font-semibold text-muted-foreground cursor-pointer"
                      onClickFunc={() => setOpen(false)}
                    />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
