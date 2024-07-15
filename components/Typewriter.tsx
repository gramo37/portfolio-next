"use client";

import React, { useState, useEffect } from "react";

const Typewriter = ({ words, delay, className }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[wordIndex]);

  useEffect(() => {
    setText(words[wordIndex])
  }, [wordIndex])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
        setWordIndex((prev) => {
            let temp = prev;
            temp += 1;
            temp %= words.length;
            return temp;
        });
        setCurrentIndex(0);
        setCurrentText("")
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{currentText}</span>;
};

export default Typewriter;
