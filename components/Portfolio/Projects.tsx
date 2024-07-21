"use client";

import * as React from "react";

import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { data } from "../../constants";
import { cn } from "../../lib/utils";

const ProjectCard = ({
  project_name,
  project_link,
  background_img_url,
  description,
}) => {
  const [showContent, setShowContent] = React.useState(false);

  const clickHandler = (e) => {
    window.open(project_link, "_blank");
  };

  return (
    <Card
      className="relative rounded-lg"
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
      onClick={clickHandler}
    >
      <CardContent
        className="flex aspect-square p-6 bg-cover bg-center bg-no-repeat cursor-pointer rounded-lg"
        style={{
          backgroundImage: `url(${background_img_url})`,
        }}
      >
        <div className="absolute bottom-0 mb-5 text-white text-5xl z-30 text-center lg:hidden">
          <button
            onClick={(e) => {
              if(!showContent) setShowContent(true);
              else if(showContent) setShowContent(false);
              e.preventDefault();
              e.stopPropagation();
            }}
            className="shadow-lg shadow-white rounded-full border p-2"
          >
            {showContent ? <FaArrowCircleDown /> : <FaArrowCircleUp />}
          </button>
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 z-20 rounded-lg">
          <div className="text-white relative  m-5">
            <h1 className="text-lg font-bold">{project_name}</h1>
            {/* <p className="text-md">Online Exam Portal</p> */}
          </div>
        </div>
        <div
          className={cn(
            "absolute inset-0 bg-gray-900 bg-opacity-100 z-20 p-4 transition-transform rounded-lg",
            `${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-[100%] opacity-0"
            }`
          )}
        >
          <div className="text-white relative border h-full w-full">
            <div
              className={`flex flex-col gap-4 justify-start items-center border p-4 h-full overflow-auto`}
            >
              <h1 className="text-lg font-bold">{project_name}</h1>
              {description.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-4xl md:text-5xl font-bold mb-3 sm:text-center md:my-5 mx-5 mt-5">
        My Latest Works
      </h1>
      <p className="text-lg text-muted-foreground italic mx-5 sm:text-center">
        Turning Ideas to Reality
      </p>
      <div className="my-4 px-5 w-[85%] sm:w-[90%] mx-auto">
        <Carousel className="">
          <CarouselContent className="-ml-1">
            {data.project.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <ProjectCard {...item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
