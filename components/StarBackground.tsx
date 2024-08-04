"use client";

import { useEffect, CSSProperties } from "react";

const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 75; i++) {
    const style: CSSProperties = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 200}vh`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
    };
    stars.push(
      <div
        key={i}
        className="star dark:bg-white bg-yellow-600 absolute rounded-[50%]"
        style={style}
      ></div>,
    );
  }
  return stars;
};

const StarBackground: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const stars = document.querySelectorAll<HTMLDivElement>(".star");
      stars.forEach((star) => {
        const speed = parseFloat(star.style.width) || 1;
        const originalTop = parseFloat(
          star.getAttribute("data-original-top") || "0",
        );
        let newTop =
          (originalTop + (window.scrollY + 1000) * speed * 0.5) %
          window.innerHeight;
        star.style.top = `${newTop}px`;
      });
    };

    const stars = document.querySelectorAll<HTMLDivElement>(".star");
    stars.forEach((star) => {
      star.setAttribute("data-original-top", star.style.top);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full h-screen overflow-hidden bg-primary-foreground -z-50">
      {generateStars()}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white"></div>
    </div>
  );
};

export default StarBackground;
