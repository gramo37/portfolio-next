import { useState, useEffect, useRef } from "react";

const useDebouncedScroll = (
  callback: (scrollY: number) => void,
  delay: number,
) => {
  const [scrollY, setScrollY] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const firstref = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setScrollY(window.scrollY);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [delay]);

  useEffect(() => {
    // Ignore first call
    if (!firstref.current) {
      firstref.current = true;
      return;
    }
    callback(scrollY);
  }, [scrollY, callback]);
};

export default useDebouncedScroll;
