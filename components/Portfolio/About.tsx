"use client";

import { useState } from "react";
import { GrNodes } from "react-icons/gr";
import { FaReact } from "react-icons/fa6";
import { cn } from "../../lib/utils";

const data = {
  "Frontend Development": {
    points: [
      "Lorem ipsum sit amet consectetur adipisicing elit. NostrumLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
      "Lorem ipsum  sit amet consectetur adipisicing elit. Nostrum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
    ],
    linesOfCode: 10000,
    icon: FaReact,
    color: "#4ade80",
    projectsCompleted: 10,
  },
  "Backend Development": {
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum",
    ],
    linesOfCode: 14000,
    icon: GrNodes,
    color: "#60a5fa",
    projectsCompleted: 20,
  },
};

export const About = () => {
  const [tab, setTab] = useState("Frontend Development");
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-3 sm:text-center md:my-5 mx-5">
        How can I help?
      </h1>
      <div className="flex lg:flex-row flex-col items-start lg:items-center justify-center p-3 pb-0 lg:p-12">
        <div className="p-2 lg:pt-0 flex flex-row lg:flex-col gap-3 w-full md:w-fit border md:border-none overflow-scroll">
          {Object.keys(data).map((item) => {
            return (
              <div
                className={cn(
                  "cursor-pointer flex justify-start items-center w-fit lg:items-start gap-3 lg:mb-5 bg-muted/50 p-2 lg:p-4 rounded-lg",
                  `${item === tab && "bg-muted border"}`
                )}
                onClick={() => {
                  setTab(item);
                }}
              >
                <div
                  className="text-5xl lg:text-7xl"
                  style={{
                    color: data[item].color,
                  }}
                >
                  {data[item].icon()}
                </div>
                <div className="text-muted-foreground">
                  <h1 className="text-lg lg:text-2xl font-bold">{item}</h1>
                  <p className="hidden lg:block">
                    {data[item].projectsCompleted} Projects Completed
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:mx-4 p-4 lg:w-[40vw] my-2">
          <div className="pl-4">
            {data[tab].points.map((point) => {
              return <p className="my-4">{point}</p>;
            })}
          </div>
          <div className="border rounded-md w-fit p-2 bg-primary-foreground">
            <p className="text-4xl md:text-5xl text-muted-foreground">
              {data[tab].linesOfCode}+
            </p>
            <p className="ml-3 italic">Lines of code</p>
          </div>
        </div>
      </div>
    </>
  );
};
