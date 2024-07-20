import { ChartConfig, ChartContainer } from "./ui/chart";
import { Bar, BarChart } from "recharts";
import { CiCirclePlus } from "react-icons/ci";
import { FaThumbsUp } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Badge } from "./ui/badge";

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

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
];

const Chart = () => {
  return (
    <div className="h-fit lg:w-[290px] xl:w-[350px] rounded-md absolute top-20 xl:top-24 lg:right-4 xl:right-20 hidden lg:block">
      <div className="relative p-4 bg-accent">
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
          <div className="items-center mr-1 hidden xl:flex">
            <div className="flex justify-between items-center border rounded-sm py-1 px-2">
              <p className="text-black text-sm">Week 1</p>
              <CiCirclePlus className="h-5 w-5 ml-3 text-black" />
            </div>
          </div>
        </div>
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] lg:w-[260px] xl:w-[320px]"
        >
          <BarChart accessibilityLayer data={chartData}>
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
        <div className="justify-between my-4 p-4 rounded-lg bg-white hidden xl:flex">
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
            <p className="text-md text-muted-foreground font-semibold">1M</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
