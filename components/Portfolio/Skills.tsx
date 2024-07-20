"use client";

import * as React from "react";

import { Progress } from "../ui/progress";
import { data } from "../../constants";

const Skill = ({ percent }) => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percent), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[90%]" />;
};

const Skills = () => {
  return (
    <div className="p-4 mx-3 pb-10" id="skills">
      <div className="md:my-5 w-fit mb-5">
        <p className="text-2xl text-muted-foreground italic">Area Of</p>
        <h1 className="text-4xl md:text-5xl font-bold text-secondary">
          Expertise
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-5">
        {data.skills.map(({ skill_name, proficiency }) => {
          return (
            <div key={skill_name}>
              <h1 className="text-xl font-bold">{skill_name}</h1>
              <Skill percent={proficiency} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
