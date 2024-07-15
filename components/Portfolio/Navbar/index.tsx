import ThemeButton from "./ThemeButton";

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
    <div className="fixed w-[100vw] top-2">
    <div className="flex justify-between px-5 py-7 bg-accent mx-10 my-5 rounded-full">
      <div className="ml-9">Logo</div>
      <div className="">
        <ul className="flex gap-10">
          {options.map((option) => {
            return (
              <li key={option.title} className="font-bold text-muted-foreground cursor-pointer">
                {option.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mr-9">
        <ThemeButton />
      </div>
    </div>
    </div>
  );
}
