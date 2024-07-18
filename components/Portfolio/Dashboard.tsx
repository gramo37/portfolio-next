"use client";

import Typewriter from "../Typewriter";
import { Button } from "../ui/button";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { Bar, BarChart } from "recharts";
import { CiCirclePlus } from "react-icons/ci";
import { FaThumbsUp } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Badge } from "../ui/badge";

const professions = ["Frontend", "Backend", "FullStack"];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function Dashboard() {
  return (
    <div className="mt-[100px]">
      <div className="flex justify-around items-center flex-col my-5 md:my-2">
        <div className="my-5">
          <Typewriter
            className="text-4xl text-secondary border-r-secondary font-semibold"
            words={professions}
            interval={150}
          />
          <span className="text-4xl text-primary ml-1">Developer</span>
        </div>
        <div className="mx-4 mt-2 text-accent-foreground sm:w-[50vw] w-[60vw] font-light">
          <p className="text-center italic">
            Innovative Full Stack Developer{" "}
            <span className="not-italic text-center">|</span> 3 Year Web
            development Experience in React, NodeJs, Postgres, MongoDB and
            Typescript
          </p>
        </div>
        <div className="flex m-4 gap-4 justify-around">
          <Button variant="secondary">Contact Me</Button>
          <Button>Download CV</Button>
        </div>
      </div>
      <div className="relative h-[70vh]">
        <div className="h-fit bg-accent rounded-md absolute top-40 xl:top-52 right-20 hidden lg:block">
          <div className="relative p-4">
            <Badge className="-top-4 -left-4 p-0 bg-secondary absolute rounded-full w-fit h-fit hover:bg-secondary">
              <div className="relative">
                <div className="absolute top-1 right-[0.6rem] w-3 h-3 bg-destructive rounded-full flex justify-center items-center">
                  <span className="rounded-full p-[2px] text-[8px] text-destructive-foreground">
                    4
                  </span>
                </div>
                <FaBell className="h-6 w-6 m-3 text-destructive-foreground" />
              </div>
            </Badge>
            <div className="flex justify-between my-4 px-4 py-3 rounded-lg bg-white">
              <div>
                <h1 className="text-lg font-bold text-muted-foreground">
                  Post Insight
                </h1>
                <p className="text-sm text-muted-foreground italic">
                  Mar 21 - Apr 21
                </p>
              </div>
              <div className="flex items-center mr-1">
                <div className="flex justify-between items-center border rounded-sm py-1 px-2">
                  <p className="text-black text-sm">Week 1</p>
                  <CiCirclePlus className="h-5 w-5 ml-3 text-black" />
                </div>
              </div>
            </div>
            <ChartContainer config={chartConfig} className="min-h-[200px] ">
              <BarChart accessibilityLayer data={chartData}>
                <Bar
                  dataKey="desktop"
                  fill="var(--color-desktop)"
                  radius={4}
                  className="mx-10"
                />
                <Bar
                  dataKey="mobile"
                  fill="var(--color-mobile)"
                  radius={4}
                  className="mx-10"
                />
              </BarChart>
            </ChartContainer>
            <div className="flex justify-between my-4 p-4 rounded-lg bg-white">
              <div className="flex gap-2 items-center">
                <div>
                  <FaThumbsUp className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-muted-foreground">
                    Best Performance
                  </h1>
                  <p className="text-sm text-muted-foreground italic">Sunday</p>
                </div>
              </div>
              <div>
                <p className="text-md text-muted-foreground font-semibold">
                  1M
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
