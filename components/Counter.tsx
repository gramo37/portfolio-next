"use client";

import { useState, useEffect, useRef } from "react";

interface CounterProps {
  interval?: number;
  increment?: number;
  limit: number;
}

const Counter: React.FC<CounterProps> = ({
  limit,
  interval = 80,
  increment = 1050,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [counterRef, limit]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVisible && count < limit) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + 1 >= limit) {
            clearInterval(timer);
            setCount(limit);
            return limit;
          }
          return prevCount + increment;
        });
      }, interval);
    }

    return () => clearInterval(timer);
  }, [isVisible, count, limit]);

  return <div ref={counterRef}>{count >= limit ? limit : count}</div>;
};

export default Counter;
