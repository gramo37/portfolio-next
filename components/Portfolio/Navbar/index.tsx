import ThemeButton from "./ThemeButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const options = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
];

export default function Navbar() {
  return (
    <div className="fixed w-[100vw] top-0 z-50">
      <div className="flex justify-between items-center px-5 py-7 bg-accent mx-10 my-3 rounded-full">
        <div className="ml-9">Logo</div>
        <div className="hidden md:block">
          <ul className="flex gap-10">
            {options.map((option) => {
              return (
                <li
                  key={option.title}
                  className="font-bold text-muted-foreground cursor-pointer"
                >
                  {option.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:block mr-9">
          <ThemeButton />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className="h-8 w-8 mr-7"/>
            </SheetTrigger>
            <SheetContent side="top" className="p-0 pt-8 bg-muted">
              <SheetHeader>
                <SheetDescription className="h-[100vh]">
                  <div className="flex flex-col justify-center items-center">
                    {options.map((option) => {
                      return (
                        <div
                          key={option.title}
                          className="text-3xl border-muted-foreground/20 border border-x-0 border-t-0 border-b-1 w-full text-center py-10 font-semibold text-muted-foreground cursor-pointer"
                        >
                          {option.title}
                        </div>
                      );
                    })}
                    <ThemeButton
                      type="text"
                      className="md:hidden text-3xl border-muted-foreground/20 border border-x-0 border-t-0 border-b-1 w-full text-center py-10 font-semibold text-muted-foreground cursor-pointer"
                    />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
