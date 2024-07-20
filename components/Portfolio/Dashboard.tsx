"use client";

import * as React from "react";
import Typewriter from "../Typewriter";
import { Button } from "../ui/button";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Image from "next/image";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { ContactForm } from "./Contact";
import { professions, data } from "../../constants";
import Link from "next/link";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  return (
    <div id="home" className="pt-16 md:pt-[120px]">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[825px]">
          <DialogHeader></DialogHeader>
          <div className="ml-5">
            <h1 className="text-3xl md:text-4xl font-bold">
              Let's talk about everything!
            </h1>
            <p className="my-2 text-md md:text-lg italic text-muted-foreground">
              Don't like forms? Send me an{" "}
              <a
                className="text-secondary underline cursor-pointer font-bold not-italic"
                href="mailto:gramopadhye37@gmail.com"
              >
                email
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </DialogContent>
      </Dialog>
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="z-30 w-fit mx-10 rounded-md">
            <div className="w-fit h-fit overflow-hidden rounded-full shadow-sm shadow-black dark:shadow-white">
              <Image
                className="w-[300px] h-[300px] bg-gray-200 rounded-full md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-fill"
                width={300}
                height={300}
                src={data.profile_photo}
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex justify-around items-center flex-col my-5 md:my-2 mx-3 pt-10">
            <h3 className="text-accent-foreground text-2xl">Hello, I'm</h3>
            <h1 className="text-4xl text-accent-foreground my-0 font-bold text-center">
              {data.name}
            </h1>
            <div className="my-2">
              <Typewriter
                className="text-4xl text-secondary border-r-secondary font-semibold"
                words={professions}
                interval={150}
              />
              <span className="text-4xl text-primary ml-1">Developer</span>
            </div>
            <div className="flex m-4 gap-4 justify-around">
              <Button variant="secondary" onClick={() => setOpen(true)}>
                Contact Me
              </Button>
              <Button>
                <a target="blank" href={data.resume_link}>
                  Download CV
                </a>
              </Button>
            </div>
            <div className="flex mx-4 p-4 w-[200px] h-20 items-center gap-4 justify-around">
              <Link
                className="text-4xl hover:text-5xl transition-all"
                href={data.twitter_link}
                target="blank"
              >
                <FaTwitter />
              </Link>
              <Link
                className="text-4xl hover:text-5xl transition-all"
                href={data.linkedin_link}
                target="blank"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="text-4xl hover:text-5xl transition-all"
                href={data.github_link}
                target="blank"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
