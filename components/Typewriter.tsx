"use client";

import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const Cursor = () => {
  return <span className="m-0 p-0 border"></span>;
};

const sleep = (delay) =>
  new Promise((res) => {
    setTimeout(res, delay);
  });

const Typewriter = ({ words, delay = 1000, interval = 100, className }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[wordIndex]);
  const [showCursor, setShowCursor] = useState(false);
  const [blinkCursor, setBlinkCursor] = useState(true);

  useEffect(() => {
    setText(words[wordIndex]);
    setCurrentIndex(0);
    setCurrentText("");
  }, [wordIndex]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (blinkCursor) setShowCursor((prev) => !prev);
    }, interval*2);

    return () => clearTimeout(t);
  }, [interval, blinkCursor, currentIndex, showCursor]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setBlinkCursor(false);
        setShowCursor(true);
      }, interval);

      return () => clearTimeout(timeout);
    } else {
      setBlinkCursor(true);
      sleep(delay).then(() => {
        setWordIndex((prev) => {
          let temp = prev;
          temp += 1;
          temp %= words.length;
          return temp;
        });
      });
    }
  }, [currentIndex, interval, text]);

  return (
    <span className={cn(`${showCursor ? "border border-y-0 border-l-0 border-primary border-r-2": ""}`, className)}>
      {currentText}
    </span>
  );
};

export default Typewriter;
