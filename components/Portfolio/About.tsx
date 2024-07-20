"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";
import { data } from "../../constants";

export const About = () => {
  const [tab, setTab] = useState("Frontend Development");
  return (
    <div id="about">
      <h1 className="text-4xl md:text-5xl font-bold mb-3 sm:text-center md:my-5 mx-5">
        How can I help?
      </h1>
      <div className="flex lg:flex-row flex-col items-start justify-center p-3 pb-0 lg:p-12">
        <div className="p-2 md:mt-10 lg:pt-0 flex flex-row lg:flex-col gap-3 w-full md:w-fit border sm:border-none overflow-y-hidden overflow-x-auto sm:overflow-x-hidden">
          {Object.keys(data.about).map((item) => {
            return (
              <div
                key={item}
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
                    color: data.about[item].color,
                  }}
                >
                  {data.about[item].icon()}
                </div>
                <div className="text-muted-foreground">
                  <h1 className="text-lg lg:text-2xl font-bold">{item}</h1>
                  <p className="hidden lg:block">
                    {data.about[item].projectsCompleted} Projects Completed
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:mx-4 lg:p-4 lg:w-[40vw] my-2">
          <div className="pl-4">
            {data.about[tab].points.map((point, index) => {
              let [title, ...description] = point.split(":");
              description = description.join("");
              return (
                <p key={index} className="my-4">
                  <span className="font-semibold">{title}: </span>
                  <span>{description}</span>
                </p>
              );
            })}
          </div>
          <div className="border rounded-md w-fit p-2 bg-primary-foreground ml-5">
            <p className="text-4xl md:text-5xl text-muted-foreground">
              {data.about[tab].linesOfCode}+
            </p>
            <p className="ml-3 italic">Lines of code</p>
          </div>
        </div>
      </div>
    </div>
  );
};
