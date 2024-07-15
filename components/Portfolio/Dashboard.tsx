"use client";

import Typewriter from "../Typewriter";

const professions = [
  "Frontend Developer",
  "FullStack Developer",
  "Backend Developer",
];

export default function Dashboard() {

  return (
    <div className="mt-[120px] border">
      <div className="">
        <Typewriter className="text-foreground" words={professions} delay={100} />
      </div>
    </div>
  );
}
