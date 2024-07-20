import React from "react";
import { navOptions } from "../../constants";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center">
          <nav className="flex space-x-4 mt-4 md:mt-0 font-bold cursor-pointer">
            {navOptions?.map((item, i) => {
              return (
                <Link key={i} href={item.link}>
                  <p className="hover:text-gray-400">{item.title}</p>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-4 md:mt-0">
          <p>
            Email:{" "}
            <a href="mailto:example@mail.com" className="hover:text-gray-400">
              example@mail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-gray-400">
              +123 456 7890
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
