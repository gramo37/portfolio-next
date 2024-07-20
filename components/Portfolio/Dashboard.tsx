"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import Typewriter from "../Typewriter";
import { Button } from "../ui/button";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { Checkbox } from "../ui/checkbox";
import { Bar, BarChart } from "recharts";
import { CiCirclePlus } from "react-icons/ci";
import { FaThumbsUp } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";

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

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function TableContainer() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="h-fit lg:w-[290px] xl:w-[350px] rounded-md absolute top-20 xl:top-24 lg:left-4 xl:left-20 hidden lg:block">
      <div className="relative bg-accent p-4">
        <h1 className="mx-2 text-lg font-bold text-muted-foreground">
          Payment Status
        </h1>
        <div className="w-full">
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter emails..."
              value={
                (table.getColumn("email")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("email")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="hidden xl:block">
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border bg-white dark:bg-black h-[200px] overflow-hidden">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className="text-black dark:text-white"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="items-center justify-end space-x-2 py-4 hidden xl:flex">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-[120px]">
        <div className="z-40 w-fit mx-3 rounded-md">
          <Image
            className="w-[300px] h-[300px] bg-gray-200 rounded-full md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
            width={100}
            height={100}
            src="/profile.jpeg"
            alt="Profile"
          />
        </div>
        <div className="flex justify-around items-center flex-col my-5 md:my-2 mx-3 pt-10">
          <h3 className="text-accent-foreground text-2xl">Hello, I'm</h3>
          <h1 className="text-4xl text-accent-foreground my-0 font-bold text-center">
            Prasanna Gramopadhye
          </h1>
          <div className="my-2">
            <Typewriter
              className="text-4xl text-secondary border-r-secondary font-semibold"
              words={professions}
              interval={150}
            />
            <span className="text-4xl text-primary ml-1">Developer</span>
          </div>
          {/* <div className="mx-4 mt-2 text-accent-foreground sm:w-[50vw] w-[60vw] font-light">
            <p className="text-center italic">
              Innovative Full Stack Developer{" "}
              <span className="not-italic text-center">|</span> 3 Year Web
              development Experience in React, NodeJs, Postgres, MongoDB and
              Typescript
            </p>
          </div> */}
          <div className="flex m-4 gap-4 justify-around">
            <Button variant="secondary">Contact Me</Button>
            <Button>Download CV</Button>
          </div>
          <div className="flex mx-4 p-4 w-[200px] h-20 items-center gap-4 justify-around">
            <a
              className="text-4xl hover:text-5xl transition-all"
              href="https://google.com"
            >
              <FaTwitter />
            </a>
            <a
              className="text-4xl hover:text-5xl transition-all"
              href="https://google.com"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-4xl hover:text-5xl transition-all"
              href="https://google.com"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="relative h-[100vh] border hidden lg:block mt-20">
        <h1 className="text-center text-2xl font-bold">
          Turning Ideas into reality
        </h1>
        <Chart />
        <TableContainer />
      </div> */}
    </div>
  );
}
